import { motion as Motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const PageHeader = ({ tagline, title, subtitle, image }) => {
    return (
        <section className="relative h-[65vh] md:h-[75vh] lg:h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0">
                <Motion.img
                    initial={{ scale: 1.2, filter: 'blur(10px)' }}
                    animate={{ scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-7xl mx-auto pt-32 md:pt-36">
                <Motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    {tagline && (
                        <Motion.span
                            initial={{ opacity: 0, letterSpacing: '0.2em' }}
                            animate={{ opacity: 1, letterSpacing: '0.3em' }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="inline-block px-5 py-2 bg-brand-red text-white font-black text-xs md:text-sm uppercase mb-8 rounded-full shadow-lg shadow-brand-red/30"
                        >
                            {tagline}
                        </Motion.span>
                    )}

                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white mb-8 tracking-tighter leading-[0.85] uppercase drop-shadow-2xl">
                        {title}
                    </h1>

                    {subtitle && (
                        <Motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="text-lg md:text-2xl text-slate-800 max-w-3xl mx-auto leading-relaxed font-semibold"
                        >
                            {subtitle}
                        </Motion.p>
                    )}
                </Motion.div>
            </div>

            {/* Scroll Indicator */}
            <Motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Scroll</span>
                <Motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="text-brand-red w-6 h-6" />
                </Motion.div>
            </Motion.div>
        </section>
    );
};

export default PageHeader;
