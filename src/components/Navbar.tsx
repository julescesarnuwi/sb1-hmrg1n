import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import AuthButtons from './auth/AuthButtons';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl text-gray-900">StammKids</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition">Accueil</Link>
            <Link to="/centres" className="text-gray-700 hover:text-green-600 transition">Nos Centres</Link>
            <Link to="/programmes" className="text-gray-700 hover:text-green-600 transition">Programmes</Link>
            <Link to="/soutenir" className="text-gray-700 hover:text-green-600 transition">Nous Soutenir</Link>
            <AuthButtons />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-green-50"
              >
                Accueil
              </Link>
              <Link
                to="/centres"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-green-50"
              >
                Nos Centres
              </Link>
              <Link
                to="/programmes"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-green-50"
              >
                Programmes
              </Link>
              <Link
                to="/soutenir"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-green-50"
              >
                Nous Soutenir
              </Link>
              <div className="px-3 py-2">
                <AuthButtons />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}