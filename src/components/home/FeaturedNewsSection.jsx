
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const featuredNewsData = [
  {
    id: 1,
    title: "Final de Copa: Un Espectáculo Inolvidable",
    excerpt: "La gran final promete ser el evento deportivo del año con dos equipos de élite...",
    date: "2024-01-15",
    category: "Competición"
  },
  {
    id: 2,
    title: "Nuevos Talentos se Incorporan a la Liga",
    excerpt: "Jóvenes promesas del fútbol nacional se unen a nuestros equipos...",
    date: "2024-01-12",
    category: "Fichajes"
  },
  {
    id: 3,
    title: "Renovación del Estadio Principal",
    excerpt: "Mejoras tecnológicas y de infraestructura para una mejor experiencia...",
    date: "2024-01-10",
    category: "Infraestructura"
  }
];

const FeaturedNewsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Últimas <span className="text-gradient">Noticias</span>
          </h2>
          <p className="text-xl text-gray-400">
            Mantente al día con todo lo que acontece en nuestra liga
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredNewsData.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="news-card rounded-xl p-6 group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                    {news.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {new Date(news.date).toLocaleDateString('es-ES')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {news.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {news.excerpt}
                </p>
                <div className="flex items-center text-blue-400 font-medium group-hover:text-green-400 transition-colors duration-300">
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/noticias">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3"
            >
              Ver Todas las Noticias
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNewsSection;
