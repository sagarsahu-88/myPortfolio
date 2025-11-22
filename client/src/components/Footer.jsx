import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, FileText, Heart, Instagram, Facebook, Send, MessageCircle } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="section" style={{ paddingBottom: '2rem', paddingTop: '4rem', background: 'linear-gradient(to top, var(--bg-secondary), transparent)' }}>
            <div className="container">
                <div className="footer-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    {/* Contact Info */}
                    <div className="footer-column">
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Get in Touch</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <a href="mailto:sagarsahurock9@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                                <Mail size={20} style={{ color: 'var(--accent-violet)' }} />
                                sagarsahurock9@gmail.com
                            </a>
                            <a href="tel:+918908899972" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                                <Phone size={20} style={{ color: 'var(--accent-pink)' }} />
                                +91 8908899972
                            </a>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                                <MapPin size={20} style={{ color: 'var(--accent-cyan)' }} />
                                Bangalore, Karnataka, India
                            </div>
                        </div>
                    </div>

                    {/* Quick Links / Socials */}
                    <div className="footer-column">
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Connect</h3>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <motion.a
                                whileHover={{ y: -5 }}
                                href="https://github.com/sagarsahu-88"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card"
                                style={{ padding: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}
                            >
                                <Github size={24} />
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -5 }}
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card"
                                style={{ padding: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}
                            >
                                <Linkedin size={24} />
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -5 }}
                                href="https://www.instagram.com/mr_s_a_g_a_r______/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card"
                                style={{ padding: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}
                            >
                                <Instagram size={24} />
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -5 }}
                                href="https://www.facebook.com/sagar.sahu.407361"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card"
                                style={{ padding: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}
                            >
                                <Facebook size={24} />
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -5 }}
                                href="https://telegram.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card"
                                style={{ padding: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}
                            >
                                <Send size={24} />
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -5 }}
                                href="https://wa.me/918908899972"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card"
                                style={{ padding: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}
                            >
                                <MessageCircle size={24} />
                            </motion.a>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="footer-column">
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Resources</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                            <motion.a
                                whileHover={{ x: 5 }}
                                href="/resume.pdf"
                                target="_blank"
                                className="btn btn-primary"
                                style={{ fontSize: '0.9rem', padding: '0.6rem 1.5rem' }}
                            >
                                <FileText size={18} style={{ marginRight: '0.5rem' }} />
                                Download Resume
                            </motion.a>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        © {currentYear} Sagar Sahu. Made with <Heart size={16} style={{ color: 'var(--accent-pink)', fill: 'var(--accent-pink)' }} /> in India.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
