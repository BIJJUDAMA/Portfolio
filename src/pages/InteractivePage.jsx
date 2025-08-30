import React, { useState } from 'react';
import Scene from '../components/Scene';
import AboutModal from '../components/AboutModal';
import SkillsModal from '../components/SkillsModal';
import ProjectsModal from '../components/ProjectsModal';
import ContactModal from '../components/ContactModal';
import ResumeModal from '../components/ResumeModal';

// Receive onSwitchMode prop to allow toggling back to 2D
function HomePage({ onSwitchMode }) {
    const [activeModal, setActiveModal] = useState(null);

    const handleSectionSelect = (sectionId) => {
        setActiveModal(sectionId);
    };

    const handleCloseModal = () => {
        setActiveModal(null);
    };

    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                fontFamily: 'var(--font-body)',
                color: '#e5e7eb',
                overflow: 'hidden',
                backgroundColor: '#050816'
            }}
        >
            {/* 3D Scene */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    transition: 'all 500ms ease-in-out',
                    filter: activeModal ? 'blur(8px)' : 'none',
                    transform: activeModal ? 'scale(1.1)' : 'scale(1)',
                }}
            >
                <Scene onSectionSelect={handleSectionSelect} isPanelVisible={!!activeModal} />
            </div>

            {/* Button to switch back to 2D mode */}
            <button
                onClick={onSwitchMode}
                className="fixed bottom-4 right-4 z-50 font-nav font-bold text-sm bg-[#00FFE5]/80 text-black py-2 px-4 rounded-lg hover:bg-white transition-colors duration-300 shadow-lg shadow-[#00ffff]/30 backdrop-blur-sm"
            >
                Switch to 2D Mode
            </button>

            {/* Render modals conditionally */}
            {activeModal === 'about' && <AboutModal onClose={handleCloseModal} />}
            {activeModal === 'skills' && <SkillsModal onClose={handleCloseModal} />}
            {activeModal === 'projects' && <ProjectsModal onClose={handleCloseModal} />}
            {activeModal === 'contact' && <ContactModal onClose={handleCloseModal} />}
            {activeModal === 'resume' && <ResumeModal onClose={handleCloseModal} />}
        </div>
    );
}

export default HomePage;

