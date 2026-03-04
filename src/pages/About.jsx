import { cloneElement } from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Anchor, ShieldCheck, Lightbulb, Target } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { fadeInUp } from '../utils/animations';
import { COMPANY_INFO } from '../constants/companyInfo';

const About = () => {
    const values = [
        {
            title: "Total Quality Control",
            desc: "We never compromise. Every batch undergoes rigorous inspection in our state-of-the-art laboratory.",
            icon: <ShieldCheck className="w-8 h-8" />,
            color: "from-brand-red to-red-400"
        },
        {
            title: "Ocean Sustainability",
            desc: "We form strong partnerships with local fishermen to practice sustainable, ethical fishing methods.",
            icon: <Anchor className="w-8 h-8" />,
            color: "from-blue-600 to-blue-400"
        },
        {
            title: "Infinite Innovation",
            desc: "Investing in the latest IQF and blast-freezing technology to lock in ocean-fresh goodness.",
            icon: <Lightbulb className="w-8 h-8" />,
            color: "from-amber-600 to-amber-400"
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            <PageHeader
                tagline="Our Heritage"
                title="Legacy of Trust"
                subtitle="Leading the seafood industry with five decades of excellence and global footprints."
                image="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop"
            />


            {/* Our Story Section */}
            <section className="pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                        <Motion.div
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true, amount: 0.1 }}
                            className="lg:w-1/2"
                        >
                            <Motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-block px-4 py-1 bg-brand-red text-white font-black tracking-widest uppercase text-xs rounded-full mb-8"
                            >
                                Established {COMPANY_INFO.established}
                            </Motion.span>
                            <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
                                Five Decades of <br />
                                <span className="text-brand-red italic underline decoration-slate-200 underline-offset-8">Freshness</span>
                            </h2>
                            <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                                <p>
                                    {COMPANY_INFO.name} India was established with a singular vision: to bring the authentic, pristine taste of Indian coastal seafood to the global Stage.
                                </p>
                                <p>
                                    Headquartered in Alappuzha, the Venice of the East, we sit at the heart of Kerala's bounty. Our direct access to the Arabian Sea ensures we process what we catch, instantly.
                                </p>
                                <div className="grid grid-cols-2 gap-8 pt-10">
                                    <div className="group border-l-4 border-brand-red pl-6 transition-all duration-500 hover:pl-10">
                                        <p className="text-5xl md:text-6xl font-black text-slate-900 mb-1 tracking-tighter">{COMPANY_INFO.stats.yearsLegacy}</p>
                                        <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Years Legacy</p>
                                    </div>
                                    <div className="group border-l-4 border-slate-900 pl-6 transition-all duration-500 hover:pl-10">
                                        <p className="text-5xl md:text-6xl font-black text-slate-900 mb-1 tracking-tighter">{COMPANY_INFO.stats.exportNations}</p>
                                        <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Export Nations</p>
                                    </div>
                                </div>
                            </div>
                        </Motion.div>
                        <Motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="absolute -inset-10 bg-brand-red/5 rounded-[5rem] transform -rotate-3 -z-10"></div>
                            <div className="relative rounded-[4rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] bg-slate-200">
                                <Motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 1.5 }}
                                    src={`${import.meta.env.BASE_URL}images/heritage.jpg`}
                                    alt="Fresh Seafood Heritage"
                                    className="w-full object-cover h-[500px] md:h-[700px]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </Motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section - Higher up for better flow */}
            <section className="py-24 md:py-40 bg-slate-900 overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#fff_1px,transparent_1px)] [background-size:64px_64px]" />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="text-center mb-24"
                    >
                        <span className="text-brand-red font-black tracking-[0.3em] uppercase text-xs mb-4 block">Purposes & Goals</span>
                        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter">Defining Our Future</h2>
                    </Motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <Motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 1, type: "spring", bounce: 0.2 }}
                            className="relative group p-12 md:p-16 bg-white/[0.03] backdrop-blur-3xl rounded-[4rem] text-white border border-white/10 hover:bg-white hover:text-slate-900 transition-all duration-700 overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-brand-red rounded-3xl flex items-center justify-center mb-10 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                                    <Target className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Our Vision</h3>
                                <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-80 group-hover:opacity-100">
                                    To lead the global seafood evolution as the most trusted partner, setting benchmarks for sustainability, quality, and marine innovation.
                                </p>
                            </div>
                            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-red/10 rounded-full blur-3xl group-hover:bg-brand-red/20 transition-all" />
                        </Motion.div>

                        <Motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 1, type: "spring", bounce: 0.2 }}
                            className="relative group p-12 md:p-16 bg-white/[0.03] backdrop-blur-3xl rounded-[4rem] text-white border border-white/10 hover:bg-white hover:text-slate-900 transition-all duration-700 overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-slate-100/10 rounded-3xl flex items-center justify-center mb-10 border border-white/10 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 group-hover:-rotate-12">
                                    <Lightbulb className="w-10 h-10" />
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Our Mission</h3>
                                <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-80 group-hover:opacity-100">
                                    To bring the ocean's best to every table through ethical sourcing, cutting-edge refrigeration tech, and empowering our coastal fishing heritage.
                                </p>
                            </div>
                            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all" />
                        </Motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 md:py-40 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <Motion.div
                        {...fadeInUp}
                        className="text-center mb-24"
                    >
                        <span className="inline-block px-4 py-1 bg-slate-100 text-slate-400 font-extrabold tracking-[0.2em] uppercase text-xs rounded-full mb-6">
                            The Foundation
                        </span>
                        <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none">Core Principles</h2>
                    </Motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {values.map((value, idx) => (
                            <Motion.div
                                key={idx}
                                {...fadeInUp}
                                transition={{ ...fadeInUp.transition, delay: idx * 0.1 }}
                                whileHover={{ y: -15, scale: 1.02 }}
                                className="group bg-slate-50 p-10 md:p-14 rounded-[4rem] border border-transparent hover:bg-white hover:border-slate-100 transition-all duration-700 shadow-sm hover:shadow-2xl hover:shadow-brand-red/10"
                            >
                                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-[2.5rem] mb-10 bg-gradient-to-br ${value.color} text-white shadow-2xl transition-all group-hover:rotate-12 group-hover:scale-110 duration-500`}>
                                    {cloneElement(value.icon, { size: 40 })}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 transition-colors tracking-tighter uppercase leading-none group-hover:text-brand-red">{value.title}</h3>
                                <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium transition-colors">{value.desc}</p>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-brand-red mb-12 mx-6 rounded-[5rem] relative overflow-hidden group">
                <Motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 opacity-20 pointer-events-none"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
                </Motion.div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <Motion.div {...fadeInUp}>
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-none">
                            Ready to Taste <br /> the <span className="italic underline decoration-white/20 underline-offset-8">Ocean?</span>
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6 mt-12">
                            <Motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/products"
                                    className="block px-12 py-6 bg-white text-brand-red rounded-full font-black text-xl transition-all shadow-2xl"
                                >
                                    Our Products
                                </Link>
                            </Motion.div>
                            <Motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/contact"
                                    className="block px-12 py-6 bg-slate-900 text-white rounded-full font-black text-xl transition-all shadow-2xl"
                                >
                                    Get in Touch
                                </Link>
                            </Motion.div>
                        </div>
                    </Motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
