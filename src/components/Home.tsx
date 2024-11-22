import React from 'react';
import { ArrowRight, Heart, Users, Home as HomeIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-900">
          Bienvenue à <span className="text-green-600">StammKids</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Centres d'accueils chaleureux au Burundi où chaque enfant trouve sa place, son épanouissement et son avenir.
        </p>
        <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Découvrir nos centres
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-green-600">
          <HomeIcon className="h-12 w-12 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Hébergement Sécurisé</h3>
          <p className="text-gray-600">Un environnement sûr et accueillant pour chaque enfant, avec un suivi personnalisé.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-orange-500">
          <Heart className="h-12 w-12 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Accompagnement</h3>
          <p className="text-gray-600">Soutien psychosocial et éducatif adapté aux besoins de chaque enfant.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-green-600">
          <Users className="h-12 w-12 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Vie Communautaire</h3>
          <p className="text-gray-600">Activités collectives et développement des liens sociaux entre les enfants.</p>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative h-96 rounded-xl overflow-hidden">
        <img
          src="https://assets.malteser.de/EjdpVKkyBQymQ10IEuTuv8L4h-nZTtg_qXecZloLDWM/w:900/h:600/fn:Y3NtX0RhcmRhY2llbm5lM180MmI1MWI4NmU5:t/cb:26f3278cee48a1254c185a9e1e5420d82d30cf60/el:1/q:80/aHR0cDovL3R5cG8zLm1hbHRlc2VyLXByb2Quc3ZjLmNsdXN0ZXIubG9jYWwvZmlsZWFkbWluL0ZpbGVzX3NpdGVzL21hbHRlc2VyLWludGVybmF0aW9uYWwvQi1PdXJfV29yay9BZnJpY2EvQnVydW5kaS9EYXJkYWNpZW5uZTMuanBn"
          alt="Enfants du centre StammKids"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/70 to-orange-500/50 flex items-center">
          <div className="text-white p-8 max-w-lg">
            <h2 className="text-3xl font-bold mb-4">Notre Mission au Burundi</h2>
            <p className="mb-6">Offrir un environnement sûr, éducatif et bienveillant pour accompagner chaque enfant vers un avenir meilleur au cœur de l'Afrique.</p>
            <button className="bg-white text-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition">
              Nous soutenir
            </button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-white p-8 rounded-xl shadow-sm">
        <h2 className="text-3xl font-bold text-center mb-8">Notre Impact au Burundi</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">3000+</div>
            <p className="text-gray-600">Enfants accompagnés</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">20</div>
            <p className="text-gray-600">Années d'expérience</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">7</div>
            <p className="text-gray-600">Centres d'accueil</p>
          </div>
        </div>
      </section>
    </div>
  );
}