
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ShieldCheck, ShieldX, ShieldAlert } from 'lucide-react';

const StandingsTable = ({ standingsData }) => {
  const getTeamLogo = (teamName) => {
    return (
      <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mr-3 neon-glow">
        <Trophy size={14} className="text-white" />
      </div>
    );
  };

  const renderLastFive = (form) => {
    if (!Array.isArray(form)) {
      return null; 
    }
    return form.map((result, index) => {
      let Icon;
      let colorClass;
      if (result === 'G') {
        Icon = ShieldCheck;
        colorClass = 'text-green-400';
      } else if (result === 'P') {
        Icon = ShieldX;
        colorClass = 'text-red-400';
      } else {
        Icon = ShieldAlert;
        colorClass = 'text-yellow-400';
      }
      return <Icon key={index} size={18} className={`mx-0.5 ${colorClass}`} />;
    });
  };

  if (!standingsData || standingsData.length === 0) {
    return (
      <div className="text-center py-10 text-gray-400">
        No hay datos de clasificación disponibles.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto scrollbar-hide">
      <motion.table
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-w-full glass-effect rounded-xl"
      >
        <thead className="border-b border-white/10">
          <tr>
            <th className="px-4 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">#</th>
            <th className="px-4 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Equipo</th>
            <th className="px-4 py-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">PJ</th>
            <th className="px-4 py-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">G</th>
            <th className="px-4 py-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">E</th>
            <th className="px-4 py-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">P</th>
            <th className="px-4 py-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">GF</th>
            <th className="px-4 py-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">GC</th>
            <th className="px-4 py-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">DG</th>
            <th className="px-4 py-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Pts</th>
            <th className="px-4 py-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Últ. 5</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {standingsData.map((team, index) => (
            <motion.tr
              key={team.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="hover:bg-white/5 transition-colors duration-200"
            >
              <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">{team.rank !== undefined ? team.rank : index + 1}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-white flex items-center">
                {getTeamLogo(team.name || team?.team?.name)}
                {team.name || team?.team?.name}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-300">{team.played}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-green-400">{team.won}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-yellow-400">{team.drawn}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-red-400">{team.lost}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-300">{team.goalsFor}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-300">{team.goalsAgainst}</td>
              <td className={`px-4 py-3 whitespace-nowrap text-sm text-center font-semibold ${team.goalDifference > 0 ? 'text-green-400' : team.goalDifference < 0 ? 'text-red-400' : 'text-gray-300'}`}>
                {team.goalDifference > 0 ? `+${team.goalDifference}` : team.goalDifference}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-center font-bold text-blue-400">{team.points}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm">
                <div className="flex justify-center items-center">
                  {renderLastFive(team.last5 || team.lastFive)}
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
};

export default StandingsTable;
