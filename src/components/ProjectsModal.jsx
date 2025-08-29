import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData.jsx';

const ProjectsModal = ({ onClose }) => {
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
                        Featured Projects
                    </h2>

                    <div className="space-y-8">
                        {projects.map(project => (
                            <div key={project.id} className="p-6 bg-black/50 rounded-lg border border-white/20 hover:border-[#00ffff]/80 transition-colors duration-300">
                                <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-4 font-body">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-4 mt-4">
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:underline inline-block bg-white/10 px-3 py-1 rounded font-nav">
                                        View on GitHub &rarr;
                                    </a>
                                    {project.liveLink && (
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#00FFE5] hover:underline inline-block bg-[#00FFE5]/10 px-3 py-1 rounded font-nav">
                                            View Live Site &rarr;
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectsModal;

