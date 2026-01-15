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
                                className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${isScrolled ? 'bg-transparent' : 'bg-white p-4 shadow-lg'
                                    }`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}images/logo.png`}
                                    alt="Relish Foods"
                                    className="h-16 w-auto object-contain"
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
                    <div className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'
                                }`}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <Motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 bg-white z-40 overflow-y-auto lg:hidden"
                    >
                        <div className="flex flex-col min-h-screen relative p-6">
                            {/* Decorative Background Mesh */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red rounded-full filter blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
                            </div>

                            <div className="flex justify-end mb-8 relative z-10">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-slate-900 rounded-full hover:bg-slate-100 transition-colors"
                                >
                                    <X size={32} />
                                </button>
                            </div>

                            <div className="flex flex-col space-y-6 items-center justify-center flex-1 relative z-10">
                                {mobileLinks.map((link, i) => (
                                    <Motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + (i * 0.05), type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-4xl font-black uppercase tracking-tight transition-all duration-300 hover:scale-110 block ${isActive(link.path) ? 'text-brand-red' : 'text-slate-900 hover:text-brand-red'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </Motion.div>
                                ))}
                            </div>

                            <div className="mt-auto py-10 text-center relative z-10">
                                <p className="text-slate-400 text-sm uppercase tracking-widest mb-6">Get in touch</p>
                                <div className="flex justify-center gap-6">
                                    <a href="tel:+914772267333" className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                                        <Phone size={24} />
                                    </a>
                                    <a href="mailto:info@relishfoods.in" className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                                        <Mail size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Motion.div>
                )}
            </AnimatePresence>
        </Motion.nav>
    );
};

export default Navbar;
