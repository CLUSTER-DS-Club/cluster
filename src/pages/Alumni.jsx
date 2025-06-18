import React, { useState, useEffect } from 'react';
import {
    Users,
    Quote,
    Calendar,
    MapPin,
    ExternalLink,
    Mail,
    Linkedin,
    Github,
    ChevronLeft,
    ChevronRight,
    Filter,
    Star,
    Award,
    Briefcase,
    GraduationCap,
    Send,
    CheckCircle
} from 'lucide-react';
import { SiDiscord, SiLinkedin, SiGmail, SiGithub } from 'react-icons/si';

const Alumni = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [filteredAlumni, setFilteredAlumni] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    // Alumni data structure
    const alumniData = [
        {
            id: 1,
            name: "Sarah Chen",
            graduationYear: "2022",
            role: "Senior Data Scientist",
            company: "Google",
            image: "/api/placeholder/300/300",
            quote: "CLUSTER gave me the foundation to excel in machine learning and data science. The collaborative environment prepared me for real-world challenges.",
            batch: "2022",
            category: "data-science",
            linkedin: "https://linkedin.com/in/sarahchen",
            github: "https://github.com/sarahchen",
            achievements: ["Published 5 research papers", "Led ML team at Google", "Speaker at NeurIPS 2023"]
        },
        {
            id: 2,
            name: "Michael Rodriguez",
            graduationYear: "2021",
            role: "AI Research Engineer",
            company: "OpenAI",
            image: "/api/placeholder/300/300",
            quote: "The research opportunities at CLUSTER were incredible. I'm now working on cutting-edge AI systems that impact millions of users.",
            batch: "2021",
            category: "ai-research",
            linkedin: "https://linkedin.com/in/michaelrodriguez",
            github: "https://github.com/mrodriguez",
            achievements: ["Contributed to GPT-4", "10+ patents in AI", "Forbes 30 Under 30"]
        },
        {
            id: 3,
            name: "Priya Sharma",
            graduationYear: "2023",
            role: "Product Manager",
            company: "Microsoft",
            image: "/api/placeholder/300/300",
            quote: "CLUSTER taught me to think analytically and work collaboratively. These skills are invaluable in product management.",
            batch: "2023",
            category: "product",
            linkedin: "https://linkedin.com/in/priyasharma",
            achievements: ["Launched Azure ML features", "Led cross-functional teams", "MBA from Stanford"]
        },
        {
            id: 4,
            name: "David Kim",
            graduationYear: "2020",
            role: "Startup Founder & CEO",
            company: "DataFlow AI",
            image: "/api/placeholder/300/300",
            quote: "The entrepreneurial spirit at CLUSTER inspired me to start my own company. We've now raised $10M Series A!",
            batch: "2020",
            category: "entrepreneur",
            linkedin: "https://linkedin.com/in/davidkim",
            github: "https://github.com/dkim",
            achievements: ["Raised $10M Series A", "50+ employees", "TechCrunch Disrupt Winner"]
        },
        {
            id: 5,
            name: "Emily Johnson",
            graduationYear: "2022",
            role: "Machine Learning Engineer",
            company: "Tesla",
            image: "/api/placeholder/300/300",
            quote: "Working on autonomous driving systems was my dream. CLUSTER's AI curriculum made it possible.",
            batch: "2022",
            category: "ai-research",
            linkedin: "https://linkedin.com/in/emilyjohnson",
            github: "https://github.com/ejohnson",
            achievements: ["Autopilot team lead", "15+ ML patents", "IEEE Fellow"]
        },
        {
            id: 6,
            name: "Alex Thompson",
            graduationYear: "2021",
            role: "Data Engineering Lead",
            company: "Netflix",
            image: "/api/placeholder/300/300",
            quote: "The big data projects at CLUSTER prepared me for Netflix's scale. Now I help millions discover great content.",
            batch: "2021",
            category: "data-science",
            linkedin: "https://linkedin.com/in/alexthompson",
            github: "https://github.com/athompson",
            achievements: ["Built recommendation engine", "Scaled to 200M+ users", "Open source contributor"]
        }
    ];

    // Testimonials using the same design as main website
    const testimonials = [
        {
            name: 'Sarah Chen',
            text: 'CLUSTER helped me connect with amazing data scientists and opened doors to collaborations I never thought possible! The research hub is a game changer.',
            role: 'Senior Data Scientist at Google',
            rating: 5,
            avatar: 'SC'
        },
        {
            name: 'Michael Rodriguez',
            text: 'The research opportunities at CLUSTER were incredible. Finding the right team members has never been easier, and now I work on cutting-edge AI.',
            role: 'AI Research Engineer at OpenAI',
            rating: 5,
            avatar: 'MR'
        },
        {
            name: 'David Kim',
            text: 'I found my co-founder through this platform! The networking features are incredibly powerful and helped me build a successful startup.',
            role: 'Founder & CEO at DataFlow AI',
            rating: 5,
            avatar: 'DK'
        },
        {
            name: 'Priya Sharma',
            text: 'The networking possibilities are endless! This platform transformed how I approach professional connections in product management.',
            role: 'Product Manager at Microsoft',
            rating: 5,
            avatar: 'PS'
        },
        {
            name: 'Emily Johnson',
            text: 'CLUSTER\'s matching algorithm is spot-on. I\'ve built meaningful relationships that advanced my career in autonomous systems.',
            role: 'ML Engineer at Tesla',
            rating: 5,
            avatar: 'EJ'
        },
        {
            name: 'Alex Thompson',
            text: 'The quality of connections on this platform is unmatched. Every interaction has been valuable for my data engineering career.',
            role: 'Data Engineering Lead at Netflix',
            rating: 5,
            avatar: 'AT'
        }
    ];

    // Filter categories
    const filterCategories = [
        { id: 'all', label: 'All Alumni', count: alumniData.length },
        { id: 'data-science', label: 'Data Science', count: alumniData.filter(a => a.category === 'data-science').length },
        { id: 'ai-research', label: 'AI Research', count: alumniData.filter(a => a.category === 'ai-research').length },
        { id: 'product', label: 'Product', count: alumniData.filter(a => a.category === 'product').length },
        { id: 'entrepreneur', label: 'Entrepreneur', count: alumniData.filter(a => a.category === 'entrepreneur').length }
    ];

    // Gallery/Event images
    const galleryImages = [
        {
            id: 1,
            src: "/api/placeholder/400/300",
            title: "Alumni Meetup 2023",
            description: "Annual networking event with 100+ alumni"
        },
        {
            id: 2,
            src: "/api/placeholder/400/300",
            title: "Tech Talk Series",
            description: "Alumni sharing industry insights"
        },
        {
            id: 3,
            src: "/api/placeholder/400/300",
            title: "Mentorship Program",
            description: "Alumni mentoring current students"
        },
        {
            id: 4,
            src: "/api/placeholder/400/300",
            title: "Innovation Showcase",
            description: "Alumni presenting their latest projects"
        },
        {
            id: 5,
            src: "/api/placeholder/400/300",
            title: "Career Fair",
            description: "Alumni companies recruiting students"
        },
        {
            id: 6,
            src: "/api/placeholder/400/300",
            title: "Research Symposium",
            description: "Alumni presenting research breakthroughs"
        }
    ];

    // Filter alumni based on selected category
    useEffect(() => {
        if (selectedFilter === 'all') {
            setFilteredAlumni(alumniData);
        } else {
            setFilteredAlumni(alumniData.filter(alumni => alumni.category === selectedFilter));
        }
    }, [selectedFilter]);

    // Testimonial carousel logic (same as main website)
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev >= testimonials.length - 3 ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev >= testimonials.length - 3 ? 0 : prev + 1
        );
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev <= 0 ? testimonials.length - 3 : prev - 1
        );
        setIsAutoPlaying(false);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                size={16}
                className={`${i < rating
                        ? 'text-cyan-400 fill-cyan-400'
                        : 'text-slate-600'
                    }`}
            />
        ));
    };

    const handleSubmitStory = () => {
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
            {/* Background Elements */}
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
                        
                        <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
                            Our alumni are innovators, leaders, and changemakers in the tech world. 
                            They're building the future at top companies, leading groundbreaking research, 
                            and creating solutions that impact millions of lives.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                                <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                                <div className="text-slate-300 text-sm">Alumni Worldwide</div>
                            </div>
                            <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                                <div className="text-slate-300 text-sm">Top Companies</div>
                            </div>
                            <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                                <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
                                <div className="text-slate-300 text-sm">Startups Founded</div>
                            </div>
                            <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                                <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
                                <div className="text-slate-300 text-sm">Research Papers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alumni Profiles Section */}
            <section className="relative z-10 py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Filter Section */}
                    <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                            <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">
                                Our <span className="text-cyan-400">Success Stories</span>
                            </h2>
                            <div className="flex items-center gap-2">
                                <Filter className="w-5 h-5 text-slate-400" />
                                <span className="text-slate-400 text-sm">Filter by category</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            {filterCategories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedFilter(category.id)}
                                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                        selectedFilter === category.id
                                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                                            : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600/50'
                                    }`}
                                >
                                    {category.label}
                                    <span className="ml-2 text-xs opacity-75">({category.count})</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Alumni Grid */}
                    <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {filteredAlumni.map((alumni, index) => (
                            <div
                                key={alumni.id}
                                className="group bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    {/* Profile Image */}
                                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold mb-6 shadow-xl shadow-cyan-500/20 group-hover:shadow-cyan-500/30 transition-all duration-300">
                                        {alumni.name.split(' ').map(n => n[0]).join('')}
                                    </div>

                                    {/* Alumni Info */}
                                    <div className="mb-6">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                                            {alumni.name}
                                        </h3>
                                        <p className="text-cyan-400 font-semibold mb-1">{alumni.role}</p>
                                        <p className="text-slate-400 text-sm font-medium mb-2">{alumni.company}</p>
                                        <div className="flex items-center text-slate-500 text-sm">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            Class of {alumni.graduationYear}
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <div className="mb-6">
                                        <Quote className="w-6 h-6 text-cyan-400/60 mb-3" />
                                        <p className="text-slate-300 text-sm leading-relaxed italic">
                                            "{alumni.quote}"
                                        </p>
                                    </div>

                                    {/* Achievements */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                                            <Award className="w-4 h-4 mr-2 text-cyan-400" />
                                            Key Achievements
                                        </h4>
                                        <div className="space-y-2">
                                            {alumni.achievements.slice(0, 2).map((achievement, idx) => (
                                                <div key={idx} className="flex items-center text-slate-300 text-xs">
                                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                                                    {achievement}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex justify-center space-x-3">
                                        {alumni.linkedin && (
                                            <a href={alumni.linkedin} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-blue-500/20 hover:scale-110 transition-all duration-300 border border-white/10">
                                                <Linkedin className="w-5 h-5 text-slate-300" />
                                            </a>
                                        )}
                                        {alumni.github && (
                                            <a href={alumni.github} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-gray-500/20 hover:scale-110 transition-all duration-300 border border-white/10">
                                                <Github className="w-5 h-5 text-slate-300" />
                                            </a>
                                        )}
                                        <button className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300 border border-white/10">
                                            <ExternalLink className="w-5 h-5 text-slate-300" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section - Using Main Website Design */}
            <section className="py-20 bg-slate-800 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-full mb-6">
                            <Quote size={20} className="text-cyan-400" />
                            <span className="text-slate-300 text-sm font-medium">What our alumni say</span>
                        </div>
                        <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                            Trusted by
                            <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text">
                                {' '}innovators
                            </span>
                        </h2>
                        <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                            Join thousands of professionals who've transformed their careers with CLUSTER
                        </p>
                    </div>

                    {/* Carousel */}
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-700 ease-out"
                                style={{
                                    transform: `translateX(-${currentIndex * (100 / 3)}%)`
                                }}
                            >
                                {testimonials.map((testimonial, idx) => (
                                    <div
                                        key={idx}
                                        className="flex-shrink-0 px-4"
                                        style={{ width: `${100 / 3}%` }}
                                    >
                                        <div className="group bg-slate-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/50 h-full flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:bg-slate-900/90 hover:border-cyan-500/30 hover:shadow-cyan-500/10 hover:shadow-2xl">
                                            {/* Quote icon */}
                                            <div className="mb-6">
                                                <Quote size={32} className="text-cyan-400/60 group-hover:text-cyan-400 transition-colors duration-300" />
                                            </div>

                                            {/* Testimonial text */}
                                            <p className="text-slate-200 text-lg leading-relaxed mb-8 flex-grow">
                                                "{testimonial.text}"
                                            </p>

                                            {/* Rating */}
                                            <div className="flex items-center gap-1 mb-6">
                                                {renderStars(testimonial.rating)}
                                            </div>

                                            {/* User info */}
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                                    {testimonial.avatar}
                                                </div>
                                                <div>
                                                    <div className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors duration-300">
                                                        {testimonial.name}
                                                    </div>
                                                    <div className="text-slate-400 text-sm">
                                                        {testimonial.role}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800 text-cyan-400 rounded-full flex items-center justify-center shadow-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 z-10"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800 text-cyan-400 rounded-full flex items-center justify-center shadow-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 z-10"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-3 mt-12">
                        {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => goToSlide(i)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${Math.floor(currentIndex / 3) === i
                                        ? 'bg-cyan-400 w-8'
                                        : 'bg-slate-600 hover:bg-slate-500'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Resume autoplay button */}
                    {!isAutoPlaying && (
                        <div className="text-center mt-8">
                            <button
                                onClick={() => setIsAutoPlaying(true)}
                                className="px-6 py-2 bg-slate-700/50 hover:bg-slate-700 text-slate-300 rounded-full text-sm transition-all duration-300 border border-slate-600/50 hover:border-slate-500"
                            >
                                Resume autoplay
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Gallery Section */}
            <section className="relative z-10 py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className={`text-center mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Alumni
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Events & Highlights</span>
                        </h2>
                        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                            Celebrating our community through meetups, talks, and collaborative events
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image, index) => (
                            <div
                                key={image.id}
                                className="group relative bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                                    <div className="text-6xl font-bold text-white/20">
                                        {image.title.split(' ').map(word => word[0]).join('')}
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-lg font-bold text-white mb-2">{image.title}</h3>
                                    <p className="text-slate-300 text-sm">{image.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="relative z-10 py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className={`bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl rounded-3xl p-12 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 text-center relative overflow-hidden transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
                                <Send className="w-5 h-5 text-cyan-400" />
                                <span className="text-cyan-300 font-medium">Share Your Story</span>
                            </div>
                            
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Are You a
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> CLUSTER Alumnus?</span>
                            </h2>
                            
                            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                                We'd love to feature your success story and inspire current students. 
                                Share your journey, achievements, and how CLUSTER shaped your career.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={handleSubmitStory}
                                    disabled={formSubmitted}
                                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 disabled:opacity-70 disabled:scale-100 flex items-center justify-center space-x-2"
                                >
                                    {formSubmitted ? (
                                        <>
                                            <CheckCircle className="w-5 h-5" />
                                            <span>Story Submitted!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Submit Your Story</span>
                                        </>
                                    )}
                                </button>
                                
                                <a
                                    href="mailto:alumni@cluster.edu"
                                    className="px-8 py-4 border border-cyan-400/30 text-white font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span>Contact Alumni Team</span>
                                </a>
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