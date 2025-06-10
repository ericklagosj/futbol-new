
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const upcomingMatchesData = [
  {
    id: 1,
    homeTeam: "Real Madrid CF",
    awayTeam: "FC Barcelona",
    date: "2024-01-20",
    time: "21:00",
    stadium: "Santiago Bernabéu"
  },
  {
    id: 2,
    homeTeam: "Atlético Madrid",
    awayTeam: "Valencia CF",
    date: "2024-01-21",
    time: "19:30",
    stadium: "Wanda Metropolitano"
  },
  {
    id: 3,
    homeTeam: "Sevilla FC",
    awayTeam: "Athletic Bilbao",
    date: "2024-01-22",
    time: "18:00",
    stadium: "Ramón Sánchez-Pizjuán"
  }
];

const UpcomingMatchesSection = () => {
  return (
    <section className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Próximos <span className="text-gradient">Partidos</span>
          </h2>
          <p className="text-xl text-gray-400">
            No te pierdas los encuentros más emocionantes
          </p>
        </motion.div>

        <div className="space-y-6">
          {upcomingMatchesData.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{match.homeTeam}</div>
                    <div className="text-sm text-gray-400">Local</div>
                  </div>
                  <div className="text-2xl font-bold text-gradient">VS</div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{match.awayTeam}</div>
                    <div className="text-sm text-gray-400">Visitante</div>
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <div className="text-lg font-bold text-blue-400">
                    {new Date(match.date).toLocaleDateString('es-ES')}
                  </div>
                  <div className="text-sm text-gray-400">{match.time}</div>
                  <div className="text-sm text-gray-500">{match.stadium}</div>
                </div>
                <Button
                  className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white"
                >
                  Ver Detalles
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/calendario">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white font-semibold px-8 py-3"
            >
              Ver Calendario Completo
              <Calendar className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingMatchesSection;
