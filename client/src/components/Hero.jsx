import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '80px'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: 'var(--accent-cyan)', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                        Hello, This is Sagar 
                    </h2>
                    <h1 style={{
                        fontSize: 'clamp(2rem, 8vw, 4rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        
                    }}>
                        The Digital Producer <br />
                        <span style={{ background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></span>
                    </h1>
                    <h2 style={{
                        fontSize: 'clamp(1rem, 8vw, 2rem)',
                        fontWeight: '600',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem'
                    }}>
                    
                        <span style={{ background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Where Code  Meets Conversion.</span>
                    </h2>
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        color: 'var(--text-secondary)',
                        maxWidth: '700px',
                        margin: '0 auto 2.5rem'
                    }}>Crafting end-to-end digital experiences where code meets creative flow with high-performance FULLSTACK development & Digital marketing solution .
                       
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            View Work <ArrowRight size={20} />
                        </button>
                        <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="btn" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            Start a Project
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
