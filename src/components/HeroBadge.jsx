import { motion as Motion } from 'framer-motion';

const HeroBadge = ({ text, className = "" }) => {
    if (!text) return null;

    return (
        <Motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`inline-block px-5 py-2 bg-brand-red text-white font-black text-xs md:text-sm uppercase rounded-full shadow-lg shadow-brand-red/30 tracking-[0.3em] mb-8 ${className}`}
        >
            {text}
        </Motion.span>
    );
};

export default HeroBadge;
