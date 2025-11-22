import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: "Keychron India Pvt Ltd",
            location: "Bangalore, Karnataka",
            role: "Technical Head",
            period: "Jan 2024 – Oct 2024",
            description: [
                "Technical Expertise: Deep understanding of product specifications, troubleshooting, and recommendations.",
                "Developed and integrated new features to enhance Shopify store capabilities.",
                "Integrated shipping and supply chain solutions within Shopify.",
                "Responsible for product demos, JSON Upgradation, and user support.",
                "Backend support and tool creation for inventory and services.",
                "Managed sales team schedules and performance.",
                "Database creation & updates for SKUs and stocks."
            ]
        },
        {
            company: "Blackbuck (Zinka Logistic Pvt Ltd)",
            location: "Bangalore, Karnataka",
            role: "Senior Quality Analyst",
            period: "Dec 2022 – Nov 2023",
            description: [
                "Project: Data Mining & Support, Features implementation for Govt of Maharashtra and Himachal Pradesh.",
                "Worked with MySQL, Excel Advanced, Metabase cloud, Postman.",
                "GPS Device Logic: Interpreting commands for location data (latitude, longitude).",
                "Packet Sender: Managing data transmission efficiently.",
                "API Integrations: Integrating external systems with the database."
            ]
        },
        {
            company: "Cozentus Technology Pvt Ltd",
            location: "Bhubaneswar, Odisha",
            role: "Junior Software Engineer",
            period: "Jan 2022 – Aug 2022",
            description: [
                "Project: Asset Management System (.NET, React, MySQL).",
                "Developed Asset Registry for detailed asset tracking.",
                "Implemented Search and Filter functionalities.",
                "Built Uploads and Attachments features for photos and manuals."
            ]
        }
    ];

    return (
        <section id="experience" className="section" style={{ paddingTop: '100px' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Work Experience
                </motion.h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card"
                            style={{
                                padding: '2rem',
                                marginBottom: '2rem',
                                borderLeft: '4px solid var(--accent-violet)'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem', gap: '0.5rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                                    <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)' }}>{exp.company}</h4>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                    <Calendar size={18} />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontStyle: 'italic' }}>
                                <Briefcase size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                                {exp.location}
                            </p>

                            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                                {exp.description.map((item, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem', listStyleType: 'disc' }}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
