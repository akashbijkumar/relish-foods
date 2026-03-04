// Premium spring-based animations for a fluid, weightless feel
export const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        mass: 0.8
    }
};

export const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.1 },
    transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // refined cubic bezier instead of easeOut
    }
};

export const staggerContainer = {
    initial: {},
    whileInView: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

export const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.1 },
    transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
    }
};

export const slideInLeft = {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: {
        type: "spring",
        stiffness: 80,
        damping: 14
    }
};

export const slideInRight = {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: {
        type: "spring",
        stiffness: 80,
        damping: 14
    }
};

