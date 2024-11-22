import React from 'react';
import { X } from 'lucide-react';
import HistoryList from './HistoryList';
import { useHistory } from '../../hooks/useHistory';

interface HistoryModalProps {
  formId: string;
  onClose: () => void;
}

export default function HistoryModal({ formId, onClose }: HistoryModalProps) {
  const { history, loading, error } = useHistory(formId);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[80vh] overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold">Historique des modifications</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto">
          <HistoryList
            history={history}
            loading={loading}
            error={error}
          />
        </div>
      </div>
    </div>
  );
}