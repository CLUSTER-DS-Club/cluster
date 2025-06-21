import React, { useState, useEffect } from 'react';
import { Target, Eye, Zap, Users, Brain, Globe, TrendingUp, Award, Lightbulb } from 'lucide-react';

const About = () => {
    const [activeSection, setActiveSection] = useState('mission');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const sections = {
        mission: {
            icon: Target,
            title: "Our Mission",
            content: "To democratize data science education and research by fostering collaborative learning environments where statistical trends meet exploratory innovation. We empower individuals across all domains to harness the power of data and excel beyond traditional AI and LLM boundaries, creating a global community of data-driven innovators.",
            gradient: "from-cyan-400 to-blue-500",
            bgGradient: "from-cyan-500/10 to-blue-500/10",
            borderColor: "border-cyan-400/30",
        },
        vision: {
            icon: Eye,
            title: "Our Vision",
            content: "To become the global epicenter of data science excellence, where diverse minds converge to push the boundaries of statistical analysis, machine learning, and data-driven decision making. We envision a future where every field is transformed by intelligent data insights and collaborative research breakthroughs.",
            gradient: "from-blue-400 to-purple-500",
            bgGradient: "from-blue-500/10 to-purple-500/10",
            borderColor: "border-blue-400/30",
        },
        values: {
            icon: Zap,
            title: "Our Values",
            content: "Innovation through collaboration, excellence in education, integrity in research, and inclusivity in community building. We believe that the best breakthroughs happen when diverse perspectives unite around shared passion for data. Our commitment to ethical AI and responsible data science drives everything we do.",
            gradient: "from-purple-400 to-pink-500",
            bgGradient: "from-purple-500/10 to-pink-500/10",
            borderColor: "border-purple-400/30",
        }
    };

    const stats = [
        {
            icon: Users,
            number: "1,200+",
            label: "Active Members",
            color: "text-cyan-400",
            bgColor: "from-cyan-500/10 to-cyan-600/10",
            borderColor: "border-cyan-400/20"
        },
        {
            icon: Brain,
            number: "150+",
            label: "Research Projects",
            color: "text-blue-400",
            bgColor: "from-blue-500/10 to-blue-600/10",
            borderColor: "border-blue-400/20"
        },
        {
            icon: Globe,
            number: "45+",
            label: "Data Domains",
            color: "text-purple-400",
            bgColor: "from-purple-500/10 to-purple-600/10",
            borderColor: "border-purple-400/20"
        },
        {
            icon: TrendingUp,
            number: "98%",
            label: "Success Rate",
            color: "text-green-400",
            bgColor: "from-green-500/10 to-green-600/10",
            borderColor: "border-green-400/20"
        },
        {
            icon: Award,
            number: "25+",
            label: "Awards Won",
            color: "text-yellow-400",
            bgColor: "from-yellow-500/10 to-yellow-600/10",
            borderColor: "border-yellow-400/20"
        },
        {
            icon: Lightbulb,
            number: "500+",
            label: "Innovations",
            color: "text-pink-400",
            bgColor: "from-pink-500/10 to-pink-600/10",
            borderColor: "border-pink-400/20"
        }
    ];

    const principles = [
        {
            title: "Collaborative Excellence",
            description: "We believe the best solutions emerge from diverse minds working together",
            icon: Users,
            color: "text-cyan-400"
        },
        {
            title: "Data-Driven Innovation",
            description: "Every decision backed by evidence, every breakthrough powered by data",
            icon: Brain,
            color: "text-blue-400"
        },
        {
            title: "Global Impact",
            description: "Transforming industries and communities through accessible data science",
            icon: Globe,
            color: "text-purple-400"
        }
    ];

    return (
        <div className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden min-h-screen">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-2xl animate-pulse delay-500"></div>
                <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse delay-1500"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
                        <Target className="w-5 h-5 text-cyan-400" />
                        <span className="text-cyan-300 font-medium">About CLUSTER</span>
                    </div>
                    <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                        Collaborative Learning Using
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block">
                            Statistical Trends & Excellence
                        </span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                        Empowering the next generation of data scientists through innovative research,
                        collaborative learning, and breakthrough discoveries that shape the future.
                    </p>
                </div>

                {/* Navigation Tabs */}
                <div className={`flex justify-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex flex-row gap-4 bg-gradient-to-r from-slate-800/50 to-blue-900/30 backdrop-blur-xl rounded-2xl p-2 border border-white/10">
                        {Object.keys(sections).map((key) => {
                            const section = sections[key];
                            const IconComponent = section.icon;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveSection(key)}
                                    className={`flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 capitalize ${activeSection === key
                                            ? `bg-gradient-to-r ${section.gradient} text-white shadow-xl`
                                            : 'text-slate-300 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    <IconComponent className="w-5 h-5" />
                                    {key}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Main Section Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Text Content */}
                    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className={`bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl rounded-3xl p-10 border ${sections[activeSection].borderColor} hover:border-opacity-60 transition-all duration-500 relative overflow-hidden`}>
                            <div className={`absolute inset-0 bg-gradient-to-br ${sections[activeSection].bgGradient} opacity-50`}></div>
                            <div className="relative z-10">
                                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mb-6">
                                    <div className={`w-20 h-20 bg-gradient-to-r ${sections[activeSection].gradient} rounded-3xl flex items-center justify-center shadow-xl flex-shrink-0`}>
                                        {React.createElement(sections[activeSection].icon, {
                                            className: `w-10 h-10 text-white`
                                        })}
                                    </div>
                                    <h3 className={`text-3xl font-bold bg-gradient-to-r ${sections[activeSection].gradient} bg-clip-text text-transparent text-center lg:text-left`}>
                                        {sections[activeSection].title}
                                    </h3>
                                </div>
                                <p className="text-slate-300 text-lg leading-relaxed font-medium">
                                    {sections[activeSection].content}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Visual Element: Stats */}
                    <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="bg-gradient-to-br from-slate-800/40 to-blue-900/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                            <div className="relative z-10">
                                <h4 className="text-xl font-bold text-white mb-8 text-center">Our Impact in Numbers</h4>
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="text-center group">
                                            <div className={`bg-gradient-to-br ${stat.bgColor} backdrop-blur-lg rounded-2xl p-6 border ${stat.borderColor} hover:border-opacity-60 transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden`}>
                                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                <div className="relative z-10">
                                                    {React.createElement(stat.icon, {
                                                        className: `w-10 h-10 mx-auto mb-4 ${stat.color}`
                                                    })}
                                                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                                                    <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Floating Animation Elements */}
                                <div className="absolute top-6 right-6 w-4 h-4 bg-cyan-400/60 rounded-full animate-ping"></div>
                                <div className="absolute bottom-12 left-12 w-3 h-3 bg-blue-400/60 rounded-full animate-ping delay-1000"></div>
                                <div className="absolute top-1/2 right-12 w-5 h-5 border-2 border-purple-400/60 rounded-full animate-spin"></div>
                                <div className="absolute top-20 left-6 w-2 h-2 bg-pink-400/60 rounded-full animate-pulse delay-500"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Principles Section */}
                <div className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-white mb-4">Our Core Principles</h3>
                        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                            The fundamental beliefs that guide our community and drive our mission forward
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {principles.map((principle, index) => (
                            <div key={index} className="bg-gradient-to-br from-slate-800/40 to-blue-900/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                                    {React.createElement(principle.icon, {
                                        className: `w-8 h-8 text-white`
                                    })}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-4">{principle.title}</h4>
                                <p className="text-slate-300 leading-relaxed">{principle.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;