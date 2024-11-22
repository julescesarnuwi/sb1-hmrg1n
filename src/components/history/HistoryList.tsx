import React from 'react';
import { Clock, FileEdit, Archive } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import type { HistoryEntry } from '../../types/history';

interface HistoryListProps {
  history: HistoryEntry[];
  loading: boolean;
  error: Error | null;
}

export default function HistoryList({ history, loading, error }: HistoryListProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 p-4 rounded-lg bg-red-50">
        Une erreur est survenue lors du chargement de l'historique.
      </div>
    );
  }

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'created':
        return <FileEdit className="h-5 w-5 text-green-600" />;
      case 'updated':
        return <Clock className="h-5 w-5 text-blue-600" />;
      case 'archived':
        return <Archive className="h-5 w-5 text-orange-600" />;
      default:
        return null;
    }
  };

  const getActionText = (action: string) => {
    switch (action) {
      case 'created':
        return 'Création';
      case 'updated':
        return 'Modification';
      case 'archived':
        return 'Archivage';
      default:
        return action;
    }
  };

  return (
    <div className="space-y-4">
      {history.map((entry) => (
        <div key={entry.id} className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center space-x-3 mb-2">
            {getActionIcon(entry.action)}
            <span className="font-medium">{getActionText(entry.action)}</span>
            <span className="text-gray-500">
              {format(new Date(entry.timestamp), "d MMMM yyyy 'à' HH:mm", { locale: fr })}
            </span>
          </div>
          
          {entry.changes.length > 0 && (
            <div className="mt-2 space-y-1">
              {entry.changes.map((change, index) => (
                <div key={index} className="text-sm text-gray-600">
                  <span className="font-medium">{change.field}:</span>{' '}
                  {change.oldValue} → {change.newValue}
                </div>
              ))}
            </div>
          )}
          
          {entry.notes && (
            <p className="mt-2 text-sm text-gray-600 italic">
              Note: {entry.notes}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}