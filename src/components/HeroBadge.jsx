import { motion as Motion } from 'framer-motion';

const HeroBadge = ({ text, className = "" }) => {
    if (!text) return null;

    return (
        <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`inline-flex items-center gap-3 px-6 py-2.5 bg-slate-950/40 backdrop-blur-md border border-white/10 rounded-full shadow-2xl mb-12 group transition-all duration-500 hover:bg-slate-950/60 hover:border-white/20 ${className}`}
        >
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
            </span>
            <span className="text-white font-black text-[10px] md:text-xs uppercase tracking-[0.4em] leading-none">
                {text}
            </span>
        </Motion.div>
    );
};

export default HeroBadge;
