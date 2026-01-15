import { motion as Motion } from 'framer-motion';
import { Shield, Sparkles, Award, Anchor, Waves, ArrowDown } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { fadeInUp } from '../utils/animations';

const Brands = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <PageHeader
                tagline="Our Powerhouses"
                title="Global Brands"
                subtitle="Discover our internationally acclaimed brands, each standing for quality, tradition, and pure oceanic goodness."
                image={`${import.meta.env.BASE_URL}images/brands_bg_fish.png`}
            />

            {/* Apsara Brand Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white to-red-50/30"></div>
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                        <Motion.div
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true, amount: 0.1 }}
                            className="lg:w-1/2"
                        >
                            <Motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100px" }}
                                className="h-1 bg-brand-red mb-8"
                            />
                            <Motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center px-4 py-1.5 bg-brand-red/10 text-brand-red font-black tracking-widest uppercase text-xs rounded-full mb-6 border border-brand-red/20"
                            >
                                <Anchor size={14} className="mr-2" />
                                The Gold Standard
                            </Motion.span>
                            <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
                                APSARA<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600 italic pr-4">Seafood</span>
                            </h2>
                            <div className="space-y-6 text-xl md:text-2xl text-slate-600 leading-relaxed font-medium mb-12">
                                <p>
                                    Apsara represents the pinnacle of seafood excellence, trusted by exporters and consumers worldwide for its consistent quality and premium selection.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { icon: <Shield className="w-6 h-6 text-white" />, title: "Quality Certified", desc: "Rigorous global standards" },
                                    { icon: <Award className="w-6 h-6 text-white" />, title: "Premium Grade", desc: "Top-tier market benchmark" }
                                ].map((item, i) => (
                                    <Motion.div
                                        key={i}
                                        whileHover={{ y: -5 }}
                                        className="group p-6 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-brand-red/10 transition-all duration-300"
                                    >
                                        <div className="mb-4 inline-flex p-3 rounded-2xl bg-gradient-to-br from-brand-red to-red-600 shadow-lg shadow-brand-red/30 text-white">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg font-black text-slate-900 mb-1">{item.title}</h3>
                                        <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                                    </Motion.div>
                                ))}
                            </div>
                        </Motion.div>

                        <Motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="lg:w-1/2 relative perspective-1000"
                        >
                            <Motion.div
                                animate={{ rotateY: [-5, 5, -5] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 bg-white/40 backdrop-blur-xl border border-white/50 p-12 md:p-20 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(239,68,68,0.2)]"
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}images/brands/apsara_logo.png`}
                                    alt="Apsara Logo"
                                    className="w-full h-auto drop-shadow-2xl"
                                />
                                <div className="absolute inset-0 rounded-[3rem] ring-1 ring-inset ring-white/50 pointer-events-none" />
                            </Motion.div>

                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-red/10 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
                        </Motion.div>
                    </div>
                </div>
            </section>

            {/* Merit Brand Section */}
            <section className="py-24 relative overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center bg-fixed"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900"></div>

                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
                        <Motion.div
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true, amount: 0.1 }}
                            className="lg:w-1/2"
                        >
                            <Motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100px" }}
                                className="h-1 bg-blue-500 mb-8 ml-auto lg:ml-0"
                            />
                            <Motion.span
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center px-4 py-1.5 bg-blue-500/10 text-blue-400 font-black tracking-widest uppercase text-xs rounded-full mb-6 border border-blue-500/20"
                            >
                                <Waves size={14} className="mr-2" />
                                Freshness Reimagined
                            </Motion.span>
                            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                                MERIT<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic pr-4">Frozen</span>
                            </h2>
                            <div className="space-y-6 text-xl md:text-2xl text-slate-300 leading-relaxed font-medium mb-12">
                                <p>
                                    Frozen at the peak of freshness, Merit delivers the pure essence of the Arabian Sea directly to modern kitchens worldwide.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { icon: <Shield className="w-6 h-6 text-white" />, title: "Safety Assured", desc: "Traceability & rigid protocols" },
                                    { icon: <Sparkles className="w-6 h-6 text-white" />, title: "Instant IQF", desc: "Flash-frozen locking taste" }
                                ].map((item, i) => (
                                    <Motion.div
                                        key={i}
                                        whileHover={{ y: -5 }}
                                        className="group p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                                    >
                                        <div className="mb-4 inline-flex p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30 text-white">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg font-black text-white mb-1">{item.title}</h3>
                                        <p className="text-sm text-slate-400 font-medium">{item.desc}</p>
                                    </Motion.div>
                                ))}
                            </div>
                        </Motion.div>

                        <Motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="lg:w-1/2 relative perspective-1000"
                        >
                            <Motion.div
                                animate={{ rotateY: [5, -5, 5] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 bg-slate-800/50 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(59,130,246,0.2)]"
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}images/brands/merit_logo.png`}
                                    alt="Merit Logo"
                                    className="w-full h-auto drop-shadow-2xl"
                                />
                                <div className="absolute inset-0 rounded-[3rem] ring-1 ring-inset ring-white/10 pointer-events-none" />
                            </Motion.div>

                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
                        </Motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Brands;
