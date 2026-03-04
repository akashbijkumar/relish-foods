import { motion as Motion } from 'framer-motion';
import { ShieldCheck, Flag, ExternalLink, CheckCircle, FileText } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { staggerContainer } from '../utils/animations';
import { COMPANY_INFO } from '../constants/companyInfo';

const Certifications = () => {
    const certs = [
        {
            title: "HACCP Certified",
            authority: "Hazard Analysis Critical Control Point",
            desc: "Global standard for food safety and risk management in seafood processing.",
            icon: <ShieldCheck className="w-12 h-12 text-brand-red" />,
            delay: 0.1
        },
        {
            title: "US-FDA Registered",
            authority: "U.S. Food & Drug Administration",
            desc: "Full compliance with United States food safety regulations and bioterrorism act.",
            icon: <Flag className="w-12 h-12 text-blue-600" />,
            delay: 0.2
        },
        {
            title: "EU Export Approved",
            authority: "European Union Standards",
            desc: "Meets strict European Union health and hygiene directives for premium seafood exports.",
            icon: <ExternalLink className="w-12 h-12 text-blue-800" />,
            delay: 0.3
        },
        {
            title: "FSSAI Platinum",
            authority: "Food Safety and Standards Authority of India",
            desc: "Highest tier certification for domestic food safety and quality management systems.",
            icon: <CheckCircle className="w-12 h-12 text-green-600" />,
            delay: 0.4
        },
        {
            title: "BRC Food Safety",
            authority: "British Retail Consortium",
            desc: "Global benchmark for retail food safety, ensuring product quality and traceability.",
            icon: <FileText className="w-12 h-12 text-amber-600" />,
            delay: 0.5
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            <PageHeader
                tagline="Our Credentials"
                title="Global Certifications"
                subtitle="We adhere to the most stringent international food safety standards to deliver ocean-fresh quality to your doorstep."
                image="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=2070&auto=format&fit=crop"
            />

            <section className="pt-16 pb-24 md:pt-24 md:pb-32">
                <div className="max-w-7xl mx-auto px-6">

                    <Motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {certs.map((cert, idx) => (
                            <Motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.5, delay: cert.delay }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-50 hover:border-brand-red/40 hover:bg-brand-red/[0.12] hover:shadow-[0_40px_80px_-20px_rgba(239,68,68,0.25)] transition-all duration-500"
                            >
                                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-8 bg-white shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}>
                                    {cert.icon}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 tracking-tight uppercase leading-none group-hover:text-brand-red transition-colors">{cert.title}</h3>
                                <p className="text-brand-red text-xs font-black uppercase tracking-[0.2em] mb-6">{cert.authority}</p>
                                <p className="text-slate-500 text-lg leading-relaxed font-medium">{cert.desc}</p>
                            </Motion.div>
                        ))}
                    </Motion.div>
                </div>
            </section>

            {/* Quality Assurance Section */}
            <section className="py-24 md:py-40 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_50%_0%,#fff_0.5px,transparent_0.5px)] [background-size:24px_24px]" />
                </div>
                {/* Decorative Wave */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 opacity-5">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[200%] h-64">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
                        <Motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="lg:w-1/2"
                        >
                            <span className="inline-block px-4 py-1 bg-brand-red text-white font-black tracking-widest uppercase text-xs rounded-full mb-8">
                                Quality Control
                            </span>
                            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.9]">Zero-Tolerance <br /> for <span className="text-brand-red italic">Compromise</span></h2>
                            <div className="grid grid-cols-1 gap-8">
                                {[
                                    { text: "In-house state-of-the-art microbiology laboratory", desc: "Equipped for rigorous testing of every batch." },
                                    { text: "Strict pesticide and antibiotic residue testing", desc: "Ensuring 100% safety for all global markets." },
                                    { text: "Temperature-controlled logistics at every step", desc: "Maintaining the cold chain from catch to delivery." },
                                    { text: "Real-time traceability from catch to delivery", desc: "Full transparency for every product shipped." }
                                ].map((item, idx) => (
                                    <div key={idx} className="group flex items-start gap-6">
                                        <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500">
                                            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="text-xl md:text-2xl font-black text-white group-hover:text-brand-red transition-colors duration-500">{item.text}</p>
                                            <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Motion.div>
                        <Motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="absolute -inset-10 bg-brand-red/10 rounded-[5rem] blur-3xl opacity-50" />
                            <div className="relative rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] bg-slate-800">
                                <Motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 1.5 }}
                                    src={`${import.meta.env.BASE_URL}images/Certifications/Testing.png`}
                                    alt="Quality Laboratory"
                                    className="w-full h-[500px] md:h-[700px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                            </div>
                        </Motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Certifications;
