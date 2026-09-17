import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, ArrowUpRight } from '@phosphor-icons/react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const serviceID = 'service_7lo9nij';
        const templateID = 'template_79tdtxs';
        const publicKey = 'UFPDLKi81rCshxD1I';
        const templateParams = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            current_time: new Date().toLocaleString('en-US')
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then(() => {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            })
            .catch((error) => {
                console.error('FAILED...', error);
                alert("Oops! Error while sending.");
            })
            .finally(() => {
                setIsSubmitting(false);
                setTimeout(() => setSubmitStatus(null), 5000);
            });
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <main className="pt-40 pb-20 px-6 lg:px-12 w-full mx-auto max-w-7xl min-h-screen text-white">
            <header className="mb-24 text-center max-w-7xl mx-auto flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-5xl md:text-7xl font-sans tracking-tighter mb-6 text-center text-white"
                >
                    Let's <br />
                    <span className="font-serif font-normal text-white">talk</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                    className="text-xl font-sans max-w-2xl leading-relaxed text-white/70 text-center"
                >
                    I am open to full-time roles and collaborations — especially where design and strategy overlap. Fill out the form or write to me directly.
                </motion.p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                <motion.section
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-4 flex flex-col gap-16"
                >
                    <div className="group flex flex-col gap-8 text-left">
                        <div className="w-full border-t border-white/20 group-hover:border-white transition-colors duration-300" />
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                                <Phone size={24} weight="duotone" className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif font-normal tracking-tight mb-2 text-white">Phone</h3>
                                <p className="text-sm font-sans text-white/70">Number available upon request</p>
                            </div>
                        </div>
                    </div>

                    <div className="group flex flex-col gap-8 text-left">
                        <div className="w-full border-t border-white/20 group-hover:border-white transition-colors duration-300" />
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                                <MapPin size={24} weight="duotone" className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif font-normal tracking-tight mb-2 text-white">Location</h3>
                                <p className="text-sm font-sans text-white/70">Acireale, CT, Italy</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-8 group flex flex-col gap-8"
                >
                    <div className="w-full border-t border-white/20 group-hover:border-white transition-colors duration-300" />
                    
                    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex flex-col gap-3 text-left">
                                <label htmlFor="name" className="text-[10px] font-black font-sans uppercase tracking-widest text-white/60">Name *</label>
                                <input
                                    type="text" id="name" name="name" required
                                    value={formData.name} onChange={handleChange}
                                    placeholder="How should I save you?"
                                    className="bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors font-sans text-lg"
                                />
                            </div>
                            <div className="flex flex-col gap-3 text-left">
                                <label htmlFor="email" className="text-[10px] font-black font-sans uppercase tracking-widest text-white/60">Email *</label>
                                <input
                                    type="email" id="email" name="email" required
                                    value={formData.email} onChange={handleChange}
                                    placeholder="Where can I write to you?"
                                    className="bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors font-sans text-lg"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 text-left">
                            <label htmlFor="subject" className="text-[10px] font-black font-sans uppercase tracking-widest text-white/60">Subject *</label>
                            <input
                                type="text" id="subject" name="subject" required
                                value={formData.subject} onChange={handleChange}
                                placeholder="What do you want to talk about?"
                                className="bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors font-sans text-lg"
                            />
                        </div>

                        <div className="flex flex-col gap-3 text-left">
                            <label htmlFor="message" className="text-[10px] font-black font-sans uppercase tracking-widest text-white/60">Message *</label>
                            <textarea
                                id="message" name="message" rows="4" required
                                value={formData.message} onChange={handleChange}
                                placeholder="Summarize your idea (if you can)."
                                className="bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors font-sans text-lg resize-none"
                            ></textarea>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-4">
                            <div className="flex items-center gap-4 group/btn-container">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex items-center gap-3 bg-transparent text-white hover:text-white/80 transition-colors disabled:opacity-50 group/btn border-none cursor-pointer"
                                >
                                    <span className="font-light tracking-wider uppercase text-sm md:text-base">
                                        {isSubmitting ? 'Sending...' : "Start the conversation"}
                                    </span>
                                    {!isSubmitting ? (
                                        <ArrowUpRight size={20} weight="bold" className="group-hover/btn:rotate-45 transition-transform text-white" />
                                    ) : (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    )}
                                </button>
                                
                                {submitStatus === 'success' && (
                                    <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-emerald-400 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        Success
                                    </motion.p>
                                )}
                            </div>
                        </div>
                    </form>
                </motion.section>
            </div>
        </main>
    );
}