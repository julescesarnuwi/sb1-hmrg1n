import React from 'react';
import { Heart, Gift, Users, ArrowRight, Package } from 'lucide-react';

export default function Soutenir() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-900">
          Soutenez <span className="text-green-600">StammKids</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Participez à notre programme SEKA PACK et aidez-nous à offrir un avenir meilleur aux enfants du Burundi.
        </p>
      </section>

      {/* SEKA PACK Section */}
      <section className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative h-64">
          <img
            src="https://static.wixstatic.com/media/5c20c6_25d23c97508b4ade91671d8ddbdc8bd5~mv2.jpg/v1/fill/w_294,h_230,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5c20c6_25d23c97508b4ade91671d8ddbdc8bd5~mv2.jpg"
            alt="Enfants heureux"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-orange-500/80 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white">SEKA PACK</h2>
          </div>
        </div>
        
        {/* Rest of the component remains the same */}
        <div className="p-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Package className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pack Basique</h3>
              <p className="text-gray-600">25€/mois</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>Fournitures scolaires</li>
                <li>Repas quotidien</li>
                <li>Suivi médical de base</li>
              </ul>
            </div>
            
            <div className="text-center">
              <Gift className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pack Confort</h3>
              <p className="text-gray-600">50€/mois</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>Tous les avantages du Pack Basique</li>
                <li>Uniformes scolaires</li>
                <li>Activités parascolaires</li>
              </ul>
            </div>
            
            <div className="text-center">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pack Premium</h3>
              <p className="text-gray-600">100€/mois</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>Tous les avantages du Pack Confort</li>
                <li>Soutien psychologique</li>
                <li>Formation professionnelle</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://www.fondation-stamm.org/category/seka-pack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Devenir parrain
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Votre Impact</h2>
          <p className="text-gray-600 mb-8">
            Chaque contribution compte et permet de changer concrètement la vie d'un enfant. Votre parrainage assure :
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Users className="h-6 w-6 text-green-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold">Accompagnement personnalisé</h3>
                <p className="text-gray-600">Suivi individuel et soutien adapté aux besoins de chaque enfant</p>
              </div>
            </li>
            <li className="flex items-start">
              <Gift className="h-6 w-6 text-green-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold">Éducation de qualité</h3>
                <p className="text-gray-600">Accès à l'éducation et aux fournitures scolaires nécessaires</p>
              </div>
            </li>
            <li className="flex items-start">
              <Heart className="h-6 w-6 text-green-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold">Bien-être quotidien</h3>
                <p className="text-gray-600">Repas équilibrés, soins médicaux et activités épanouissantes</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="relative h-96 rounded-xl overflow-hidden">
          <img
            src="https://assets.malteser.de/f6GGVvD8ZJGMnO0Knj0Qtgsi3Ebo0c2S2VztX1R8iJ4/w:1050/h:574/fn:Y3NtX0RhcmRhY2llbm5lMV9hYjFkNDBjYWFm:t/cb:6dc3b8185922a777e10d9a8176fb1e10d4fefa9c/el:1/q:80/aHR0cDovL3R5cG8zLm1hbHRlc2VyLXByb2Quc3ZjLmNsdXN0ZXIubG9jYWwvZmlsZWFkbWluL0ZpbGVzX3NpdGVzL21hbHRlc2VyLWludGVybmF0aW9uYWwvQi1PdXJfV29yay9BZnJpY2EvQnVydW5kaS9EYXJkYWNpZW5uZTEuanBn"
            alt="Distribution de fournitures scolaires aux enfants"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-8">Besoin de plus d'informations ?</h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-gray-600 mb-8">
            Notre équipe est à votre disposition pour répondre à toutes vos questions sur le programme SEKA PACK.
          </p>
          <div className="text-center">
            <a 
              href="https://www.fondation-stamm.org/blank-2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Contactez-nous
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}