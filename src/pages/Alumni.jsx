import React, { useState, useEffect } from 'react';
import { GraduationCap, Users, Award, TrendingUp } from 'lucide-react';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel.jsx';

const Alumni = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    // Alumni stats
    const stats = [
        { icon: Users, value: "500+", label: "Alumni Worldwide", trend: "+15%" },
        { icon: Award, value: "50+", label: "Top Companies", trend: "+25%" },
        { icon: TrendingUp, value: "25+", label: "Startups Founded", trend: "+30%" },
        { icon: GraduationCap, value: "100+", label: "Research Papers", trend: "+20%" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
            {/* Background Elements - Consistent with main page */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            {/* Hero Section */}
            <section className="relative z-10 pt-24 pb-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
                            <GraduationCap className="w-5 h-5 text-cyan-400" />
                            <span className="text-cyan-300 font-medium">Our Success Stories</span>
                        </div>
                        
                        <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Meet Our
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block">
                                Alumni
                            </span>
                        </h1>
                        
                        <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
                            Our alumni are innovators, leaders, and changemakers in the tech world. 
                            They're building the future at top companies, leading groundbreaking research, 
                            and creating solutions that impact millions of lives.
                        </p>

                        {/* Stats Grid - Consistent with main page design */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative z-10 text-center">
                                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/25">
                                            <stat.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                                        <div className="text-slate-300 text-sm font-medium mb-1">{stat.label}</div>
                                        <div className="text-green-400 text-xs">{stat.trend}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section - Reusing existing component */}
            <section className="relative z-10 py-16">
                <div className="max-w-7xl mx-auto px-4 mb-12">
                    <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Success Stories from Our
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Community</span>
                        </h2>
                        <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
                            Hear directly from our graduates about their journey and how CLUSTER shaped their careers in data science and technology.
                        </p>
                    </div>
                </div>
                
                {/* Reusing existing TestimonialsCarousel component */}
                <TestimonialsCarousel />
            </section>

            {/* Call to Action Section - Consistent with main page style */}
            <section className="relative z-10 py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className={`bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl rounded-3xl p-12 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 text-center relative overflow-hidden transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
                                <Users className="w-5 h-5 text-cyan-400" />
                                <span className="text-cyan-300 font-medium">Join Our Alumni Network</span>
                            </div>
                            
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Are You a
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> CLUSTER Alumnus?</span>
                            </h2>
                            
                            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                                We'd love to feature your success story and inspire current students. 
                                Share your journey, achievements, and how CLUSTER shaped your career in data science and technology.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105">
                                    Submit Your Story
                                </button>
                                <button className="px-8 py-4 border border-cyan-400/30 text-white font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm">
                                    Contact Alumni Team
                                </button>
                            </div>

                            <p className="text-sm text-slate-500 mt-6">
                                Join our alumni network and stay connected with the CLUSTER community
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Alumni;