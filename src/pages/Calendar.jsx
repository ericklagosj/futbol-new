
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, MapPin, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedCompetition, setSelectedCompetition] = useState('all');

  const competitions = [
    { value: 'all', label: 'Todas las Competiciones' },
    { value: 'liga', label: 'Liga Regular' },
    { value: 'copa', label: 'Copa del Rey' },
    { value: 'champions', label: 'Champions League' },
    { value: 'europa', label: 'Europa League' }
  ];

  const matches = [
    {
      id: 1,
      homeTeam: "Real Madrid CF",
      awayTeam: "FC Barcelona",
      date: "2024-01-20",
      time: "21:00",
      stadium: "Santiago Bernabéu",
      competition: "liga",
      status: "upcoming",
      importance: "high"
    },
    {
      id: 2,
      homeTeam: "Atlético Madrid",
      awayTeam: "Valencia CF",
      date: "2024-01-21",
      time: "19:30",
      stadium: "Wanda Metropolitano",
      competition: "liga",
      status: "upcoming",
      importance: "medium"
    },
    {
      id: 3,
      homeTeam: "Sevilla FC",
      awayTeam: "Athletic Bilbao",
      date: "2024-01-22",
      time: "18:00",
      stadium: "Ramón Sánchez-Pizjuán",
      competition: "copa",
      status: "upcoming",
      importance: "high"
    },
    {
      id: 4,
      homeTeam: "Real Sociedad",
      awayTeam: "Real Betis",
      date: "2024-01-25",
      time: "20:00",
      stadium: "Reale Arena",
      competition: "liga",
      status: "upcoming",
      importance: "medium"
    },
    {
      id: 5,
      homeTeam: "Valencia CF",
      awayTeam: "Villarreal CF",
      date: "2024-01-28",
      time: "16:00",
      stadium: "Mestalla",
      competition: "liga",
      status: "upcoming",
      importance: "low"
    },
    {
      id: 6,
      homeTeam: "FC Barcelona",
      awayTeam: "Atlético Madrid",
      date: "2024-02-03",
      time: "21:00",
      stadium: "Camp Nou",
      competition: "champions",
      status: "upcoming",
      importance: "high"
    }
  ];

  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const filteredMatches = matches.filter(match => {
    const matchDate = new Date(match.date);
    const matchesMonth = matchDate.getMonth() === selectedMonth;
    const matchesYear = matchDate.getFullYear() === selectedYear;
    const matchesCompetition = selectedCompetition === 'all' || match.competition === selectedCompetition;
    return matchesMonth && matchesYear && matchesCompetition;
  });

  const getCompetitionColor = (competition) => {
    const colors = {
      liga: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      copa: 'bg-green-500/20 text-green-400 border-green-500/30',
      champions: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      europa: 'bg-orange-500/20 text-orange-400 border-orange-500/30'
    };
    return colors[competition] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const getImportanceColor = (importance) => {
    const colors = {
      high: 'border-l-red-500',
      medium: 'border-l-yellow-500',
      low: 'border-l-green-500'
    };
    return colors[importance] || 'border-l-gray-500';
  };

  const nextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  const prevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
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
              <span className="text-gradient">Calendario</span> de Partidos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No te pierdas ningún partido. Consulta fechas, horarios y estadios 
              de todos los encuentros de la temporada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Month Navigation */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevMonth}
                className="text-white hover:bg-white/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <div className="text-center min-w-[200px]">
                <h2 className="text-2xl font-bold text-white">
                  {months[selectedMonth]} {selectedYear}
                </h2>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextMonth}
                className="text-white hover:bg-white/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Competition Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedCompetition}
                onChange={(e) => setSelectedCompetition(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors duration-300"
              >
                {competitions.map(competition => (
                  <option key={competition.value} value={competition.value} className="bg-slate-800">
                    {competition.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Matches List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMatches.length > 0 ? (
            <div className="space-y-6">
              {filteredMatches.map((match, index) => (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group border-l-4 ${getImportanceColor(match.importance)}`}
                >
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
                    {/* Match Info */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCompetitionColor(match.competition)}`}>
                          {competitions.find(comp => comp.value === match.competition)?.label}
                        </span>
                        {match.importance === 'high' && (
                          <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-medium">
                            ⭐ Destacado
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-8">
                        <div className="text-center sm:text-left">
                          <div className="text-lg font-bold text-white">{match.homeTeam}</div>
                          <div className="text-sm text-gray-400">Local</div>
                        </div>
                        
                        <div className="text-2xl font-bold text-gradient">VS</div>
                        
                        <div className="text-center sm:text-left">
                          <div className="text-lg font-bold text-white">{match.awayTeam}</div>
                          <div className="text-sm text-gray-400">Visitante</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Date & Time */}
                    <div className="text-center space-y-2">
                      <div className="flex items-center space-x-2 text-blue-400">
                        <CalendarIcon className="w-4 h-4" />
                        <span className="font-bold">
                          {new Date(match.date).toLocaleDateString('es-ES', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long'
                          })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{match.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{match.stadium}</span>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <div className="flex flex-col space-y-2">
                      <Button 
                        className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white"
                      >
                        Ver Detalles
                      </Button>
                      <Button 
                        variant="outline"
                        size="sm"
                        className="border-white/30 text-white hover:bg-white/10"
                      >
                        Recordatorio
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-700 rounded-full flex items-center justify-center">
                <CalendarIcon className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No hay partidos programados
              </h3>
              <p className="text-gray-400">
                No se encontraron partidos para {months[selectedMonth]} {selectedYear}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Estadísticas del <span className="text-gradient">Mes</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gradient mb-2">
                {filteredMatches.length}
              </div>
              <div className="text-gray-400">Partidos este mes</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gradient mb-2">
                {filteredMatches.filter(m => m.importance === 'high').length}
              </div>
              <div className="text-gray-400">Partidos destacados</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gradient mb-2">
                {new Set(filteredMatches.map(m => m.stadium)).size}
              </div>
              <div className="text-gray-400">Estadios diferentes</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gradient mb-2">
                {new Set([...filteredMatches.map(m => m.homeTeam), ...filteredMatches.map(m => m.awayTeam)]).size}
              </div>
              <div className="text-gray-400">Equipos participantes</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-12 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-effect rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-4">Leyenda</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-300 mb-3">Importancia del Partido</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-gray-400">Alta - Clásicos y finales</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <span className="text-gray-400">Media - Partidos importantes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-gray-400">Baja - Partidos regulares</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-300 mb-3">Competiciones</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span className="text-gray-400">Liga Regular</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-gray-400">Copa del Rey</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-purple-500 rounded"></div>
                    <span className="text-gray-400">Champions League</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Calendar;
