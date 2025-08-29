import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData.jsx';

const SkillsModal = ({ onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-4xl bg-[#050816]/80 border border-[#00ffff]/50 rounded-lg shadow-lg shadow-[#00ffff]/20 m-4 relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors text-3xl z-50" aria-label="Close panel">&times;</button>

                <div className="p-4 sm:p-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#00FFE5] mb-8 drop-shadow-[0 0 5px_#00ffff] font-heading">
                        My Tech Stack
                    </h2>

                    <div className="space-y-8">
                        {Object.entries(skills).map(([category, skillList]) => (
                            <div key={category}>
                                <h3 className="text-xl sm:text-2xl font-semibold text-white border-b-2 border-[#00ffff]/30 pb-2 mb-4 font-heading">{category}</h3>
                                <div className="flex flex-wrap gap-3 sm:gap-4">
                                    {skillList.map(skill => (
                                        <div key={skill} className="bg-black/50 border border-white/20 px-4 py-2 rounded-lg">
                                            <p className="font-medium text-gray-200 font-nav">{skill}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SkillsModal;

