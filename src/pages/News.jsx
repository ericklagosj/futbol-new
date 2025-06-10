
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, Filter, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'Todas las Noticias' },
    { value: 'competicion', label: 'Competición' },
    { value: 'fichajes', label: 'Fichajes' },
    { value: 'infraestructura', label: 'Infraestructura' },
    { value: 'juvenil', label: 'Fútbol Juvenil' }
  ];

  const news = [
    {
      id: 1,
      title: "Final de Copa: El Clásico que Paralizará al País",
      excerpt: "Real Madrid y FC Barcelona se enfrentarán en una final histórica que promete ser el evento deportivo del año. Ambos equipos llegan en su mejor momento de la temporada.",
      content: "La gran final de la Copa del Rey enfrentará a los dos gigantes del fútbol español en un duelo que ha capturado la atención de millones de aficionados...",
      date: "2024-01-15",
      author: "Carlos Martínez",
      category: "competicion",
      readTime: "5 min",
      featured: true
    },
    {
      id: 2,
      title: "Revolución en el Mercado: Fichajes que Cambiarán la Liga",
      excerpt: "Los equipos de primera división han invertido más de 500 millones de euros en nuevos talentos para la próxima temporada.",
      content: "El mercado de fichajes de invierno ha sido uno de los más activos de los últimos años...",
      date: "2024-01-12",
      author: "María González",
      category: "fichajes",
      readTime: "7 min",
      featured: false
    },
    {
      id: 3,
      title: "Renovación Tecnológica: Estadios del Futuro",
      excerpt: "La liga invierte en tecnología de vanguardia para mejorar la experiencia de los aficionados y la precisión arbitral.",
      content: "Los estadios de la liga están experimentando una transformación digital sin precedentes...",
      date: "2024-01-10",
      author: "Roberto Silva",
      category: "infraestructura",
      readTime: "4 min",
      featured: false
    },
    {
      id: 4,
      title: "Jóvenes Promesas: La Cantera que Brilla",
      excerpt: "Los equipos juveniles de la liga han producido algunos de los talentos más prometedores del fútbol europeo.",
      content: "La inversión en fútbol juvenil está dando sus frutos con una nueva generación de estrellas...",
      date: "2024-01-08",
      author: "Ana Rodríguez",
      category: "juvenil",
      readTime: "6 min",
      featured: false
    },
    {
      id: 5,
      title: "Récord de Asistencia: Los Aficionados Vuelven en Masa",
      excerpt: "La temporada actual registra las cifras de asistencia más altas de la última década.",
      content: "Los estadios de la liga han vuelto a llenarse con aficionados apasionados...",
      date: "2024-01-05",
      author: "Luis Fernández",
      category: "competicion",
      readTime: "3 min",
      featured: false
    },
    {
      id: 6,
      title: "Sostenibilidad en el Fútbol: Iniciativas Verdes",
      excerpt: "Los clubes implementan programas ambientales para reducir su huella de carbono.",
      content: "La liga lidera iniciativas de sostenibilidad en el deporte profesional...",
      date: "2024-01-03",
      author: "Carmen López",
      category: "infraestructura",
      readTime: "5 min",
      featured: false
    }
  ];

  const filteredNews = news.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = filteredNews.find(article => article.featured) || filteredNews[0];
  const regularArticles = filteredNews.filter(article => !article.featured);

  const getCategoryColor = (category) => {
    const colors = {
      competicion: 'bg-blue-500/20 text-blue-400',
      fichajes: 'bg-green-500/20 text-green-400',
      infraestructura: 'bg-purple-500/20 text-purple-400',
      juvenil: 'bg-yellow-500/20 text-yellow-400'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Últimas <span className="text-gradient">Noticias</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mantente al día con todas las novedades, fichajes, resultados y análisis 
              de la liga más emocionante del país.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar noticias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors duration-300"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value} className="bg-slate-800">
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative">
                  <img  
                    className="w-full h-80 lg:h-full object-cover"
                    alt="Imagen destacada de la noticia principal"
                   src="https://images.unsplash.com/photo-1602025285376-8e0d723b82f5" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium">
                      Destacado
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(featuredArticle.category)}`}>
                        {categories.find(cat => cat.value === featuredArticle.category)?.label}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredArticle.date).toLocaleDateString('es-ES')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {featuredArticle.title}
                    </h2>
                    
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <User className="w-4 h-4" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      
                      <Button className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white">
                        Leer Artículo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="news-card rounded-xl overflow-hidden group cursor-pointer"
              >
                <div className="relative">
                  <img  
                    className="w-full h-48 object-cover"
                    alt={`Imagen de la noticia: ${article.title}`}
                   src="https://images.unsplash.com/photo-1535992324120-0ece81621536" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {categories.find(cat => cat.value === article.category)?.label}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString('es-ES')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    
                    <div className="flex items-center text-blue-400 font-medium group-hover:text-green-400 transition-colors duration-300">
                      Leer más
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-700 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No se encontraron noticias
              </h3>
              <p className="text-gray-400">
                Intenta ajustar tus filtros de búsqueda
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              No te Pierdas <span className="text-gradient">Nada</span>
            </h2>
            <p className="text-xl text-gray-300">
              Suscríbete a nuestro newsletter y recibe las últimas noticias directamente en tu email
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
              />
              <Button className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white px-8 py-3">
                Suscribirse
              </Button>
            </div>
            
            <p className="text-sm text-gray-400">
              Enviamos máximo 2 emails por semana. Sin spam.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;
