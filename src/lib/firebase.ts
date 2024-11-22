import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyC0cRB7UmAhGZGdlNq8-5TzOL9nywsHomI",
  authDomain: "stammkids2024.firebaseapp.com",
  projectId: "stammkids2024",
  storageBucket: "stammkids2024.firebasestorage.app",
  messagingSenderId: "385570687311",
  appId: "1:385570687311:web:78197d4e7ca534ad8e1d3a",
  measurementId: "G-M20VEGXVT5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export async function logFormHistory(formId: string, action: string, changes: any[], notes?: string) {
  const historyCollection = collection(db, 'history');
  const user = auth.currentUser;

  await addDoc(historyCollection, {
    formId,
    formType: 'child',
    timestamp: new Date().toISOString(),
    userId: user?.uid || 'anonymous',
    action,
    changes,
    notes
  });
}

export default app;