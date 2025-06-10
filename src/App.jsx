
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import Teams from '@/pages/Teams';
import TeamDetail from '@/pages/TeamDetail';
import News from '@/pages/News';
import Calendar from '@/pages/Calendar';
import StandingsPage from '@/pages/StandingsPage';
import Footer from '@/components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/equipos" element={<Teams />} />
            <Route path="/equipo/:id" element={<TeamDetail />} />
            <Route path="/noticias" element={<News />} />
            <Route path="/calendario" element={<Calendar />} />
            <Route path="/tabla-de-posiciones" element={<StandingsPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
