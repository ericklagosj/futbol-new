
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const SocialMediaSection = () => {
  return (
    <section className="py-20 social-feed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Síguenos en <span className="text-gradient">Redes Sociales</span>
          </h2>
          <p className="text-xl text-gray-400">
            Mantente conectado con toda la acción
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((post, index) => (
            <motion.div
              key={post}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-400 rounded-full flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Liga Elite</div>
                    <div className="text-sm text-gray-400">@ligaelite</div>
                  </div>
                </div>
                <p className="text-gray-300">
                  ¡Increíble partido el de anoche! Los aficionados disfrutaron de un espectáculo único. #LigaElite #Fútbol
                </p>
                <img 
                  className="w-full h-48 object-cover rounded-lg"
                  alt="Momento destacado de un partido de fútbol en redes sociales"
                 src="https://images.unsplash.com/photo-1602025285376-8e0d723b82f5" />
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <span>Hace {index + 2} horas</span>
                  <div className="flex space-x-4">
                    <span>❤️ {245 - index * 10}</span>
                    <span>💬 {18 - index * 2}</span>
                    <span>🔄 {32 - index * 5}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
