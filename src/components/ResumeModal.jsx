import React from 'react';
import { motion } from 'framer-motion';

const ResumeModal = ({ onClose }) => {

    const resumeUrl = '/resume.pdf';

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
                className="w-full max-w-4xl h-[90vh] bg-[#050816]/80 border border-[#00ffff]/50 rounded-lg shadow-lg shadow-[#00ffff]/20 m-4 relative flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-4 border-b border-[#00ffff]/30">
                    <h2 className="text-2xl font-bold text-[#00FFE5] font-heading">
                        My Resume
                    </h2>
                    <button onClick={onClose} className="text-gray-300 hover:text-white transition-colors text-3xl z-50" aria-label="Close panel">&times;</button>
                </div>

                <div className="flex-grow p-4">
                    <iframe
                        src={resumeUrl}
                        title="Resume"
                        className="w-full h-full border-0 rounded-b-lg"
                    />
                </div>
            </motion.div>
        </motion.div>
    );

};

export default ResumeModal;