import React, { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm(
            'service_ggovaa1',
            'template_pz4jdys',
            e.target,
            'EIiYYLYXmwiPsBfkd'
        )
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="section" style={{ paddingTop: '100px' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>

                <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Let's talk about your project</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
                                <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-violet)' }}>
                                    <Mail />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.25rem' }}>Email</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>sagarsahurock9@gmail.com</p>
                                </div>
                            </div>

                            <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
                                <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-cyan)' }}>
                                    <MapPin />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.25rem' }}>Location</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit}
                        className="glass-card"
                        style={{ padding: '2.5rem' }}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid var(--glass-border)',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    color: 'white',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid var(--glass-border)',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    color: 'white',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                            <textarea
                                rows="4"
                                name="message"
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid var(--glass-border)',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    color: 'white',
                                    outline: 'none'
                                }}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={18} />
                        </button>

                        {status === 'success' && (
                            <p style={{ marginTop: '1rem', color: '#4ade80', textAlign: 'center' }}>Message sent successfully!</p>
                        )}
                    </motion.form>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
        </section>
    );
};

export default Contact;
