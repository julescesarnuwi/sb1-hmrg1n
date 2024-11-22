import React from 'react';
import { LogIn, LogOut, UserPlus } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export default function AuthButtons() {
  const { user, signOut } = useAuth();

  return (
    <div className="flex items-center space-x-4">
      {user ? (
        <>
          <span className="text-gray-700 hidden md:block">
            {user.email}
          </span>
          <button
            onClick={signOut}
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            <LogOut className="h-4 w-4 mr-2" />
            <span>Déconnexion</span>
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => window.location.href = '/login'}
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            <LogIn className="h-4 w-4 mr-2" />
            <span>Connexion</span>
          </button>
          <button
            onClick={() => window.location.href = '/register'}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            <UserPlus className="h-4 w-4 mr-2" />
            <span>Inscription</span>
          </button>
        </>
      )}
    </div>
  );
}