import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, contactPoints } from '../data/portfolioData.jsx';

const ContactModal = ({ onClose }) => {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitStatus, setSubmitStatus] = useState(null);

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

                <div className="flex flex-col md:flex-row p-4 sm:p-8">
                    {/* Left Side Info */}
                    <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#00FFE5] mb-4 drop-shadow-[0 0 5px_#00ffff] font-heading">
                            Contact Me
                        </h2>
                        <p className="text-gray-300 mb-8 font-body">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                        <div className="space-y-4 text-gray-200 font-body">
                            <p><strong>Name:</strong> {personalInfo.name}</p>
                            <p><strong>Email:</strong> {personalInfo.email}</p>
                        </div>
                        <div className="flex space-x-6 mt-8">
                            <a href={contactPoints[0].link} target="_blank" rel="noopener noreferrer" className="text-[#00FFE5] hover:text-white transition-colors">{contactPoints[0].logo({ width: 32, height: 32 })}</a>
                            <a href={contactPoints[1].link} target="_blank" rel="noopener noreferrer" className="text-[#00FFE5] hover:text-white transition-colors">{contactPoints[1].logo({ width: 32, height: 32 })}</a>
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className="w-full md:w-1/2">
                        <form name="contact-modal" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
                            <input type="hidden" name="form-name" value="contact-modal" />
                            <div hidden>
                                <label>Don’t fill this out:{" "}<input name="bot-field" /></label>
                            </div>
                            <div>
                                <input type="text" name="name" placeholder="Name" value={formState.name} onChange={handleChange} className="w-full bg-transparent border-b-2 border-white/30 focus:border-[#00ffff] outline-none py-2 text-white transition-colors font-body" />
                            </div>
                            <div>
                                <input type="email" name="email" placeholder="Email" value={formState.email} onChange={handleChange} className="w-full bg-transparent border-b-2 border-white/30 focus:border-[#00ffff] outline-none py-2 text-white transition-colors font-body" />
                            </div>
                            <div>
                                <input type="text" name="subject" placeholder="Subject" value={formState.subject} onChange={handleChange} className="w-full bg-transparent border-b-2 border-white/30 focus:border-[#00ffff] outline-none py-2 text-white transition-colors font-body" />
                            </div>
                            <div>
                                <textarea name="message" placeholder="Message" rows="4" value={formState.message} onChange={handleChange} className="w-full bg-transparent border-b-2 border-white/30 focus:border-[#00ffff] outline-none py-2 text-white transition-colors resize-none font-body"></textarea>
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
            </motion.div>
        </motion.div>
    );
};

export default ContactModal;
