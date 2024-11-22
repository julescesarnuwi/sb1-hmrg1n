import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Soutenir from './components/Soutenir';
import ChildForm from './components/forms/ChildForm';
import ReunificationForm from './components/forms/ReunificationForm';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/soutenir" element={<Soutenir />} />
            <Route path="/forms/child" element={<ChildForm />} />
            <Route path="/forms/reunification" element={<ReunificationForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;