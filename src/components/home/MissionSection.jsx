
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Nuestra <span className="text-gradient">Misión</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Promover la excelencia deportiva y los valores del fútbol, creando una plataforma donde el talento se encuentra con la pasión y donde cada partido es una oportunidad de crear historia.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Nos comprometemos a fomentar el desarrollo del fútbol a todos los niveles, desde las categorías juveniles hasta el fútbol profesional, manteniendo siempre los más altos estándares de fair play y deportividad.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white font-semibold px-8 py-3"
            >
              Conoce Más
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-effect rounded-2xl p-8 floating-animation">
              <img 
                className="w-full h-80 object-cover rounded-xl"
                alt="Jugadores de fútbol celebrando una victoria en equipo"
               src="https://images.unsplash.com/photo-1566824655163-0d9507cd1edd" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
