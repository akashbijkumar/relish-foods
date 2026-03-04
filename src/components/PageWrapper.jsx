import React from 'react';
import { motion as Motion } from 'framer-motion';

const PageWrapper = ({ children }) => {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] // Custom bezier for natural easing
            }}
        >
            {children}
        </Motion.div>
    );
};

export default PageWrapper;
