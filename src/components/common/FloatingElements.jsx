import React, { useState, useEffect } from 'react';
import {
    Database,
    Brain,
    BarChart3,
    GitBranch,
    Cpu,
    Network,
    Binary,
    TrendingUp,
    Zap,
    Target,
    Layers,
    Activity
} from 'lucide-react';

const FloatingElements = ({
    density = 'low',
    speed = 'low',
    interactive = true,
    showIcons = true,
    showParticles = true
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    // Icon sets for different themes
    const dataIcons = [
        Database, Brain, BarChart3, GitBranch, Cpu, Network,
        Binary, TrendingUp, Zap, Target, Layers, Activity
    ];

    // Density configurations
    const densityConfig = {
        low: { particles: 15, icons: 6, geometricShapes: 8 },
        medium: { particles: 25, icons: 10, geometricShapes: 12 },
        high: { particles: 40, icons: 16, geometricShapes: 18 }
    };

    // Speed configurations
    const speedConfig = {
        slow: { duration: '20s', delay: '0s' },
        normal: { duration: '15s', delay: '0s' },
        fast: { duration: '10s', delay: '0s' }
    };

    const config = densityConfig[density] || densityConfig.medium;
    const speedSettings = speedConfig[speed] || speedConfig.normal;

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (interactive) {
                setMousePosition({ x: e.clientX, y: e.clientY });
            }
        };

        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        handleResize();
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, [interactive]);

    // Generate random position and animation properties
    const generateElementProps = (index, total) => {
        const angle = (index / total) * 360;
        const radius = Math.random() * 400 + 200;

        return {
            initialX: Math.random() * 100,
            initialY: Math.random() * 100,
            size: Math.random() * 30 + 20,
            opacity: Math.random() * 0.4 + 0.1,
            duration: Math.random() * 20 + 15,
            delay: Math.random() * 10,
            angle: angle,
            radius: radius
        };
    };

    // Floating Particles Component
    const FloatingParticles = () => {
        if (!showParticles) return null;

        return (
            <>
                {Array.from({ length: config.particles }).map((_, index) => {
                    const props = generateElementProps(index, config.particles);

                    return (
                        <div
                            key={`particle-${index}`}
                            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                            style={{
                                left: `${props.initialX}%`,
                                top: `${props.initialY}%`,
                                opacity: props.opacity,
                                animation: `floatParticle ${props.duration}s linear infinite ${props.delay}s`,
                                transform: interactive ? `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` : 'none',
                                transition: 'transform 0.3s ease-out'
                            }}
                        >
                            <div className="w-full h-full bg-white rounded-full animate-pulse"></div>
                        </div>
                    );
                })}
            </>
        );
    };

    // Floating Icons Component
    const FloatingIcons = () => {
        if (!showIcons) return null;

        return (
            <>
                {Array.from({ length: config.icons }).map((_, index) => {
                    const props = generateElementProps(index, config.icons);
                    const IconComponent = dataIcons[index % dataIcons.length];

                    return (
                        <div
                            key={`icon-${index}`}
                            className="absolute text-cyan-400/30 hover:text-cyan-400/60 transition-all duration-500"
                            style={{
                                left: `${props.initialX}%`,
                                top: `${props.initialY}%`,
                                fontSize: `${props.size}px`,
                                opacity: props.opacity,
                                animation: `floatIcon ${props.duration}s ease-in-out infinite ${props.delay}s`,
                                transform: interactive ? `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px) scale(${1 + Math.sin(Date.now() * 0.001) * 0.1})` : 'none',
                                transition: 'transform 0.5s ease-out'
                            }}
                        >
                            <IconComponent
                                size={props.size}
                                className="drop-shadow-lg filter hover:drop-shadow-xl transition-all duration-300"
                            />
                        </div>
                    );
                })}
            </>
        );
    };

    // Geometric Shapes Component
    const GeometricShapes = () => {
        return (
            <>
                {Array.from({ length: config.geometricShapes }).map((_, index) => {
                    const props = generateElementProps(index, config.geometricShapes);
                    const shapeType = index % 4;

                    return (
                        <div
                            key={`shape-${index}`}
                            className="absolute"
                            style={{
                                left: `${props.initialX}%`,
                                top: `${props.initialY}%`,
                                width: `${props.size}px`,
                                height: `${props.size}px`,
                                opacity: props.opacity * 0.6,
                                animation: `floatShape ${props.duration}s linear infinite ${props.delay}s`,
                                transform: interactive ? `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) rotate(${props.angle}deg)` : `rotate(${props.angle}deg)`,
                                transition: 'transform 0.3s ease-out'
                            }}
                        >
                            {/* Different geometric shapes */}
                            {shapeType === 0 && (
                                <div className="w-full h-full border border-cyan-400/20 rounded-full animate-spin-slow"></div>
                            )}
                            {shapeType === 1 && (
                                <div className="w-full h-full border border-blue-400/20 rotate-45 animate-pulse"></div>
                            )}
                            {shapeType === 2 && (
                                <div
                                    className="w-full h-full border border-purple-400/20 animate-bounce-slow"
                                    style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                                ></div>
                            )}
                            {shapeType === 3 && (
                                <div className="w-full h-full border border-teal-400/20 rounded-lg animate-pulse"></div>
                            )}
                        </div>
                    );
                })}
            </>
        );
    };

    // Data Flow Lines
    const DataFlowLines = () => {
        return (
            <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div
                        key={`flow-${index}`}
                        className="absolute"
                        style={{
                            left: `${20 + index * 15}%`,
                            top: `${10 + index * 20}%`,
                            width: '200px',
                            height: '2px',
                            background: 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.3), transparent)',
                            animation: `flowLine ${8 + index * 2}s linear infinite ${index * 2}s`,
                            transform: `rotate(${index * 30}deg)`
                        }}
                    >
                        <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
                    </div>
                ))}
            </div>
        );
    };

    // Neural Network Nodes
    const NeuralNetwork = () => {
        const nodes = Array.from({ length: 8 }).map((_, index) => ({
            x: 20 + (index % 4) * 20,
            y: 20 + Math.floor(index / 4) * 40,
            id: index
        }));

        return (
            <div className="absolute inset-0 overflow-hidden opacity-20">
                {/* Connection Lines */}
                {nodes.map((node, index) =>
                    nodes.slice(index + 1).map((targetNode, targetIndex) => (
                        <div
                            key={`connection-${index}-${targetIndex}`}
                            className="absolute bg-gradient-to-r from-cyan-400/30 to-transparent"
                            style={{
                                left: `${node.x}%`,
                                top: `${node.y}%`,
                                width: `${Math.sqrt(Math.pow(targetNode.x - node.x, 2) + Math.pow(targetNode.y - node.y, 2))}%`,
                                height: '1px',
                                transformOrigin: 'left center',
                                transform: `rotate(${Math.atan2(targetNode.y - node.y, targetNode.x - node.x) * 180 / Math.PI}deg)`,
                                animation: `pulse ${3 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s`
                            }}
                        ></div>
                    ))
                )}

                {/* Nodes */}
                {nodes.map((node, index) => (
                    <div
                        key={`node-${index}`}
                        className="absolute w-3 h-3 bg-cyan-400/50 rounded-full animate-pulse"
                        style={{
                            left: `${node.x}%`,
                            top: `${node.y}%`,
                            animationDelay: `${index * 0.5}s`
                        }}
                    >
                        <div className="w-full h-full bg-cyan-400 rounded-full animate-ping"></div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Custom CSS Animations */}
            <style jsx>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-20px) translateX(10px) scale(1.1); }
          50% { transform: translateY(-10px) translateX(-5px) scale(0.9); }
          75% { transform: translateY(-30px) translateX(15px) scale(1.05); }
        }
        
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-30px) rotate(90deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
          75% { transform: translateY(-45px) rotate(270deg); }
        }
        
        @keyframes floatShape {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-25px) rotate(120deg) scale(1.1); }
          66% { transform: translateY(-40px) rotate(240deg) scale(0.9); }
        }
        
        @keyframes flowLine {
          0% { transform: translateX(-100%) scaleX(0); }
          50% { transform: translateX(0%) scaleX(1); }
          100% { transform: translateX(100%) scaleX(0); }
        }
        
        .animate-spin-slow { animation: spin 8s linear infinite; }
        .animate-bounce-slow { animation: bounce 3s ease-in-out infinite; }
      `}</style>

            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>

            {/* Floating Elements */}
            <FloatingParticles />
            <FloatingIcons />
            <GeometricShapes />
            <DataFlowLines />
            <NeuralNetwork />

            {/* Interactive Cursor Effect */}
            {interactive && (
                <div
                    className="absolute w-32 h-32 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-xl pointer-events-none transition-all duration-300 ease-out"
                    style={{
                        left: mousePosition.x - 64,
                        top: mousePosition.y - 64,
                        transform: `scale(${1 + Math.sin(Date.now() * 0.003) * 0.1})`
                    }}
                ></div>
            )}

            {/* Matrix Rain Effect */}
            <div className="absolute inset-0 opacity-5">
                {Array.from({ length: 20 }).map((_, index) => (
                    <div
                        key={`matrix-${index}`}
                        className="absolute text-green-400 font-mono text-xs"
                        style={{
                            left: `${index * 5}%`,
                            animation: `matrixRain ${5 + Math.random() * 10}s linear infinite ${Math.random() * 5}s`
                        }}
                    >
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div key={i} className="leading-4">
                                {Math.random() > 0.5 ? '1' : '0'}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <style jsx>{`
        @keyframes matrixRain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
        </div>
    );
};

export default FloatingElements;