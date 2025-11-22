import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Palette, TrendingUp, Rocket } from 'lucide-react';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="about" className="section" style={{ paddingTop: '100px' }}>
            <div className="container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{ maxWidth: '900px', margin: '0 auto' }}
                >
                    <motion.h2 variants={itemVariants} className="section-title">About Me</motion.h2>

                    <motion.div variants={itemVariants} className="glass-card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            I am a <span style={{ color: 'var(--accent-violet)', fontWeight: '600' }}>Full-Stack MERN Developer</span> and a <span style={{ color: 'var(--accent-pink)', fontWeight: '600' }}>Digital Strategy Specialist</span> who brings a unique, integrated approach to building and scaling web products. With a strong academic foundation , I don't just write robust code; I engineer solutions that are designed to succeed in the market.
                        </p>
                    </motion.div>

                    <motion.h3 variants={itemVariants} style={{ fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center' }}>My Core Expertise</motion.h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                        <motion.div variants={itemVariants} className="glass-card" style={{ padding: '2rem' }}>
                            <Code2 size={32} style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }} />
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>MERN Architecture</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                Expert in designing and deploying secure, dynamic, and performant applications using MongoDB, Express, React, and Node.js. My experience includes developing full-stack projects, from scalable e-commerce platforms to bespoke, high-conversion portfolios.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="glass-card" style={{ padding: '2rem' }}>
                            <Palette size={32} style={{ color: 'var(--accent-pink)', marginBottom: '1rem' }} />
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Design & User Experience</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                I prioritize pixel-perfect, responsive design, ensuring a seamless and intuitive user experience that converts visitors into customers.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="glass-card" style={{ padding: '2rem' }}>
                            <TrendingUp size={32} style={{ color: 'var(--accent-violet)', marginBottom: '1rem' }} />
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Strategic Business Focus</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                I leverage a deep understanding of SEO, social media handling, Meta campaigns, and video production to ensure every application is built not just correctly, but strategically—guaranteeing maximum visibility and business growth.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="glass-card" style={{ padding: '3rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))' }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Why Work With Me?</h3>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
                            In today's market, development and strategy cannot be separated. I eliminate the need for separate developer and marketing teams by integrating best-in-class AI strategy and business solutions directly into the development lifecycle.
                            <br /><br />
                            <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>My goal is simple:</span> To deliver end-to-end digital assets that are technically flawless, aesthetically powerful, and fundamentally geared for business success.
                        </p>
                        <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            Let's Build Something Great <Rocket size={18} />
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
