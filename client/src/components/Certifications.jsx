import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        {
            name: "Full Stack PHP",
            issuer: "Syllogistek System Pvt Ltd",
            description: "Hands-on experience in Full Stack Development working on real-world projects."
        },
        {
            name: "Mern Stack Development",
            issuer: "Appstone Pvt Ltd",
            description: "Comprehensive training in MongoDB, Express.js, React.js, and Node.js."
        },
        {
            name: "SEBI Investor Certification Examination",
            issuer: "NISM",
            description: "Financial literacy, investment, budgeting, and securities markets knowledge."
        }
    ];

    return (
        <section id="certifications" className="section" style={{ paddingTop: '100px' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Certifications
                </motion.h2>

                <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card"
                            style={{
                                padding: '2rem',
                                display: 'flex',
                                gap: '1.5rem'
                            }}
                        >
                            <div style={{ color: 'var(--accent-pink)', minWidth: '50px' }}>
                                <Award size={40} />
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{cert.name}</h3>
                                <h4 style={{ fontSize: '1rem', color: 'var(--accent-violet)', marginBottom: '1rem' }}>{cert.issuer}</h4>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    {cert.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
