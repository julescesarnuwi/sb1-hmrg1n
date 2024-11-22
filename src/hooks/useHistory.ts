import { useState, useEffect } from 'react';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { HistoryEntry } from '../types/history';

export function useHistory(formId: string) {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const historyRef = collection(db, 'history');
        const q = query(
          historyRef,
          where('formId', '==', formId),
          orderBy('timestamp', 'desc')
        );
        
        const snapshot = await getDocs(q);
        const historyData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as HistoryEntry[];
        
        setHistory(historyData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch history'));
      } finally {
        setLoading(false);
      }
    }

    fetchHistory();
  }, [formId]);

  return { history, loading, error };
}