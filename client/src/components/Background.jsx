import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    // Generate random shapes
    const shapes = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        size: Math.random() * 100 + 50,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 5,
        type: Math.random() > 0.5 ? 'circle' : 'square'
    }));

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            overflow: 'hidden',
            background: 'var(--bg-primary)'
        }}>
            {/* Gradient Orbs */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                left: '-10%',
                width: '60%',
                height: '60%',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(0,0,0,0) 70%)',
                filter: 'blur(80px)',
                borderRadius: '50%',
                animation: 'pulse 10s infinite ease-in-out'
            }} />

            <div style={{
                position: 'absolute',
                bottom: '-20%',
                right: '-10%',
                width: '60%',
                height: '60%',
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(0,0,0,0) 70%)',
                filter: 'blur(80px)',
                borderRadius: '50%',
                animation: 'pulse 20s infinite ease-in-out reverse'
            }} />

            {/* Floating Shapes */}
            {shapes.map((shape) => (
                <motion.div
                    key={shape.id}
                    style={{
                        position: 'absolute',
                        left: `${shape.x}%`,
                        top: `${shape.y}%`,
                        width: shape.size,
                        height: shape.size,
                        borderRadius: shape.type === 'circle' ? '50%' : '10%',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        backdropFilter: 'blur(2px)'
                    }}
                    animate={{
                        y: [0, -50, 0],
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: shape.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: shape.delay
                    }}
                />
            ))}

            {/* Grid Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(circle at center, black 50%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 100%)',
                pointerEvents: 'none'
            }} />

            <style>{`
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.2); opacity: 0.8; }
                    100% { transform: scale(1); opacity: 0.5; }
                }
            `}</style>
        </div>
    );
};

export default Background;
