import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, whatIDo } from '../data/portfolioData.jsx';

const AboutModal = ({ onClose }) => {
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
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#00FFE5] mb-4 drop-shadow-[0 0 5px_#00ffff] font-heading">
                        Hello there! I'm {personalInfo.name}
                    </h2>
                    <p className="text-lg text-gray-300 mb-4 font-body">{personalInfo.introduction}</p>
                    <p className="text-lg text-gray-300 mb-8 font-body">{personalInfo.passion}</p>

                    <div className="border-t border-[#00ffff]/30 pt-6">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-heading">{whatIDo.title}</h3>
                        <p className="text-md text-gray-400 mb-6 font-body">{whatIDo.description}</p>
                        <div className="space-y-4 font-body">
                            <p><strong className="font-semibold text-white">Frontend:</strong> {whatIDo.frontend}</p>
                            <p><strong className="font-semibold text-white">Backend:</strong> {whatIDo.backend}</p>
                            <p><strong className="font-semibold text-white">Integration:</strong> {whatIDo.integration}</p>
                        </div>
                    </div>
                </div>

            </motion.div>
        </motion.div>
    );
};

export default AboutModal;

