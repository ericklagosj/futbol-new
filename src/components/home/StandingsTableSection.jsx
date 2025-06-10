
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StandingsTable from '@/components/StandingsTable';
import { Button } from '@/components/ui/button';
import { BarChart3, ArrowRight } from 'lucide-react';

const sampleStandingsData = [
  { id: 1, name: "Real Madrid CF", played: 5, won: 4, drawn: 1, lost: 0, goalsFor: 12, goalsAgainst: 3, goalDifference: 9, points: 13, lastFive: ['G', 'G', 'E', 'G', 'G'] },
  { id: 2, name: "FC Barcelona", played: 5, won: 3, drawn: 1, lost: 1, goalsFor: 10, goalsAgainst: 5, goalDifference: 5, points: 10, lastFive: ['G', 'P', 'G', 'G', 'E'] },
  { id: 3, name: "Atlético Madrid", played: 5, won: 3, drawn: 0, lost: 2, goalsFor: 8, goalsAgainst: 6, goalDifference: 2, points: 9, lastFive: ['E', 'G', 'G', 'P', 'G'] },
  { id: 4, name: "Sevilla FC", played: 5, won: 2, drawn: 2, lost: 1, goalsFor: 7, goalsAgainst: 5, goalDifference: 2, points: 8, lastFive: ['G', 'E', 'G', 'E', 'P'] },
  { id: 5, name: "Real Sociedad", played: 5, won: 2, drawn: 1, lost: 2, goalsFor: 6, goalsAgainst: 7, goalDifference: -1, points: 7, lastFive: ['P', 'G', 'E', 'P', 'G'] },
];

const StandingsTableSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-800 via-blue-950 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <BarChart3 className="w-12 h-12 mx-auto text-blue-400 mb-4 neon-glow" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tabla de <span className="text-gradient">Posiciones</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Un vistazo rápido a cómo se perfilan los equipos en la competición.
          </p>
        </motion.div>

        <StandingsTable standingsData={sampleStandingsData} />

        <div className="text-center mt-12">
          <Link to="/tabla-de-posiciones">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white font-semibold px-8 py-3"
            >
              Ver Tabla Completa
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StandingsTableSection;
