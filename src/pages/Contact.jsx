import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        const formData = new FormData(e.target);

        formData.append("access_key", "32335743-4ac7-4a41-af41-ff07ea6cc156");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            }).then((res) => res.json());

            if (res.success) {
                setIsSubmitted(true);
                e.target.reset();
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                console.error("Error submitting form:", res);
                setErrorMessage(res.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setErrorMessage("Network error. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <PageHeader
                tagline="Get in Touch"
                title="Contact Us"
                subtitle="Reach out to us for any inquiries or partnerships. We are here to assist you."
                image="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop"
            />

            <section className="pt-16 pb-24 md:pt-24 md:pb-32 bg-white relative overflow-hidden">
                {/* Background Decorative elements */}
                <Motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 100, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 -right-20 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[150px] pointer-events-none"
                />
                <Motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -80, 0],
                        y: [0, 100, 0]
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-40 -left-20 w-[900px] h-[900px] bg-blue-500/5 rounded-full blur-[180px] pointer-events-none"
                />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-stretch">

                        {/* Left Side: Information Narrative */}
                        <div className="lg:w-2/5 flex flex-col justify-center">
                            <Motion.div
                                variants={staggerContainer}
                                initial="initial"
                                whileInView="whileInView"
                                viewport={{ once: true, amount: 0.1 }}
                                className="space-y-12"
                            >
                                <Motion.div variants={fadeInUp}>
                                    <span className="inline-block px-4 py-1.5 bg-slate-900 text-white font-black tracking-[0.3em] uppercase text-[10px] rounded-full mb-8">
                                        Reach Out
                                    </span>
                                    <h2 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.85]">
                                        LET'S<br />
                                        <span className="text-brand-red italic underline decoration-slate-200 underline-offset-8">CONNECT.</span>
                                    </h2>
                                    <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium">
                                        Have a question about our global exports or specialized processing? We're ready to dive in.
                                    </p>
                                </Motion.div>

                                <div className="space-y-6">
                                    {[
                                        {
                                            icon: <Phone size={28} />,
                                            label: "Phone",
                                            value: "+91 477 2267333",
                                            link: "tel:+914772267333",
                                            color: "bg-brand-red"
                                        },
                                        {
                                            icon: <Mail size={28} />,
                                            label: "Email",
                                            value: "info@relishfoods.in",
                                            link: "mailto:info@relishfoods.in",
                                            color: "bg-slate-900"
                                        },
                                        {
                                            icon: <MapPin size={28} />,
                                            label: "Location",
                                            value: "Alappuzha, Kerala, India",
                                            link: "https://maps.app.goo.gl/cLFw2LJSKujLv12P9",
                                            color: "bg-blue-600"
                                        }
                                    ].map((item, i) => (
                                        <Motion.a
                                            key={i}
                                            variants={fadeInUp}
                                            whileHover={{ x: 15 }}
                                            href={item.link}
                                            className="flex items-center gap-6 group transition-all duration-500"
                                        >
                                            <div className={`w-16 h-16 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-xl group-hover:rotate-12 transition-transform duration-500`}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">{item.label}</p>
                                                <p className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-none">{item.value}</p>
                                            </div>
                                        </Motion.a>
                                    ))}
                                </div>
                            </Motion.div>
                        </div>

                        {/* Right Side: Modern Form */}
                        <div className="lg:w-3/5">
                            <Motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                viewport={{ once: true, amount: 0.1 }}
                                className="bg-slate-900 p-10 md:p-16 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-slate-800 relative overflow-hidden group"
                            >
                                {/* Decorative internal gradient */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                                {isSubmitted ? (
                                    <div className="text-center py-20 relative z-10">
                                        <Motion.div
                                            variants={scaleIn}
                                            initial="initial"
                                            animate="whileInView"
                                            className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500"
                                        >
                                            <CheckCircle2 size={48} strokeWidth={3} />
                                        </Motion.div>
                                        <h3 className="text-4xl font-black text-white mb-4 tracking-tighter">Hook, Line, and Sinker!</h3>
                                        <p className="text-xl text-slate-400 font-medium">Your message has safely reached our shore. We'll reply soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-4">Full Name</label>
                                                <input required name="name" type="text" className="w-full p-6 bg-white/5 border border-white/10 rounded-[2rem] text-white focus:bg-white/10 focus:border-brand-red focus:shadow-[0_0_0_8px_rgba(239,68,68,0.1)] outline-none transition-all font-bold text-lg placeholder:text-slate-600" placeholder="e.g. John Doe" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-4">Email Address</label>
                                                <input required name="email" type="email" className="w-full p-6 bg-white/5 border border-white/10 rounded-[2rem] text-white focus:bg-white/10 focus:border-brand-red focus:shadow-[0_0_0_8px_rgba(239,68,68,0.1)] outline-none transition-all font-bold text-lg placeholder:text-slate-600" placeholder="john@example.com" />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-4">Inquiry Subject</label>
                                            <input required name="subject" type="text" className="w-full p-6 bg-white/5 border border-white/10 rounded-[2rem] text-white focus:bg-white/10 focus:border-brand-red focus:shadow-[0_0_0_8px_rgba(239,68,68,0.1)] outline-none transition-all font-bold text-lg placeholder:text-slate-600" placeholder="How can we help?" />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-4">Your Message</label>
                                            <textarea required name="message" rows="4" className="w-full p-6 bg-white/5 border border-white/10 rounded-[2rem] text-white focus:bg-white/10 focus:border-brand-red focus:shadow-[0_0_0_8px_rgba(239,68,68,0.1)] outline-none resize-none transition-all font-bold text-lg placeholder:text-slate-600" placeholder="Describe your requirements..."></textarea>
                                        </div>
                                        {errorMessage && (
                                            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-200 text-sm font-bold text-center">
                                                {errorMessage}
                                            </div>
                                        )}
                                        <Motion.button
                                            whileHover={{ scale: 1.02, y: -4 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full py-8 ${isSubmitting ? 'bg-slate-700 cursor-not-allowed' : 'bg-brand-red hover:bg-red-600'} text-white font-black text-xl rounded-[2.5rem] flex items-center justify-center gap-4 transition-all duration-500 shadow-2xl shadow-brand-red/20 hover:shadow-brand-red/40`}
                                        >
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                            {!isSubmitting && <Send size={24} strokeWidth={3} />}
                                        </Motion.button>
                                    </form>
                                )}
                            </Motion.div>
                        </div>
                    </div>

                    {/* Interactive Map Section - Larger and More Modern */}
                    <Motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, amount: 0.1 }}
                        className="mt-32 relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-red/20 to-blue-500/20 rounded-[5rem] blur opacity-30 group-hover:opacity-100 transition duration-1000" />
                        <a
                            href="https://maps.app.goo.gl/cLFw2LJSKujLv12P9"
                            target="_blank"
                            rel="noreferrer"
                            className="relative block w-full h-[600px] rounded-[5rem] overflow-hidden bg-slate-100"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                                alt="Map Background"
                                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-700" />

                            {/* Map Floating Card */}
                            <div className="absolute bottom-10 left-10 right-10 md:left-auto md:right-16 md:bottom-16 bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-white/50 max-w-lg">
                                <span className="inline-block px-3 py-1 bg-brand-red text-white font-black text-[10px] uppercase tracking-widest rounded-full mb-6">Headquarters</span>
                                <h4 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter">Alappuzha, <br />Kerala, India</h4>
                                <p className="text-slate-500 font-bold mb-8 leading-relaxed">Located at the heart of Kerala's marine bounty, perfectly positioned for global supply chains.</p>
                                <div className="flex items-center gap-4 text-brand-red font-black uppercase text-xs tracking-widest">
                                    <MapPin size={20} strokeWidth={3} />
                                    Get Directions
                                </div>
                            </div>
                        </a>
                    </Motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

