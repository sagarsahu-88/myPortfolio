import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    // Check if device is touch-enabled
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const mouseMove = (e) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY
        });
    };

    const handleMouseOver = (e) => {
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
            setIsHovering(true);
        } else {
            setIsHovering(false);
        }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
        window.removeEventListener("mousemove", mouseMove);
        window.removeEventListener("mouseover", handleMouseOver);
    };
}, []);

return (
    <>
        <motion.div
            className="cursor-dot"
            animate={{
                x: mousePosition.x - 4,
                y: mousePosition.y - 4,
                scale: isHovering ? 0 : 1
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5
            }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '8px',
                height: '8px',
                backgroundColor: 'var(--accent-cyan)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9999,
                mixBlendMode: 'difference'
            }}
        />
        <motion.div
            className="cursor-outline"
            animate={{
                x: mousePosition.x - 20,
                y: mousePosition.y - 20,
                scale: isHovering ? 1.5 : 1,
                border: isHovering ? '2px solid var(--accent-cyan)' : '1px solid var(--text-secondary)'
            }}
            transition={{
                type: "spring",
                stiffness: 250,
                damping: 20,
                mass: 0.8
            }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9998,
                mixBlendMode: 'difference',
                backgroundColor: isHovering ? 'rgba(56, 189, 248, 0.1)' : 'transparent'
            }}
        />
        <style>{`
                @media (max-width: 768px) {
                    .cursor-dot, .cursor-outline {
                        display: none !important;
                    }
                }
                body {
                    cursor: none;
                }
                a, button {
                    cursor: none;
                }
            `}</style>
    </>
);
};

export default Cursor;
