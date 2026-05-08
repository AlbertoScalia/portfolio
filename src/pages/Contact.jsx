import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, PaperPlaneRight, ArrowUpRight } from '@phosphor-icons/react';
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
        <main className="pt-40 pb-20 px-6 lg:px-12 w-full mx-auto max-w-7xl min-h-screen">
            {/* Header - Left-aligned */}
            <header className="mb-24 text-left">
                <motion.h1
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-5xl md:text-7xl font-sans font-bold tracking-tighter mb-6"
                >
                    Let's talk about your <span className="text-accent">project</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                    className="text-zinc-500 text-xl font-sans max-w-2xl leading-relaxed"
                >
                    Let's talk, before the idea expires. I am always open to new collaborations. Fill out the form or write to me directly.
                </motion.p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                {/* Contact Info - Full-width dividers style */}
                <motion.section
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-4 flex flex-col gap-16"
                >
                    <div className="group flex flex-col gap-8 text-left">
                        <div className="w-full border-t border-blue group-hover:border-accent transition-colors duration-300" />
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 rounded-xl bg-blue/5 border border-blue/10 flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                                <Phone size={24} weight="duotone" className="text-blue group-hover:text-accent transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-sans tracking-tight mb-2 text-blue group-hover:text-accent transition-colors">Phone</h3>
                                <p className="text-zinc-500 text-sm font-sans">Number available upon request</p>
                            </div>
                        </div>
                    </div>

                    <div className="group flex flex-col gap-8 text-left">
                        <div className="w-full border-t border-blue group-hover:border-accent transition-colors duration-300" />
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 rounded-xl bg-blue/5 border border-blue/10 flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                                <MapPin size={24} weight="duotone" className="text-blue group-hover:text-accent transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-sans tracking-tight mb-2 text-blue group-hover:text-accent transition-colors">Location</h3>
                                <p className="text-zinc-500 text-sm font-sans">Acireale, CT, Italy</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Form Section - Minimalist style */}
                <motion.section
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-8 group flex flex-col gap-8"
                >
                    <div className="w-full border-t border-blue group-hover:border-accent transition-colors duration-300" />
                    
                    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex flex-col gap-3 text-left">
                                <label htmlFor="name" className="text-[10px] font-black font-sans text-zinc-400 uppercase tracking-widest">Name *</label>
                                <input
                                    type="text" id="name" name="name" required
                                    value={formData.name} onChange={handleChange}
                                    placeholder="How should I save you?"
                                    className="bg-transparent border-b border-blue/20 py-4 text-blue placeholder:text-zinc-300 focus:outline-none focus:border-accent transition-colors font-sans text-lg"
                                />
                            </div>
                            <div className="flex flex-col gap-3 text-left">
                                <label htmlFor="email" className="text-[10px] font-black font-sans text-zinc-400 uppercase tracking-widest">Email *</label>
                                <input
                                    type="email" id="email" name="email" required
                                    value={formData.email} onChange={handleChange}
                                    placeholder="Where can I write to you?"
                                    className="bg-transparent border-b border-blue/20 py-4 text-blue placeholder:text-zinc-300 focus:outline-none focus:border-accent transition-colors font-sans text-lg"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 text-left">
                            <label htmlFor="subject" className="text-[10px] font-black font-sans text-zinc-400 uppercase tracking-widest">Subject *</label>
                            <input
                                type="text" id="subject" name="subject" required
                                value={formData.subject} onChange={handleChange}
                                placeholder="What do you want to talk about?"
                                className="bg-transparent border-b border-blue/20 py-4 text-blue placeholder:text-zinc-300 focus:outline-none focus:border-accent transition-colors font-sans text-lg"
                            />
                        </div>

                        <div className="flex flex-col gap-3 text-left">
                            <label htmlFor="message" className="text-[10px] font-black font-sans text-zinc-400 uppercase tracking-widest">Message *</label>
                            <textarea
                                id="message" name="message" rows="4" required
                                value={formData.message} onChange={handleChange}
                                placeholder="Summarize your idea (if you can)."
                                className="bg-transparent border-b border-blue/20 py-4 text-blue placeholder:text-zinc-300 focus:outline-none focus:border-accent transition-colors font-sans text-lg resize-none"
                            ></textarea>
                        </div>

                        {/* Pulsante Form - Stilizzato come in Works (sbandierato a sinistra) */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
                            <div className="flex items-center gap-4 group/btn-container">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex items-center gap-4 px-10 py-5 bg-blue text-white rounded-full transition-all hover:bg-accent disabled:opacity-50 group/btn"
                                >
                                    <span className="font-sans font-bold tracking-tight uppercase text-sm">
                                        {isSubmitting ? 'Sending...' : "Start the conversation"}
                                    </span>
                                    {!isSubmitting ? (
                                        <ArrowUpRight size={20} weight="bold" className="group-hover/btn:rotate-45 transition-transform" />
                                    ) : (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    )}
                                </button>
                                
                                {submitStatus === 'success' && (
                                    <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-emerald-500 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
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