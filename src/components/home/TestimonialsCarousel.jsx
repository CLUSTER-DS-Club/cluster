import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Jane Doe',
        text: 'Cluster helped me connect with amazing data scientists and opened doors to collaborations I never thought possible!',
        role: 'Data Scientist',
        rating: 5,
        avatar: 'JD'
    },
    {
        name: 'John Smith',
        text: 'The research hub is a game changer for collaboration. Finding the right team members has never been easier.',
        role: 'Researcher',
        rating: 5,
        avatar: 'JS'
    },
    {
        name: 'Alice Johnson',
        text: 'I found my co-founder through this platform! The networking features are incredibly powerful and intuitive.',
        role: 'Entrepreneur',
        rating: 5,
        avatar: 'AJ'
    },
    {
        name: 'Michael Lee',
        text: 'The networking possibilities are endless! This platform transformed how I approach professional connections.',
        role: 'AI Engineer',
        rating: 5,
        avatar: 'ML'
    },
    {
        name: 'Sarah Chen',
        text: 'Cluster\'s matching algorithm is spot-on. I\'ve built meaningful relationships that advanced my career.',
        role: 'Product Manager',
        rating: 5,
        avatar: 'SC'
    },
    {
        name: 'David Rodriguez',
        text: 'The quality of connections on this platform is unmatched. Every interaction has been valuable.',
        role: 'Software Engineer',
        rating: 5,
        avatar: 'DR'
    }
];

const TestimonialsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev >= testimonials.length - slidesToShow ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, slidesToShow]);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev >= testimonials.length - slidesToShow ? 0 : prev + 1
        );
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev <= 0 ? testimonials.length - slidesToShow : prev - 1
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

    return (
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
                        <span className="text-slate-300 text-sm font-medium">What our users say</span>
                    </div>
                    <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                        Trusted by
                        <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text">
                            {' '}innovators
                        </span>
                    </h2>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                        Join thousands of professionals who've transformed their careers with Cluster
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`
                            }}
                        >
                            {testimonials.map((testimonial, idx) => (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 px-4"
                                    style={{ width: `${100 / slidesToShow}%` }}
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
                    {Array.from({ length: Math.ceil(testimonials.length / slidesToShow) }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => goToSlide(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${Math.floor(currentIndex / slidesToShow) === i
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
    );
};

export default TestimonialsCarousel;