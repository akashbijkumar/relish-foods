import React from 'react';
import { motion as Motion } from 'framer-motion';
import HeroBadge from './HeroBadge';

const PageHeader = ({ title, subtitle, image, tagline }) => {
    return (
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-48 pb-20">
            {/* Background Image with Parallax-like effect */}
            <Motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/90 backdrop-blur-[1px]" />
            </Motion.div>

            {/* Content Container */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <div className="flex flex-col items-center">
                    <HeroBadge text={tagline} />

                    <div className="overflow-hidden mb-6">
                        <Motion.h1
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter"
                        >
                            {title}
                        </Motion.h1>
                    </div>

                    <Motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="w-20 h-1 bg-brand-red mb-8 rounded-full"
                    />

                    <Motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl"
                    >
                        {subtitle}
                    </Motion.p>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
