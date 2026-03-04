// Premium animations refined for mobile "snappiness"
export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};


export const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.8, ease: "easeOut" }
};

export const staggerContainer = {
    initial: {},
    whileInView: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05
        }
    }
};


export const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

export const slideInLeft = {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

export const slideInRight = {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};
