import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { Anchor, Truck, Factory, Snowflake, ClipboardCheck, Globe } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Process = () => {
    const steps = [
        {
            num: "01",
            title: "Ethical Sourcing",
            desc: "We source our catch directly from trusted local fishermen and our own fleet in the pristine waters of the Arabian Sea.",
            icon: <Anchor className="w-8 h-8" />,
            gradient: "from-blue-600 to-blue-400"
        },
        {
            num: "02",
            title: "Rapid Transport",
            desc: "The catch is immediately iced and transported in insulated vehicles to our processing plant to maintain sub-zero temperatures.",
            icon: <Truck className="w-8 h-8" />,
            gradient: "from-sky-600 to-sky-400"
        },
        {
            num: "03",
            title: "Precision Processing",
            desc: "At our HACCP-certified facility, seafood is cleaned, graded, and processed using state-of-the-art machinery.",
            icon: <Factory className="w-8 h-8" />,
            gradient: "from-brand-red to-red-400"
        },
        {
            num: "04",
            title: "Advanced Freezing",
            desc: "We use Plate Freezers, Blast Freezers, and IQF technology to lock in freshness and nutrients instantly.",
            icon: <Snowflake className="w-8 h-8" />,
            gradient: "from-cyan-600 to-cyan-400"
        },
        {
            num: "05",
            title: "Rigorous Quality",
            desc: "Our in-house lab conducts rigorous tests for microbiological and chemical safety before packaging.",
            icon: <ClipboardCheck className="w-8 h-8" />,
            gradient: "from-green-600 to-green-400"
        },
        {
            num: "06",
            title: "Global Export",
            desc: "Finished products are stored in cold storage and exported in reefer containers to destinations worldwide.",
            icon: <Globe className="w-8 h-8" />,
            gradient: "from-purple-600 to-purple-400"
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            <PageHeader
                tagline="From Ocean to Plate"
                title="Our Process"
                subtitle="From the ocean to your plate, ensuring freshness at every step."
                image="https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Process Steps Section */}
            <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-100/30 rounded-full blur-[120px] -z-10" />

                <div className="max-w-7xl mx-auto px-6">
                    {/* Timeline Container */}
                    <Motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, amount: 0.1 }}
                        className="relative"
                    >
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 overflow-hidden">
                            <Motion.div
                                className="w-full h-full bg-gradient-to-b from-brand-red via-blue-600 to-brand-red"
                                initial={{ y: "-100%" }}
                                whileInView={{ y: "0%" }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 3, ease: "easeInOut" }}
                            />
                        </div>

                        {/* Connecting Line (Mobile) */}
                        <div className="lg:hidden absolute left-0 sm:left-4 md:left-8 top-0 bottom-0 w-1 bg-slate-100 overflow-hidden">
                            <Motion.div
                                className="w-full h-full bg-gradient-to-b from-brand-red to-blue-600"
                                initial={{ y: "-100%" }}
                                whileInView={{ y: "0%" }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 2 }}
                            />
                        </div>

                        <div className="space-y-16 md:space-y-24 lg:space-y-0">
                            {steps.map((step, index) => (
                                <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center lg:min-h-[350px]`}>

                                    {/* Content Card */}
                                    <Motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                        className={`w-full lg:w-5/12 ml-6 sm:ml-10 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-16 md:pr-24' : 'lg:pl-16 md:pl-24'}`}
                                    >
                                        <div className="group bg-white p-6 sm:p-8 md:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] hover:bg-slate-100 hover:border-slate-300 transition-all duration-500 relative overflow-hidden">
                                            {/* Accent Gradient */}
                                            <div className={`absolute top-0 right-0 w-full h-2 bg-gradient-to-r ${step.gradient}`} />

                                            <div className="relative z-10">
                                                <div className="flex items-center justify-between mb-8">
                                                    <div className={`flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br ${step.gradient} text-white group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                                                        {step.icon}
                                                    </div>
                                                    <span className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-100 group-hover:text-brand-red/10 transition-colors duration-500 select-none">
                                                        {step.num}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 group-hover:text-brand-red transition-colors tracking-tight uppercase leading-tight">
                                                    {step.title}
                                                </h3>
                                                <p className="text-slate-500 leading-relaxed text-base sm:text-lg md:text-xl font-medium">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </Motion.div>

                                    {/* Center Point */}
                                    <div className="absolute left-0 sm:left-4 md:left-8 lg:left-1/2 top-10 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 z-20">
                                        <Motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            viewport={{ once: true, amount: 0.1 }}
                                            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                                            className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white border-4 border-slate-900 flex items-center justify-center shadow-2xl group"
                                        >
                                            <Motion.div
                                                animate={{ scale: [1, 1.3, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className={`w-2 h-2 md:w-4 md:h-4 rounded-full bg-gradient-to-r ${step.gradient}`}
                                            />
                                        </Motion.div>
                                    </div>

                                    {/* Empty space for grid alignment on desktop */}
                                    <div className="hidden lg:block lg:w-5/12" />
                                </div>
                            ))}
                        </div>
                    </Motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-slate-900 to-slate-900" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <Motion.div
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                            Witness Our <span className="text-brand-red">Excellence</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
                            Schedule a visit to our state-of-the-art processing plant in Alappuzha, Kerala and witness our commitment to quality firsthand.
                        </p>
                        <Link
                            to="/contact"
                            className="group inline-flex items-center justify-center gap-4 bg-brand-red hover:bg-white hover:text-brand-red text-white font-black text-xl md:text-2xl px-10 md:px-12 py-5 md:py-6 rounded-full transition-all duration-500 shadow-2xl shadow-brand-red/40 hover:-translate-y-2"
                        >
                            Schedule a Visit
                            <Globe className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" />
                        </Link>
                    </Motion.div>
                </div>
            </section>
        </div>
    );
};

export default Process;
