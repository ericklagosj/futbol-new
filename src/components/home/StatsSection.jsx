
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Trophy, Users, Star } from 'lucide-react';

const statsData = [
  { icon: Trophy, label: "Campeonatos", value: "25+" },
  { icon: Users, label: "Equipos", value: "48" },
  { icon: Star, label: "Jugadores", value: "1,200+" },
  { icon: Calendar, label: "Partidos/Año", value: "500+" }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-green-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-glow">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
