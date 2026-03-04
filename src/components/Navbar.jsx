import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion as Motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { COMPANY_INFO } from '../constants/companyInfo';

const NavLink = ({ link, active, isScrolled }) => {
    return (
        <div className="relative group">
            <Link
                to={link.path}
                className={`relative px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors duration-300 z-10 flex items-center justify-center ${active
                    ? 'text-brand-red'
                    : isScrolled ? 'text-slate-900 hover:text-brand-red' : 'text-slate-900 lg:text-white hover:text-brand-red'
                    }`}
            >
                {link.name}
                {/* Hover Pill Effect */}
                <Motion.span
                    className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    layoutId="hover-pill"
                    transition={{ duration: 0.2 }}
                />
            </Link>

            {/* Active Indicator Dot */}
            {active && (
                <Motion.div
                    layoutId="nav-dot"
                    className="absolute -bottom-1 left-0 right-0 mx-auto w-1.5 h-1.5 bg-brand-red rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
            )}
        </div>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const { scrollY } = useScroll();

    // Smooth scroll transformations
    const backgroundColor = useTransform(
        scrollY,
        [0, 80],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
    );

    const backdropFilter = useTransform(
        scrollY,
        [0, 80],
        ["blur(0px)", "blur(16px)"]
    );

    const navPadding = useTransform(
        scrollY,
        [0, 80],
        ["20px", "10px"]
    );

    const logoScale = useTransform(
        scrollY,
        [0, 80],
        [0.9, 0.75]
    );

    const shadow = useTransform(
        scrollY,
        [0, 80],
        ["0px 0px 0px rgba(0,0,0,0)", "0px 10px 40px rgba(0,0,0,0.1)"]
    );

    useMotionValueEvent(scrollY, "change", (latest) => {
        const scrolled = latest > 50;
        if (scrolled !== isScrolled) {
            setIsScrolled(scrolled);
        }
    });

    const leftLinks = [
        { name: 'About', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Process', path: '/process' },
    ];

    const rightLinks = [
        { name: 'Brands', path: '/brands' },
        { name: 'Certifications', path: '/certifications' },
        { name: 'Contact', path: '/contact' },
    ];

    const mobileLinks = [
        { name: 'Home', path: '/' },
        ...leftLinks,
        ...rightLinks
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <Motion.nav
                style={{
                    backgroundColor,
                    backdropFilter,
                    paddingTop: navPadding,
                    paddingBottom: navPadding,
                    boxShadow: shadow
                }}
                className="fixed w-full z-50 top-0 left-0 border-b border-transparent"
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between relative">

                        {/* Left Navigation */}
                        <div className="hidden lg:flex items-center space-x-2 flex-1 justify-end pr-28">
                            {leftLinks.map((link) => (
                                <NavLink key={link.name} link={link} active={isActive(link.path)} isScrolled={isScrolled} />
                            ))}
                        </div>

                        {/* Center Logo Area */}
                        <div className="flex-shrink-0 relative z-10 mx-auto">
                            <Link to="/">
                                <Motion.div
                                    style={{ scale: logoScale }}
                                    className={`relative flex items-center justify-center rounded-full transition-all duration-700 ${isScrolled ? 'bg-transparent p-1' : 'bg-white p-3 shadow-xl border border-slate-100'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <img
                                        src={`${import.meta.env.BASE_URL}images/logo.jpg`}
                                        alt={COMPANY_INFO.name}
                                        className={`${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'} w-auto object-contain transition-all duration-500`}
                                    />
                                </Motion.div>
                            </Link>
                        </div>

                        {/* Right Navigation */}
                        <div className="hidden lg:flex items-center space-x-2 flex-1 justify-start pl-32">
                            {rightLinks.map((link) => (
                                <NavLink key={link.name} link={link} active={isActive(link.path)} isScrolled={isScrolled} />
                            ))}
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="lg:hidden absolute left-0 top-1/2 -translate-y-1/2">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`relative w-10 h-10 flex flex-col justify-center items-center group z-[110] transition-colors ${isScrolled || isOpen ? 'text-slate-900' : 'text-white'
                                    }`}
                                aria-label="Toggle Menu"
                            >
                                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`} />
                                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`} />
                            </button>
                        </div>
                    </div>
                </div>

            </Motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Simplified Backdrop */}
                        <Motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-slate-950/60 backdrop-blur-md z-[90] lg:hidden"
                        />

                        {/* Side Menu - Dark Theme */}
                        <Motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed top-0 left-0 bottom-0 w-[80%] sm:w-[75%] max-w-[400px] bg-slate-900 border-r border-white/5 z-[100] lg:hidden shadow-2xl overflow-hidden"
                        >
                            {/* Brand-Aligned Background Glows */}
                            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                                <Motion.div
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 30,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] flex flex-wrap"
                                >
                                    <div className="w-1/2 h-1/2 bg-brand-red/10 blur-[60px]" />
                                    <div className="w-1/2 h-1/2 bg-slate-800/20 blur-[60px]" />
                                    <div className="w-1/2 h-1/2 bg-brand-red/5 blur-[60px]" />
                                    <div className="w-1/2 h-1/2 bg-slate-700/10 blur-[60px]" />
                                </Motion.div>
                            </div>

                            <div className="relative z-10 flex flex-col h-full p-6 sm:p-8">
                                {/* Mobile Menu Header */}
                                <div className="flex justify-between items-start mb-12">
                                    <Link to="/" onClick={() => setIsOpen(false)}>
                                        <div className="bg-white p-2 rounded-xl shadow-lg border border-slate-100">
                                            <img
                                                src={`${import.meta.env.BASE_URL}images/logo.jpg`}
                                                alt={COMPANY_INFO.name}
                                                className="h-8 w-auto object-contain"
                                            />
                                        </div>
                                    </Link>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="w-10 h-10 flex items-center justify-center text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Navigation Links */}
                                <div className="flex flex-col space-y-1 items-start justify-center flex-1">
                                    {mobileLinks.map((link, i) => (
                                        <Motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 * (i + 1), ease: "easeOut" }}
                                            className="w-full relative group"
                                        >
                                            <Link
                                                to={link.path}
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center gap-4 py-3"
                                            >
                                                <span className={`text-[10px] sm:text-xs font-black tracking-widest transition-colors duration-300 w-6 ${isActive(link.path) ? 'text-brand-red' : 'text-white/20 group-hover:text-brand-red'}`}>
                                                    {i + 1}
                                                </span>
                                                <span className={`text-2xl sm:text-3xl font-black tracking-tighter transition-all duration-300 ${isActive(link.path) ? 'text-white scale-105 origin-left' : 'text-white/60 hover:text-white hover:translate-x-2'}`}>
                                                    {link.name}
                                                </span>
                                                {isActive(link.path) && (
                                                    <Motion.div
                                                        layoutId="active-line-mobile"
                                                        className="absolute left-10 -bottom-1 w-8 h-1 bg-brand-red rounded-full"
                                                    />
                                                )}
                                            </Link>
                                        </Motion.div>
                                    ))}
                                </div>

                                {/* Mobile Menu Footer */}
                                <div className="mt-8 pt-8 border-t border-white/5">
                                    <div className="flex flex-col gap-4">
                                        <div className="space-y-0.5">
                                            <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">Quick Connect</p>
                                            <a href={`mailto:${COMPANY_INFO.email}`} className="text-white text-sm font-bold hover:text-brand-red transition-colors">{COMPANY_INFO.email}</a>
                                        </div>
                                        <div className="flex gap-3">
                                            <a href={`tel:${COMPANY_INFO.phone}`} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-brand-red hover:text-white transition-all duration-300">
                                                <Phone size={16} />
                                            </a>
                                            <a href={`mailto:${COMPANY_INFO.email}`} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-brand-red hover:text-white transition-all duration-300">
                                                <Mail size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
