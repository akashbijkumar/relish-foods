import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Waves } from 'lucide-react';
import { COMPANY_INFO } from '../constants/companyInfo';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 border-t border-white/5 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

                    {/* Brand Info */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-8 group">
                            <img
                                src={`${import.meta.env.BASE_URL}images/logo.png`}
                                alt={COMPANY_INFO.name}
                                className="h-16 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8 font-medium">
                            A legacy of five decades in bringing the ocean's finest bounty to the world stage. Committed to safety, quality, and absolute freshness.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-black text-white mb-8 uppercase tracking-widest text-xs">Navigation</h3>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Products', 'Process', 'Brands', 'Certifications', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-slate-400 hover:text-brand-red text-lg font-bold transition-colors flex items-center gap-2 group"
                                    >
                                        <div className="w-0 h-0.5 bg-brand-red group-hover:w-4 transition-all" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-xl font-black text-white mb-8 uppercase tracking-widest text-xs">Reach Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 group/map">
                                <a
                                    href={COMPANY_INFO.socials.maps}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-start gap-4 group/map"
                                >
                                    <MapPin className="text-brand-red w-6 h-6 shrink-0 mt-1 group-hover/map:scale-110 transition-transform" />
                                    <span className="text-slate-400 text-lg font-medium leading-relaxed hover:text-white transition-colors">
                                        {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, <br />
                                        {COMPANY_INFO.address.state}, {COMPANY_INFO.address.country} - {COMPANY_INFO.address.zip}
                                    </span>
                                </a>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="text-brand-red w-6 h-6 shrink-0" />
                                <a href={`tel:${COMPANY_INFO.phone}`} className="text-slate-400 text-lg font-medium hover:text-white transition-colors">{COMPANY_INFO.phone}</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="text-brand-red w-6 h-6 shrink-0" />
                                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-400 text-lg font-medium hover:text-white transition-colors">{COMPANY_INFO.email}</a>
                            </li>
                        </ul>
                    </div>

                    {/* Quality Badge */}
                    <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mb-6">
                            <Waves className="w-10 h-10 text-brand-red animate-pulse" />
                        </div>
                        <h4 className="text-white font-black text-xl mb-2 tracking-tight">HACCP Approved</h4>
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Global Food Safety Standard</p>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-slate-500 font-bold text-center md:text-left">
                        &copy; {currentYear} {COMPANY_INFO.name}. All Rights Reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        <Link to="/privacy" className="text-slate-500 hover:text-white transition-all text-xs font-black uppercase tracking-[0.2em] hover:translate-x-1">Privacy Policy</Link>
                        <Link to="/terms" className="text-slate-500 hover:text-white transition-all text-xs font-black uppercase tracking-[0.2em] hover:translate-x-1">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
