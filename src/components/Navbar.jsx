import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion as Motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const { scrollY } = useScroll();

    // Smooth scroll transformations
    const backgroundColor = useTransform(
        scrollY,
        [0, 50],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]
    );

    const backdropFilter = useTransform(
        scrollY,
        [0, 50],
        ["blur(0px)", "blur(12px)"]
    );

    const navPadding = useTransform(
        scrollY,
        [0, 50],
        ["24px", "12px"]
    );

    const logoScale = useTransform(
        scrollY,
        [0, 50],
        [1, 0.85]
    );

    const shadow = useTransform(
        scrollY,
        [0, 50],
        ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 20px rgba(0,0,0,0.05)"]
    );

    useMotionValueEvent(scrollY, "change", (latest) => {
        const scrolled = latest > 20;
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

    const NavLink = ({ link }) => {
        const active = isActive(link.path);

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
                        <div className="hidden lg:flex items-center space-x-2 flex-1 justify-end pr-32">
                            {leftLinks.map((link) => (
                                <NavLink key={link.name} link={link} />
                            ))}
                        </div>

                        {/* Center Logo Area */}
                        <div className="flex-shrink-0 relative z-10 mx-auto">
                            <Link to="/">
                                <Motion.div
                                    style={{ scale: logoScale }}
                                    className={`relative flex items-center justify-center rounded-full transition-all duration-500 ${isScrolled ? 'bg-transparent p-2' : 'bg-white p-4 shadow-lg'
                                        }`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <img
                                        src={`${import.meta.env.BASE_URL}images/logo.png`}
                                        alt="Relish Foods"
                                        className={`${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'} w-auto object-contain transition-all duration-500`}
                                    />
                                </Motion.div>
                            </Link>
                        </div>

                        {/* Right Navigation */}
                        <div className="hidden lg:flex items-center space-x-2 flex-1 justify-start pl-32">
                            {rightLinks.map((link) => (
                                <NavLink key={link.name} link={link} />
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
                        {/* Backdrop */}
                        <Motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[90] lg:hidden"
                        />

                        {/* Side Menu */}
                        <Motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="fixed top-0 left-0 bottom-0 w-[80%] sm:w-[75%] max-w-[400px] bg-white z-[100] lg:hidden shadow-2xl overflow-hidden"
                        >
                            {/* Dynamic Animated Background */}
                            <div className="absolute inset-0 z-0">
                                <Motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 90, 180, 270, 360],
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] flex flex-wrap"
                                >
                                    <div className="w-1/2 h-1/2 bg-[#4285F4]/15 blur-[80px] rounded-full" />
                                    <div className="w-1/2 h-1/2 bg-[#EA4335]/15 blur-[80px] rounded-full" />
                                    <div className="w-1/2 h-1/2 bg-[#FBBC05]/15 blur-[80px] rounded-full" />
                                    <div className="w-1/2 h-1/2 bg-[#34A853]/15 blur-[80px] rounded-full" />
                                </Motion.div>
                            </div>

                            <div className="relative z-10 flex flex-col h-full p-6 sm:p-8">
                                {/* Mobile Menu Header */}
                                <div className="flex justify-between items-start mb-12">
                                    <Link to="/" onClick={() => setIsOpen(false)}>
                                        <div className="bg-white p-2 rounded-xl shadow-lg border border-slate-100">
                                            <img
                                                src={`${import.meta.env.BASE_URL}images/logo.png`}
                                                alt="Relish Foods"
                                                className="h-8 w-auto object-contain"
                                            />
                                        </div>
                                    </Link>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="w-10 h-10 flex items-center justify-center text-slate-900 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Navigation Links */}
                                <div className="flex flex-col space-y-2 items-start justify-center flex-1">
                                    {mobileLinks.map((link, i) => (
                                        <Motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + (i * 0.08), ease: [0.22, 1, 0.36, 1] }}
                                            className="w-full relative group"
                                        >
                                            <Link
                                                to={link.path}
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center gap-4 py-3"
                                            >
                                                <span className={`text-[10px] sm:text-xs font-black tracking-widest transition-colors duration-300 w-6 ${isActive(link.path) ? 'text-brand-red' : 'text-slate-300 group-hover:text-brand-red'}`}>
                                                    {i + 1}
                                                </span>
                                                <span className={`text-2xl sm:text-3xl font-black tracking-tighter transition-all duration-300 ${isActive(link.path) ? 'text-slate-900 scale-105 origin-left' : 'text-slate-500 hover:text-slate-900 hover:translate-x-2'}`}>
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
                                <div className="mt-8 pt-8 border-t border-slate-100">
                                    <div className="flex flex-col gap-4">
                                        <div className="space-y-0.5">
                                            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Quick Connect</p>
                                            <a href="mailto:info@relishfoods.in" className="text-slate-900 text-sm font-bold hover:text-brand-red transition-colors">info@relishfoods.in</a>
                                        </div>
                                        <div className="flex gap-3">
                                            <a href="tel:+914772267333" className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 hover:bg-brand-red hover:text-white transition-all duration-300">
                                                <Phone size={16} />
                                            </a>
                                            <a href="mailto:info@relishfoods.in" className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 hover:bg-brand-red hover:text-white transition-all duration-300">
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
