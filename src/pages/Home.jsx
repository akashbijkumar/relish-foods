import { ArrowRight, Anchor, ShieldCheck, Globe, Waves } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section - Full immersive experience */}
            {/* Hero Section - Redesigned */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20 sm:pt-0">
                {/* Background Image - Enhanced */}
                <Motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="/images/hero_fresh_indian.png"
                        alt="Premium Seafood from India"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80 backdrop-blur-[2px]" />
                </Motion.div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-6 max-w-7xl mx-auto mt-20">
                    <Motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="flex flex-col items-center"
                    >
                        {/* Elegant Badge */}
                        <Motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-md"
                        >
                            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                            <span className="text-sm font-medium text-white/90 tracking-[0.2em] uppercase">Est. 1972 · Global Excellence</span>
                        </Motion.div>

                        {/* Main Heading */}
                        <div className="overflow-hidden mb-8">
                            <Motion.h1
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold text-white leading-[1.1] tracking-tight"
                            >
                                The <span className="text-brand-red italic">Gold Standard</span>
                                <br />
                                of Seafood
                            </Motion.h1>
                        </div>

                        {/* Horizontal Line */}
                        <Motion.div
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="w-24 h-1 bg-brand-red mb-8"
                        />

                        {/* Subheading */}
                        <Motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
                        >
                            Exporting premium quality catch from the pristine waters of the Arabian Sea to over 30 countries worldwide.
                        </Motion.p>

                        {/* CTA Buttons */}
                        <Motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0, duration: 0.8 }}
                            className="flex flex-col sm:flex-row items-center gap-6"
                        >
                            <Link
                                to="/products"
                                className="group relative inline-flex items-center justify-center gap-3 min-w-[200px] border-2 border-brand-red bg-brand-red/10 text-white font-bold text-lg px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-brand-red hover:shadow-[0_0_40px_rgba(227,30,36,0.6)] hover:scale-105 active:scale-95"
                            >
                                <span className="relative z-10 tracking-widest uppercase text-sm">Explore Prods.</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/about"
                                className="group relative inline-flex items-center justify-center gap-3 min-w-[200px] border-2 border-white/30 bg-white/5 text-white font-bold text-lg px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900 hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95"
                            >
                                <span className="tracking-widest uppercase text-sm">Our Heritage</span>
                            </Link>
                        </Motion.div>
                    </Motion.div>
                </div>

                {/* Scroll Indicator */}
                <Motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
                </Motion.div>
            </section>

            {/* Trust Badges - Staggered reveal */}
            <section className="bg-slate-900 py-16 border-t border-white/10 relative z-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <Motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="flex flex-wrap items-center justify-center gap-6 md:gap-16"
                    >
                        {[
                            { icon: <ShieldCheck className="w-6 h-6 text-green-500" />, label: "HACCP Certified" },
                            { icon: <ShieldCheck className="w-6 h-6 text-blue-500" />, label: "US-FDA Approved" },
                            { icon: <ShieldCheck className="w-6 h-6 text-yellow-500" />, label: "EU Compliant" },
                            { icon: <Globe className="w-6 h-6 text-purple-500" />, label: "30+ Countries" }
                        ].map((badge, i) => (
                            <Motion.div
                                key={i}
                                variants={fadeInUp}
                                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 shadow-lg hover:bg-white/10 transition-colors"
                            >
                                {badge.icon}
                                <span className="text-white/80 text-xs sm:text-sm font-bold uppercase tracking-widest">{badge.label}</span>
                            </Motion.div>
                        ))}
                    </Motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 md:py-40 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-20 md:mb-32">
                        <Motion.span
                            {...fadeInUp}
                            className="inline-block px-4 py-1 bg-red-50 text-brand-red font-black tracking-[0.2em] uppercase text-xs rounded-full mb-6"
                        >
                            Why Relish Foods
                        </Motion.span>
                        <Motion.h2
                            {...fadeInUp}
                            transition={{ ...fadeInUp.transition, delay: 0.1 }}
                            className="text-4xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter"
                        >
                            Excellence in <span className="text-brand-red">Every Catch</span>
                        </Motion.h2>
                        <Motion.p
                            {...fadeInUp}
                            transition={{ ...fadeInUp.transition, delay: 0.2 }}
                            className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light"
                        >
                            Five decades of expertise in sourcing, processing, and delivering premium seafood to discerning customers worldwide.
                        </Motion.p>
                    </div>

                    {/* Features Grid */}
                    <Motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
                    >
                        {[
                            {
                                icon: <Anchor className="w-10 h-10" />,
                                title: "Deep Sea Heritage",
                                desc: "Over 50 years of expertise in sourcing the finest catch from the Arabian Sea. Our legacy is built on quality.",
                                color: "bg-blue-600"
                            },
                            {
                                icon: <ShieldCheck className="w-10 h-10" />,
                                title: "Certified Excellence",
                                desc: "HACCP, US-FDA, and EU approved facilities ensuring the highest standards of hygiene and food safety.",
                                color: "bg-green-600"
                            },
                            {
                                icon: <Globe className="w-10 h-10" />,
                                title: "Global Presence",
                                desc: "Trusted by importers across Europe, USA, and Asia. We deliver quality to every corner of the world.",
                                color: "bg-purple-600"
                            }
                        ].map((feature, index) => (
                            <Motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -15, scale: 1.02 }}
                                className="group relative bg-white p-10 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-[0_40px_80px_-20px_rgba(239,68,68,0.25)] hover:bg-brand-red/[0.12] hover:border-brand-red/30 transition-all duration-500"
                            >
                                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-8 ${feature.color} text-white shadow-xl transition-transform group-hover:scale-110 group-hover:rotate-6 duration-500`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight group-hover:text-brand-red transition-colors uppercase leading-[0.9]">{feature.title}</h3>
                                <p className="text-slate-500 text-lg leading-relaxed font-medium">{feature.desc}</p>
                            </Motion.div>
                        ))}
                    </Motion.div>
                </div>
            </section>

            {/* Brands Showcase */}
            <section className="py-24 md:py-40 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Text Content */}
                        <Motion.div
                            {...fadeInUp}
                        >
                            <span className="inline-block px-4 py-1 bg-brand-red text-white font-black tracking-widest uppercase text-xs rounded-full mb-6">
                                Our Brands
                            </span>
                            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.8]">
                                Brands That Define
                                <br />
                                <span className="text-brand-red transition-all hover:tracking-normal tracking-[0.05em]"> Excellence</span>
                            </h2>
                            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-lg">
                                Our flagship brands <strong className="text-white">Apsara</strong> and <strong className="text-white">Merit</strong> have become synonymous with premium quality in international markets.
                            </p>
                            <Link
                                to="/brands"
                                className="group inline-flex items-center gap-3 text-brand-red font-black text-2xl hover:text-brand-red/80 transition-all"
                            >
                                Discover Our Brands
                                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </Motion.div>

                        {/* Brand Cards */}
                        <Motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative"
                        >
                            <Motion.div
                                variants={fadeInUp}
                                className="bg-white/5 backdrop-blur-xl rounded-[4rem] p-12 border border-white/10 text-center group hover:bg-white hover:border-white transition-all duration-700 shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-700 -z-10" />
                                <div className="h-32 flex items-center justify-center mb-8">
                                    <span className="text-5xl md:text-6xl font-serif font-black text-white group-hover:text-white transition-colors tracking-widest">APSARA</span>
                                </div>
                                <h3 className="text-2xl font-black text-brand-red group-hover:text-white mb-4 transition-colors">The Gold Standard</h3>
                                <p className="text-slate-400 group-hover:text-white/80 transition-colors text-lg italic tracking-tight font-medium">Premium selection for discerning markets</p>
                            </Motion.div>

                            <Motion.div
                                variants={fadeInUp}
                                className="bg-white/5 backdrop-blur-xl rounded-[4rem] p-12 border border-white/10 text-center group hover:bg-white hover:border-white transition-all duration-700 shadow-2xl overflow-hidden relative"
                            >
                                <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-700 -z-10" />
                                <div className="h-32 flex items-center justify-center mb-8">
                                    <span className="text-5xl md:text-6xl font-serif font-black text-white group-hover:text-white transition-colors tracking-widest">MERIT</span>
                                </div>
                                <h3 className="text-2xl font-black text-slate-400 group-hover:text-white mb-4 transition-colors uppercase">Consistent Quality</h3>
                                <p className="text-slate-400 group-hover:text-white/80 transition-colors text-lg italic tracking-tight font-medium">Reliable quality for everyday needs</p>
                            </Motion.div>
                        </Motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 md:py-48 bg-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                </div>

                <div className="relative max-w-5xl mx-auto px-6 text-center">
                    <Motion.div
                        {...fadeInUp}
                    >
                        <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.8]">
                            Ready to <span className="text-brand-red">Partner</span> With Us?
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto font-medium">
                            Join hundreds of satisfied importers worldwide. Experience consistent quality and reliable supply of premium frozen seafood.
                        </p>
                        <Link
                            to="/contact"
                            className="group inline-flex items-center justify-center gap-4 bg-slate-900 hover:bg-brand-red text-white font-black text-xl md:text-2xl px-12 py-6 md:py-8 rounded-full transition-all duration-500 shadow-2xl hover:-translate-y-2"
                        >
                            Get in Touch
                            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </Motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
