import React, { useState, useRef, useEffect } from 'react';

const GlassCard = ({
    children,
    className = '',
    variant = 'default',
    hover = 'lift',
    glow = false,
    border = true,
    blur = 'md',
    opacity = 'medium',
    interactive = true,
    gradient = 'default',
    ...props
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    // Variant configurations
    const variants = {
        default: 'bg-white/10',
        dark: 'bg-slate-900/70',
        light: 'bg-white/20',
        primary: 'bg-cyan-500/10',
        secondary: 'bg-blue-500/10',
        accent: 'bg-purple-500/10',
        success: 'bg-green-500/10',
        warning: 'bg-yellow-500/10',
        danger: 'bg-red-500/10'
    };

    // Hover effect configurations
    const hoverEffects = {
        none: '',
        lift: 'hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20',
        scale: 'hover:scale-105',
        glow: 'hover:shadow-xl hover:shadow-cyan-500/30',
        tilt: 'hover:rotate-1 hover:scale-105',
        float: 'hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-500/25'
    };

    // Blur configurations
    const blurLevels = {
        none: '',
        sm: 'backdrop-blur-sm',
        md: 'backdrop-blur-md',
        lg: 'backdrop-blur-lg',
        xl: 'backdrop-blur-xl',
        '2xl': 'backdrop-blur-2xl'
    };

    // Opacity configurations
    const opacityLevels = {
        low: 'bg-opacity-5',
        medium: 'bg-opacity-10',
        high: 'bg-opacity-20'
    };

    // Gradient configurations
    const gradients = {
        default: 'from-white/10 to-white/5',
        primary: 'from-cyan-500/20 to-blue-500/10',
        secondary: 'from-blue-500/20 to-purple-500/10',
        warm: 'from-orange-500/20 to-red-500/10',
        cool: 'from-cyan-500/20 to-teal-500/10',
        rainbow: 'from-pink-500/20 via-purple-500/15 to-cyan-500/10'
    };

    // Handle mouse movement for interactive effects
    useEffect(() => {
        if (!interactive || !cardRef.current) return;

        const handleMouseMove = (e) => {
            const rect = cardRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            setMousePosition({ x, y });
        };

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => {
            setIsHovered(false);
            setMousePosition({ x: 50, y: 50 });
        };

        const card = cardRef.current;
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseenter', handleMouseEnter);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [interactive]);

    // Build className
    const baseClasses = [
        'relative overflow-hidden rounded-xl transition-all duration-300 ease-out',
        blurLevels[blur],
        variants[variant],
        hoverEffects[hover],
        border ? 'border border-white/20' : '',
        glow ? 'shadow-lg shadow-cyan-500/20' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div
            ref={cardRef}
            className={baseClasses}
            style={interactive && isHovered ? {
                transform: `perspective(1000px) rotateX(${(mousePosition.y - 50) * 0.1}deg) rotateY(${(mousePosition.x - 50) * 0.1}deg)`
            } : {}}
            {...props}
        >
            {/* Background Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradients[gradient]} opacity-50`}></div>

            {/* Interactive Light Effect */}
            {interactive && isHovered && (
                <div
                    className="absolute inset-0 opacity-30 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)`
                    }}
                ></div>
            )}

            {/* Shimmer Effect */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
            </div>

            {/* Border Glow */}
            {glow && (
                <div className="absolute inset-0 rounded-xl">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-purple-500/50 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
                </div>
            )}

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Floating Particles */}
            {interactive && (
                <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className={`absolute w-1 h-1 bg-cyan-400 rounded-full transition-all duration-1000 ${isHovered ? 'opacity-60' : 'opacity-0'
                                }`}
                            style={{
                                left: `${20 + index * 30}%`,
                                top: `${30 + index * 20}%`,
                                animationDelay: `${index * 0.5}s`,
                                animation: isHovered ? 'float 3s ease-in-out infinite' : 'none'
                            }}
                        ></div>
                    ))}
                </div>
            )}

            {/* CSS Animations */}
            <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.2); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

// Specialized Glass Card Components
export const GlassInfoCard = ({ title, description, icon: Icon, stats, ...props }) => (
    <GlassCard variant="primary" hover="lift" glow={true} {...props}>
        <div className="p-6">
            {Icon && (
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/25">
                    <Icon className="w-6 h-6 text-white" />
                </div>
            )}
            {title && <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>}
            {description && <p className="text-slate-300 mb-4">{description}</p>}
            {stats && (
                <div className="flex items-center space-x-4 text-sm">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-cyan-400 font-bold">{stat.value}</div>
                            <div className="text-slate-400">{stat.label}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>ting stats effect
    </GlassCard>
);

export const GlassServiceCard = ({ title, description, features, price, ...props }) => (
    <GlassCard variant="default" hover="float" border={true} {...props}>
        <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
            <p className="text-slate-300 mb-4">{description}</p>

            {features && (
                <ul className="space-y-2 mb-6">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center text-slate-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                            {feature}
                        </li>
                    ))}
                </ul>
            )}

            {price && (
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cyan-400">{price}</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                        Learn More
                    </button>
                </div>
            )}
        </div>
    </GlassCard>
);

export const GlassStatCard = ({ value, label, trend, icon: Icon, ...props }) => (
    <GlassCard variant="primary" hover="scale" glow={true} {...props}>
        <div className="p-4 text-center">
            {Icon && (
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-cyan-500/25">
                    <Icon className="w-5 h-5 text-white" />
                </div>
            )}
            <div className="text-2xl font-bold text-cyan-400 mb-1">{value}</div>
            <div className="text-slate-300 text-sm">{label}</div>
            {trend && (
                <div className={`text-xs mt-1 ${trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {trend > 0 ? '+' : ''}{trend}%
                </div>
            )}
        </div>
    </GlassCard>
);

export default GlassCard;