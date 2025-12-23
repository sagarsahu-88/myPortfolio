import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: "Keychron India Pvt Ltd",
            location: "Bangalore, Karnataka",
            role: "Senior Frontend Developer",
            period: "Dec 2023 – Oct 2024",
            description: [
                "Led technical strategy for the e-commerce platform, overseeing Shopify Liquid theme development and Online Store 2.0 migrations.",
                "Developed high-converting, React-based landing pages and feedback systems to maximize lead generation for new product launches.",
                "Acted as a senior technical escalation point, debugging and leading the adoption of new front-end technologies for feature expansion.",
                "Engineered a custom Stock Data Management tool and POS Dashboard using Node.js/database integration for streamlined inventory.",
                "Optimized critical site performance by implementing front-end caching strategies and efficient dynamic data rendering for the shopping experience.",
                
            ]
        },
        {
            company: "Blackbuck (Zinka Logistic Pvt Ltd)",
            location: "Bangalore, Karnataka",
            role: "Associate Engineer",
            period: "Nov 2022 – Nov 2023",
            description: [
                "Developed and deployed a core internal dashboard in React, focusing on responsive design for critical user data management (CRUD operations).",
                "Leveraged SQL and Metabase visualizations to display key user activity metrics, enabling data-driven decision-making for operational teams.",
                "Integrated and tested real-time GPS/telematics data streams using tools like Packet Sender to simulate and validate live data ingestion.",
                "Refactored and designed reusable React components to significantly improve dashboard UI/UX and enhance the component-based architecture.",
                "Ensured high data integrity and security while managing data flow between the SQL database and the presentation layer."
            ]
        },
        {
            company: "Cozentus Technology Pvt Ltd",
            location: "Bhubaneswar, Odisha",
            role: "Junior Engineer",
            period: "Jan 2022 – Sep 2022",
            description: [
                "Engineered the real-time operational dashboard UI in React, focusing on container tracking and rapid status updates for critical logistics data.",
                "Utilized modern React hooks and functional components to build highly responsive and reusable UI elements for complex data display.",
                "Implemented real-time data synchronization to instantly update map interfaces and status cards, drastically improving operational visibility.",
                "Integrated geospatial mapping APIs to visualize container routes and movements, enhancing the application's core shipment tracking functionality.",
                 "Optimized data rendering and performance on the ASP.NET MVC backend/React frontend hybrid stack to efficiently handle high-volume data streams."
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
