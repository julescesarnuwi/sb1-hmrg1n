import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reunificationSchema, type ReunificationForm } from '../../types/forms';
import { Save, UserPlus } from 'lucide-react';

export default function ReunificationFormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ReunificationForm>({
    resolver: zodResolver(reunificationSchema),
  });

  const onSubmit = async (data: ReunificationForm) => {
    try {
      // TODO: Implement form submission to Firebase
      console.log('Reunification form data:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto space-y-8 p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-3 mb-6">
          <UserPlus className="h-6 w-6 text-green-600" />
          <h2 className="text-2xl font-bold">Formulaire de Réunification</h2>
        </div>

        {/* Child Information */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Numéro d'Enregistrement</label>
              <input
                type="text"
                {...register("childInfo.registrationNumber")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom Complet</label>
              <input
                type="text"
                {...register("childInfo.firstName")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Guardian Information */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Information du Tuteur</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom du Tuteur</label>
            <input
              type="text"
              {...register("guardianInfo.firstName")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Relation avec l'Enfant</label>
            <input
              type="text"
              {...register("guardianInfo.relationship")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Numéro d'Identification</label>
            <input
              type="text"
              {...register("guardianInfo.idNumber")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Téléphone</label>
            <input
              type="tel"
              {...register("guardianInfo.phone")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
        </div>
      </div>

      {/* Verification Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Vérification</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Notes de Vérification</label>
            <textarea
              {...register("verification.notes")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              rows={4}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
        >
          <Save className="w-5 h-5 mr-2" />
          Enregistrer la Réunification
        </button>
      </div>
    </form>
  );
}