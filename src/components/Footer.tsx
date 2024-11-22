import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">StammKids</h3>
            <p className="text-gray-400">
              Des centres d'accueils engagés pour l'épanouissement et le bien-être des enfants.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="/centres" className="text-gray-400 hover:text-white transition">Nos Centres</a></li>
              <li><a href="/programmes" className="text-gray-400 hover:text-white transition">Programmes</a></li>
              <li><a href="/soutenir" className="text-gray-400 hover:text-white transition">Nous Soutenir</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Informations de Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                info@fondation-stamm.org
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                (+257) 22 22 61 38
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                Bujumbura, Burundi
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Restez informé de nos activités et événements.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 rounded-l-lg w-full text-gray-900"
              />
              <button className="bg-green-600 px-4 py-2 rounded-r-lg hover:bg-green-700 transition">
                S'abonner
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} StammKids. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}