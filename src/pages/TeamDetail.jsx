
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Users, Trophy, Star, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TeamDetail = () => {
  const { id } = useParams();

  // Mock data - en una app real vendría de una API
  const team = {
    id: 1,
    name: "Real Madrid CF",
    fullName: "Club de Fútbol Real Madrid",
    category: "Primera División",
    city: "Madrid",
    founded: 1902,
    stadium: "Santiago Bernabéu",
    capacity: 81044,
    titles: 35,
    colors: ["#FFFFFF", "#000080"],
    description: "El Real Madrid Club de Fútbol es una entidad polideportiva con sede en Madrid, España. Conocido mundialmente por su sección de fútbol profesional, que milita en la Primera División de España.",
    history: "Fundado el 6 de marzo de 1902 por un grupo de aficionados madrileños liderados por Juan Padrós, el club ha crecido hasta convertirse en uno de los más exitosos del mundo.",
    achievements: [
      "35 Ligas españolas",
      "14 Copas de Europa/Champions League",
      "19 Copas del Rey",
      "12 Supercopas de España",
      "5 Copas del Mundo de Clubes"
    ],
    currentSeason: {
      position: 1,
      points: 78,
      wins: 24,
      draws: 6,
      losses: 2,
      goalsFor: 89,
      goalsAgainst: 31
    }
  };

  const players = [
    { id: 1, name: "Karim Benzema", position: "Delantero", number: 9, age: 35, nationality: "Francia" },
    { id: 2, name: "Luka Modrić", position: "Centrocampista", number: 10, age: 38, nationality: "Croacia" },
    { id: 3, name: "Vinícius Jr.", position: "Extremo", number: 7, age: 23, nationality: "Brasil" },
    { id: 4, name: "Thibaut Courtois", position: "Portero", number: 1, age: 31, nationality: "Bélgica" },
    { id: 5, name: "Sergio Ramos", position: "Defensa", number: 4, age: 37, nationality: "España" },
    { id: 6, name: "Casemiro", position: "Centrocampista", number: 14, age: 31, nationality: "Brasil" }
  ];

  const recentMatches = [
    { opponent: "FC Barcelona", result: "2-1", date: "2024-01-15", home: true, competition: "Liga" },
    { opponent: "Atlético Madrid", result: "3-0", date: "2024-01-10", home: false, competition: "Liga" },
    { opponent: "Valencia CF", result: "1-1", date: "2024-01-05", home: true, competition: "Liga" },
    { opponent: "Sevilla FC", result: "4-2", date: "2024-01-01", home: false, competition: "Copa del Rey" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img  
            className="w-full h-full object-cover"
            alt="Estadio Santiago Bernabéu lleno de aficionados"
           src="https://images.unsplash.com/photo-1522778034537-20a2486be803" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Link to="/equipos">
              <Button variant="ghost" className="text-white hover:bg-white/10 mb-6">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Volver a Equipos
              </Button>
            </Link>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              {/* Team Logo */}
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-green-400 rounded-full flex items-center justify-center neon-glow floating-animation">
                <Trophy className="w-16 h-16 text-white" />
              </div>

              {/* Team Info */}
              <div className="flex-1 space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white">
                  <span className="text-gradient">{team.name}</span>
                </h1>
                <p className="text-xl text-gray-300">{team.fullName}</p>
                
                <div className="flex flex-wrap gap-4 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>{team.city}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span>Fundado en {team.founded}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span>{team.stadium} ({team.capacity.toLocaleString()} asientos)</span>
                  </div>
                </div>

                {/* Team Colors */}
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400">Colores:</span>
                  <div className="flex space-x-2">
                    {team.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white/20"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Current Season Stats */}
              <div className="glass-effect rounded-xl p-6 min-w-[300px]">
                <h3 className="text-xl font-bold text-white mb-4">Temporada Actual</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gradient">{team.currentSeason.position}°</div>
                    <div className="text-sm text-gray-400">Posición</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient">{team.currentSeason.points}</div>
                    <div className="text-sm text-gray-400">Puntos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">{team.currentSeason.wins}</div>
                    <div className="text-sm text-gray-400">Victorias</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-400">{team.currentSeason.losses}</div>
                    <div className="text-sm text-gray-400">Derrotas</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">Sobre el Club</h2>
              <div className="glass-effect rounded-xl p-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  {team.description}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {team.history}
                </p>
              </div>
            </motion.section>

            {/* Achievements */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white flex items-center">
                <Trophy className="w-8 h-8 mr-3 text-yellow-400" />
                Logros Principales
              </h2>
              <div className="glass-effect rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {team.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg"
                    >
                      <Award className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-300">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Players */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white flex items-center">
                <Users className="w-8 h-8 mr-3 text-blue-400" />
                Plantilla Destacada
              </h2>
              <div className="glass-effect rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {players.map((player, index) => (
                    <motion.div
                      key={player.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-400 rounded-full flex items-center justify-center font-bold text-white">
                        {player.number}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-white">{player.name}</div>
                        <div className="text-sm text-gray-400">{player.position}</div>
                        <div className="text-xs text-gray-500">{player.nationality}, {player.age} años</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Matches */}
            <motion.section
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">Últimos Partidos</h3>
              <div className="space-y-4">
                {recentMatches.map((match, index) => (
                  <div
                    key={index}
                    className="glass-effect rounded-lg p-4 hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">{match.competition}</span>
                      <span className="text-sm text-gray-400">
                        {new Date(match.date).toLocaleDateString('es-ES')}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-white">
                        {match.home ? 'vs' : '@'} {match.opponent}
                      </div>
                      <div className={`font-bold ${
                        match.result.split('-')[0] > match.result.split('-')[1] 
                          ? 'text-green-400' 
                          : match.result.split('-')[0] === match.result.split('-')[1]
                          ? 'text-yellow-400'
                          : 'text-red-400'
                      }`}>
                        {match.result}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Stadium Info */}
            <motion.section
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">Estadio</h3>
              <div className="glass-effect rounded-xl p-6">
                <img  
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  alt="Vista del estadio Santiago Bernabéu"
                 src="https://images.unsplash.com/photo-1550492370-e08ce9ed5021" />
                <h4 className="text-xl font-bold text-white mb-2">{team.stadium}</h4>
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Capacidad: {team.capacity.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{team.city}, España</span>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Quick Stats */}
            <motion.section
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">Estadísticas</h3>
              <div className="glass-effect rounded-xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Goles a favor</span>
                  <span className="text-green-400 font-bold">{team.currentSeason.goalsFor}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Goles en contra</span>
                  <span className="text-red-400 font-bold">{team.currentSeason.goalsAgainst}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Diferencia de goles</span>
                  <span className="text-blue-400 font-bold">
                    +{team.currentSeason.goalsFor - team.currentSeason.goalsAgainst}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Empates</span>
                  <span className="text-yellow-400 font-bold">{team.currentSeason.draws}</span>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
