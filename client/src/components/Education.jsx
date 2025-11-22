import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: "Master Of Computer Application (MCA)",
            university: "Silicon Institute Of Technology, BBSR, Odisha",
            year: "2020-2022"
        },
        {
            degree: "Bachelor Of Computer Application (BCA)",
            university: "Creative Techno College, Angul, Odisha",
            year: "2017-2020"
        },

    ];

    return (
        <section id="education" className="section" style={{ paddingTop: '100px' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Education
                </motion.h2>

                <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card"
                            style={{
                                padding: '2rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '2rem',
                                flexDirection: 'row'
                            }}
                        >
                            <div style={{
                                background: 'rgba(139, 92, 246, 0.1)',
                                padding: '1.5rem',
                                borderRadius: '50%',
                                color: 'var(--accent-violet)',
                                flexShrink: 0
                            }}>
                                <GraduationCap size={32} />
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{edu.degree}</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
                                    {edu.university}
                                </p>
                                <span style={{
                                    background: 'rgba(6, 182, 212, 0.1)',
                                    color: 'var(--accent-cyan)',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px',
                                    fontSize: '0.85rem'
                                }}>
                                    {edu.year}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <style>{`
                    @media (max-width: 600px) {
                        #education .glass-card { flex-direction: column; text-align: center; }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default Education;
