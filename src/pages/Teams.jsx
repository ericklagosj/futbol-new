
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Filter, Trophy, Users, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Teams = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const teams = [
    {
      id: 1,
      name: "Real Madrid CF",
      category: "Primera División",
      city: "Madrid",
      founded: 1902,
      stadium: "Santiago Bernabéu",
      capacity: 81044,
      titles: 35,
      colors: ["#FFFFFF", "#000080"],
      description: "El club más laureado de España y Europa"
    },
    {
      id: 2,
      name: "FC Barcelona",
      category: "Primera División",
      city: "Barcelona",
      founded: 1899,
      stadium: "Camp Nou",
      capacity: 99354,
      titles: 26,
      colors: ["#A50044", "#004D98"],
      description: "Más que un club, una filosofía de juego"
    },
    {
      id: 3,
      name: "Atlético Madrid",
      category: "Primera División",
      city: "Madrid",
      founded: 1903,
      stadium: "Wanda Metropolitano",
      capacity: 68456,
      titles: 11,
      colors: ["#CE1126", "#FFFFFF"],
      description: "Pasión, coraje y determinación"
    },
    {
      id: 4,
      name: "Valencia CF",
      category: "Primera División",
      city: "Valencia",
      founded: 1919,
      stadium: "Mestalla",
      capacity: 49430,
      titles: 6,
      colors: ["#FF8C00", "#000000"],
      description: "Los murciélagos del fútbol español"
    },
    {
      id: 5,
      name: "Sevilla FC",
      category: "Primera División",
      city: "Sevilla",
      founded: 1890,
      stadium: "Ramón Sánchez-Pizjuán",
      capacity: 43883,
      titles: 1,
      colors: ["#FFFFFF", "#D2001C"],
      description: "Nunca te rindas"
    },
    {
      id: 6,
      name: "Athletic Bilbao",
      category: "Primera División",
      city: "Bilbao",
      founded: 1898,
      stadium: "San Mamés",
      capacity: 53289,
      titles: 8,
      colors: ["#EE2523", "#FFFFFF"],
      description: "Tradición y cantera vasca"
    },
    {
      id: 7,
      name: "Real Sociedad",
      category: "Primera División",
      city: "San Sebastián",
      founded: 1909,
      stadium: "Reale Arena",
      capacity: 39500,
      titles: 2,
      colors: ["#004C99", "#FFFFFF"],
      description: "La Real de Gipuzkoa"
    },
    {
      id: 8,
      name: "Real Betis",
      category: "Primera División",
      city: "Sevilla",
      founded: 1907,
      stadium: "Benito Villamarín",
      capacity: 60721,
      titles: 1,
      colors: ["#00A650", "#FFFFFF"],
      description: "¡Viva el Betis manque pierda!"
    }
  ];

  const categories = [
    { value: 'all', label: 'Todos los Equipos' },
    { value: 'Primera División', label: 'Primera División' },
    { value: 'Segunda División', label: 'Segunda División' },
    { value: 'Juvenil', label: 'Juvenil' }
  ];

  const filteredTeams = teams.filter(team => {
    const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         team.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || team.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Nuestros <span className="text-gradient">Equipos</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre todos los equipos que forman parte de nuestra prestigiosa liga. 
              Cada uno con su historia, tradición y pasión por el fútbol.
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
                placeholder="Buscar equipos..."
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

      {/* Teams Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTeams.map((team, index) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="team-card-hover"
              >
                <Link to={`/equipo/${team.id}`}>
                  <div className="glass-effect rounded-xl p-6 h-full">
                    {/* Team Colors */}
                    <div className="flex space-x-2 mb-4">
                      {team.colors.map((color, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full border-2 border-white/20"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>

                    {/* Team Logo Placeholder */}
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-green-400 rounded-full flex items-center justify-center neon-glow">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>

                    {/* Team Info */}
                    <div className="text-center space-y-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {team.name}
                      </h3>
                      
                      <div className="space-y-2 text-sm text-gray-400">
                        <div className="flex items-center justify-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{team.city}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>{team.stadium}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Star className="w-4 h-4" />
                          <span>{team.titles} títulos</span>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed">
                        {team.description}
                      </p>

                      <div className="pt-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                          {team.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredTeams.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-700 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No se encontraron equipos
              </h3>
              <p className="text-gray-400">
                Intenta ajustar tus filtros de búsqueda
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Estadísticas de la <span className="text-gradient">Liga</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gradient mb-2">48</div>
              <div className="text-gray-400">Equipos Totales</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gradient mb-2">1,200+</div>
              <div className="text-gray-400">Jugadores</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gradient mb-2">25</div>
              <div className="text-gray-400">Ciudades</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gradient mb-2">125</div>
              <div className="text-gray-400">Años de Historia</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
