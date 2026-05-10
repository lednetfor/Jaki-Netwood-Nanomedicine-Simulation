import React from 'react';
import { motion } from 'framer-motion';

const JakiDashboard = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen p-8 font-sans">
      {/* Header مع حركة الانبثاق */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b border-cyan-500/30 pb-4 mb-8"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Jaki-Netwood: AI Nano-Control
        </h1>
        <p className="text-slate-400">Monitoring Agent: MTB-01 | Status: Active</p>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* نافذة المحاكاة (Simulation View) */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-slate-800 rounded-xl p-6 border border-slate-700 relative overflow-hidden"
        >
          <div className="absolute top-2 right-2 flex gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-xs text-red-500 font-mono">LIVE SIM</span>
          </div>
          <h2 className="text-xl mb-4 text-cyan-300">Targeting System</h2>
          <div className="h-48 bg-slate-900 rounded-lg flex items-center justify-center border border-cyan-900/50">
             {/* هنا فين كيبان الروبوت كيتحرك */}
             <motion.div
               animate={{ 
                 x: [0, 50, -30, 0],
                 y: [0, -20, 10, 0],
                 rotate: [0, 10, -10, 0] 
               }}
               transition={{ duration: 5, repeat: Infinity }}
               className="w-12 h-12 bg-cyan-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)]"
             />
          </div>
        </motion.div>

        {/* معطيات حية (Live Stats) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <StatBar label="pH Level" value="6.8" color="bg-green-500" width="70%" />
          <StatBar label="Temperature" value="38.2°C" color="bg-orange-500" width="85%" />
          <StatBar label="Distance to Target" value="2.5mm" color="bg-blue-500" width="40%" />
        </motion.div>
      </div>
    </div>
  );
};

const StatBar = ({ label, value, color, width }) => (
  <div className="bg-slate-800 p-4 rounded-lg">
    <div className="flex justify-between mb-2">
      <span className="text-sm">{label}</span>
      <span className="text-sm font-mono text-cyan-400">{value}</span>
    </div>
    <div className="w-full bg-slate-700 h-2 rounded-full">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: width }}
        transition={{ duration: 1.5 }}
        className={`${color} h-full rounded-full`}
      />
    </div>
  </div>
);

export default JakiDashboard;
