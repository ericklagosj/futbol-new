
import React from 'react';
import { motion } from 'framer-motion';
import StandingsTable from '@/components/StandingsTable';
import { BarChart3, Trophy, ShieldCheck, ShieldAlert, ShieldX } from 'lucide-react';

const StandingsPage = () => {
  const standingsData = [
    {
      id: 1,
      rank: 1,
      name: 'Real Madrid CF', 
      logo: 'https://via.placeholder.com/30/FFFFFF/000000?text=RM',
      played: 30,
      won: 25,
      drawn: 3,
      lost: 2,
      goalsFor: 70,
      goalsAgainst: 20,
      goalDifference: 50,
      points: 78,
      lastFive: ['G', 'G', 'E', 'G', 'G'],
    },
    {
      id: 2,
      rank: 2,
      name: 'FC Barcelona', 
      logo: 'https://via.placeholder.com/30/A50044/FFFFFF?text=FCB',
      played: 30,
      won: 22,
      drawn: 5,
      lost: 3,
      goalsFor: 65,
      goalsAgainst: 25,
      goalDifference: 40,
      points: 71,
      lastFive: ['G', 'P', 'G', 'G', 'E'],
    },
    {
      id: 3,
      rank: 3,
      name: 'Atlético Madrid', 
      logo: 'https://via.placeholder.com/30/CE1126/FFFFFF?text=ATM',
      played: 30,
      won: 20,
      drawn: 6,
      lost: 4,
      goalsFor: 55,
      goalsAgainst: 22,
      goalDifference: 33,
      points: 66,
      lastFive: ['E', 'G', 'G', 'P', 'G'],
    },
    {
      id: 4,
      rank: 4,
      name: 'Sevilla FC', 
      logo: 'https://via.placeholder.com/30/D2001C/FFFFFF?text=SEV',
      played: 30,
      won: 18,
      drawn: 8,
      lost: 4,
      goalsFor: 50,
      goalsAgainst: 30,
      goalDifference: 20,
      points: 62,
      lastFive: ['G', 'E', 'P', 'G', 'G'],
    },
    {
      id: 5,
      rank: 5,
      name: 'Real Betis', 
      logo: 'https://via.placeholder.com/30/00A650/FFFFFF?text=BET',
      played: 30,
      won: 17,
      drawn: 7,
      lost: 6,
      goalsFor: 48,
      goalsAgainst: 35,
      goalDifference: 13,
      points: 58,
      lastFive: ['P', 'G', 'E', 'G', 'P'],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <BarChart3 className="w-20 h-20 mx-auto text-blue-400 neon-glow" />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Tabla de <span className="text-gradient">Posiciones</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Sigue la clasificación de la liga en tiempo real. Consulta puntos, goles y la racha de cada equipo.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StandingsTable standingsData={standingsData} />
        </div>
      </section>

      <section className="py-12 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-effect rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Leyenda de Últimos 5 Partidos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center space-y-2">
                <ShieldCheck className="w-10 h-10 text-green-400" />
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">G (Ganado)</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <ShieldAlert className="w-10 h-10 text-yellow-400" />
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">E (Empatado)</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <ShieldX className="w-10 h-10 text-red-400" />
                <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">P (Perdido)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Trophy className="w-16 h-16 mx-auto text-yellow-400 neon-glow" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              La Lucha por el <span className="text-gradient">Campeonato</span>
            </h2>
            <p className="text-xl text-gray-300">
              Cada punto cuenta en la carrera por el título. La emoción está garantizada hasta la última jornada.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StandingsPage;
