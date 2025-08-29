import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, whatIDo, skills, projects, contactPoints } from '../data/portfolioData.jsx';
import Starfield from '../components/Starfield.jsx';


const SectionTitle = ({ children }) => (
    <h2 className="text-4xl sm:text-5xl mb-8 text-[#00FFE5] font-heading drop-shadow-[0_0_5px_#00ffff] border-b-2 border-[#00ffff]/30 pb-2">
        {children}
    </h2>
);

// Main Static Page Component
const StaticPage = ({ onSwitchMode }) => {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus(null);

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("/", {
                method: "POST",
                body: data,
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormState({ name: '', email: '', subject: '', message: '' });
            } else {
                setSubmitStatus('error');
                console.error("Form submission failed with status:", response.status);
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus('error');
        }
    };

    return (
        <div className="relative min-h-screen text-gray-200 font-body p-4 sm:p-8 overflow-x-hidden">
            {/* Starfield Background */}
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <Starfield />
            </div>

            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <header className="text-center py-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl sm:text-8xl font-bold mb-4 font-heading text-white"
                    >
                        {personalInfo.name}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl sm:text-2xl max-w-3xl mx-auto text-gray-300"
                    >
                        {personalInfo.introduction}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-12"
                    >
                        <button
                            onClick={onSwitchMode}
                            className="font-nav font-bold text-xl bg-[#00FFE5] text-black py-3 px-8 rounded-lg hover:bg-white transition-colors duration-300 shadow-lg shadow-[#00ffff]/30"
                        >
                            Switch to 3D Mode
                        </button>
                    </motion.div>
                </header>

                <main className="space-y-24">
                    {/* About Section */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="p-6"
                    >
                        <SectionTitle>{whatIDo.title}</SectionTitle>
                        <p className="text-lg text-gray-400 mb-6">{whatIDo.description}</p>
                        <div className="space-y-4 p-6 bg-black/30 border border-white/20 rounded-lg">
                            <p><strong className="font-semibold text-white font-nav">Frontend:</strong> {whatIDo.frontend}</p>
                            <p><strong className="font-semibold text-white font-nav">Backend:</strong> {whatIDo.backend}</p>
                            <p><strong className="font-semibold text-white font-nav">Integration:</strong> {whatIDo.integration}</p>
                        </div>
                    </motion.section>

                    {/* Skills Section */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="p-6"
                    >
                        <SectionTitle>My Tech Stack</SectionTitle>
                        <div className="space-y-8">
                            {Object.entries(skills).map(([category, skillList]) => (
                                <div key={category}>
                                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 font-heading">{category}</h3>
                                    <div className="flex flex-wrap gap-3 sm:gap-4 justify-start">
                                        {skillList.map(skill => (
                                            <div key={skill} className="bg-black/50 border border-white/20 px-4 py-2 rounded-lg">
                                                <p className="font-medium text-gray-200 font-nav">{skill}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Projects Section */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="p-6"
                    >
                        <SectionTitle>Featured Projects</SectionTitle>
                        <div className="space-y-8">
                            {projects.map(project => (
                                <div key={project.id} className="p-6 bg-black/50 rounded-lg border border-white/20 hover:border-[#00ffff]/80 transition-colors duration-300">
                                    <h3 className="text-3xl font-bold text-white mb-2 font-heading">{project.title}</h3>
                                    <p className="text-lg text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-md font-semibold text-white hover:underline inline-block bg-white/10 px-3 py-1 rounded font-nav">View on GitHub &rarr;</a>
                                        {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-md font-semibold text-[#00FFE5] hover:underline inline-block bg-[#00FFE5]/10 px-3 py-1 rounded font-nav">View Live Site &rarr;</a>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Contact Section */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="p-6"
                    >
                        <div className="text-center">
                            <SectionTitle>Get In Touch</SectionTitle>
                        </div>
                        <div className="flex flex-col md:flex-row p-6 bg-black/30 border border-white/20 rounded-lg">
                            {/* Left Side Info */}
                            <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
                                <p className="text-lg text-gray-300 mb-8">
                                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                                </p>
                                <div className="space-y-4 text-gray-200 font-nav">
                                    <p className="text-lg"><strong>Name:</strong> {personalInfo.name}</p>
                                    <p className="text-lg"><strong>Email:</strong> {personalInfo.email}</p>
                                </div>
                                <div className="flex space-x-6 mt-8">
                                    <a href={contactPoints[0].link} target="_blank" rel="noopener noreferrer" className="text-[#00FFE5] hover:text-white transition-colors">{contactPoints[0].logo({ width: 32, height: 32 })}</a>
                                    <a href={contactPoints[1].link} target="_blank" rel="noopener noreferrer" className="text-[#00FFE5] hover:text-white transition-colors">{contactPoints[1].logo({ width: 32, height: 32 })}</a>
                                </div>
                            </div>

                            {/* Right Side Form */}
                            <div className="w-full md:w-1/2">
                                <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
                                    <input type="hidden" name="form-name" value="contact" />
                                    <div hidden>
                                        <label>Don’t fill this out:{" "}<input name="bot-field" /></label>
                                    </div>
                                    <div>
                                        <input type="text" name="name" placeholder="Name" value={formState.name} onChange={handleChange} className="w-full bg-transparent border-b-2 border-white/30 focus:border-[#00ffff] outline-none py-2 text-lg text-white transition-colors font-nav" />
                                    </div>
                                    <div>
                                        <input type="email" name="email" placeholder="Email" value={formState.email} onChange={handleChange} className="w-full bg-transparent border-b-2 border-white/30 focus:border-[#00ffff] outline-none py-2 text-lg text-white transition-colors font-nav" />
                                    </div>
                                    <div>
                                        <input type="text" name="subject" placeholder="Subject" value={formState.subject} onChange={handleChange} className="w-full bg-transparent border-b-2 border-white/30 focus:border-[#00ffff] outline-none py-2 text-lg text-white transition-colors font-nav" />
                                    </div>
                                    <div>
                                        <textarea name="message" placeholder="Message" rows="4" value={formState.message} onChange={handleChange} className="w-full bg-transparent border-b-2 border-white/30 focus:border-[#00ffff] outline-none py-2 text-lg text-white transition-colors resize-none font-nav"></textarea>
                                    </div>
                                    {submitStatus === 'success' && (
                                        <p className="text-green-400 font-nav">Message sent successfully!</p>
                                    )}
                                    {submitStatus === 'error' && (
                                        <p className="text-red-400 font-nav">Error sending message. Please try again.</p>
                                    )}
                                    <div>
                                        <button type="submit" className="w-full inline-block text-center bg-[#00FFE5] text-black font-bold py-3 px-6 rounded-lg hover:bg-white transition-colors duration-300 font-nav">
                                            SUBMIT
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.section>
                </main>

                {/* Footer */}
                <footer className="text-center py-16 mt-16 border-t border-[#00ffff]/30">
                    <div className="flex justify-center space-x-6">
                        <a href={contactPoints[0].link} target="_blank" rel="noopener noreferrer" className="text-[#00FFE5] hover:text-white transition-colors">{contactPoints[0].logo({ width: 24, height: 24 })}</a>
                        <a href={contactPoints[1].link} target="_blank" rel="noopener noreferrer" className="text-[#00FFE5] hover:text-white transition-colors">{contactPoints[1].logo({ width: 24, height: 24 })}</a>
                    </div>
                    <p className="text-gray-500 mt-4 text-md">
                        &copy; {new Date().getFullYear()} {personalInfo.name}.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default StaticPage;
