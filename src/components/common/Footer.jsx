import React, { useState, useEffect } from 'react';
import {
    Zap,
    Mail,
    MapPin,
    ArrowUp,
    ExternalLink,
    Heart,
    Send,
    CheckCircle
} from 'lucide-react';
import { SiDiscord, SiLinkedin, SiGmail, SiGithub } from 'react-icons/si'; 
import logo from '/DS_CLUB_LOGO.jpeg';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const quickLinks = [
        'About Us', 'Community', 'Research', 'Contact', 'FAQ'
    ];

    const resources = [
        'Documentation', 'Tutorials', 'Blog', 'Case Studies', 'Whitepapers', 'Events'
    ];

    const socialLinks = [
        { icon: SiGithub, href: 'https://github.com/CLUSTER-DS-Club/', name: 'GitHub', color: 'hover:text-gray-300' },
        { icon: SiLinkedin, href: 'https://www.linkedin.com/company/cluster-vips', name: 'LinkedIn', color: 'hover:text-blue-500' },
        { icon: SiDiscord, href: 'https://discord.gg/6QN83D89vx', name: 'Discord', color: 'hover:text-indigo-400' },
        { icon: SiGmail, href: 'mailto:dsclub.cluster@vips.edu', name: 'GMail', color: 'hover:text-indigo-400' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubscribe = () => {
        if (email) {
            setSubscribed(true);
            setTimeout(() => {
                setSubscribed(false);
                setEmail('');
            }, 3000);
        }
    };

    return (
        <footer className="relative bg-slate-900 border-t border-slate-700/50 overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/3 rounded-full blur-2xl animate-pulse delay-500"></div>

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800/90"></div>
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Brand Section - Takes more space */}
                        <div className="lg:col-span-5">
                            {/* Logo and Brand */}
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="relative">
                                    {/* Circular background container for the logo */}
                                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/25 transform rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                                        <img
                                            src={logo}
                                            alt="Logo"
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>

                                    {/* Animated badge or notification dot */}
                                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce delay-1000 shadow-md shadow-yellow-400/30"></div>
                                </div>

                                {/* Text content */}
                                <div>
                                    <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                                        CLUSTER
                                    </h3>
                                    <p className="text-slate-400 font-medium tracking-wide">Data Excellence Platform</p>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                                <span className="font-semibold text-cyan-400">Collaborative Learning Using Statistical Trends & Exploratory Research.</span>
                                <br />
                                Empowering the next generation of data scientists and researchers through innovative collaboration.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 text-slate-300 hover:text-cyan-400 transition-colors duration-300 group cursor-pointer">
                                    <div className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors duration-300">
                                        <Mail className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <span className="font-medium">dsclub.cluster@vips.edu</span>
                                </div>
                                <div className="flex items-center space-x-4 text-slate-300 hover:text-cyan-400 transition-colors duration-300 group cursor-pointer">
                                    <div className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors duration-300">
                                        <MapPin className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <span className="font-medium">Vivekananda Institute of Professional Studies (VIPS), AU Block (Outer Ring Road), Pitampura, Delhi - 110034</span>
                                </div>
                            </div>
                        </div>

                        {/* Links Section */}
                        <div className="lg:col-span-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                                {/* Quick Links */}
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-6 relative">
                                        Quick Links
                                        <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                                    </h4>
                                    <ul className="space-y-3">
                                        {quickLinks.map((link, index) => (
                                            <li key={index}>
                                                <Link
                                                    to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}  // handles links like "About Us" → "/about-us"
                                                    className="text-slate-400 hover:text-cyan-400 transition-all duration-300 font-medium flex items-center space-x-3 group py-1"
                                                >
                                                    <div className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-cyan-400 transition-colors duration-300"></div>
                                                    <span>{link}</span>
                                                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Resources */}
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-6 relative">
                                        Resources
                                        <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                                    </h4>
                                    <ul className="space-y-3">
                                        {resources.map((resource, index) => (
                                            <li key={index}>
                                                <a
                                                    href="#"
                                                    className="text-slate-400 hover:text-cyan-400 transition-all duration-300 font-medium flex items-center space-x-3 group py-1"
                                                >
                                                    <div className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-cyan-400 transition-colors duration-300"></div>
                                                    <span>{resource}</span>
                                                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Section */}
                        <div className="lg:col-span-3">
                            <div className="bg-gradient-to-br from-slate-800/60 to-slate-800/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
                                <h4 className="text-xl font-bold text-white mb-3">Stay in the Loop</h4>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    Get the latest updates on research breakthroughs, community events, and collaboration opportunities.
                                </p>

                                <div className="space-y-4">
                                    <div className="relative">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-slate-700/70 transition-all duration-300 pr-12"
                                        />
                                        <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    </div>

                                    <button
                                        onClick={handleSubscribe}
                                        disabled={subscribed}
                                        className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 disabled:opacity-70 disabled:scale-100 flex items-center justify-center space-x-2"
                                    >
                                        {subscribed ? (
                                            <>
                                                <CheckCircle className="w-5 h-5" />
                                                <span>Subscribed!</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                <span>Subscribe</span>
                                            </>
                                        )}
                                    </button>
                                </div>

                                <p className="text-xs text-slate-500 mt-4 text-center">
                                    No spam, unsubscribe anytime
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Links & Stats */}
                <div className="py-8 border-t border-slate-800/50">
                    <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
                        {/* Social Links */}
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
                            <span className="text-slate-400 font-medium">Connect with us:</span>
                            <div className="flex items-center space-x-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className={`p-3 text-slate-400 ${social.color} bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-all duration-300 group hover:scale-110 hover:shadow-lg`}
                                        title={social.name}
                                    >
                                        <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Community Stats */}
                        <div className="flex items-center space-x-8">
                            <div className="text-center group cursor-pointer">
                                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                    100+
                                </div>
                                <div className="text-slate-400 text-sm font-medium">Active Members</div>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                    50+
                                </div>
                                <div className="text-slate-400 text-sm font-medium">Research Projects</div>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                    20+
                                </div>
                                <div className="text-slate-400 text-sm font-medium">Publications</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="py-6 border-t border-slate-800/50">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-2 text-slate-400">
                            <span>© 2024 CLUSTER Community. Made with</span>
                            <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse" />
                            <span>for data enthusiasts worldwide</span>
                        </div>

                        <div className="flex items-center space-x-8">
                            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 font-medium">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 font-medium">
                                Terms of Service
                            </a>
                            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 font-medium">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-300 z-50 group"
                >
                    <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </button>
            )}
        </footer>
    );
};

export default Footer;