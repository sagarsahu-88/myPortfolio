import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, PenTool, TrendingUp } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <Code size={30} />,
            skills: ["React.js", "Redux", "HTML5", "CSS3", "JavaScript (ES6+)", "SASS", "TailwindCSS", "UI/UX Principles", "Responsive Design", "Babel", "NPM", "DOM Manipulation"]
        },
        {
            title: "Backend Development",
            icon: <Database size={30} />,
            skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "RESTful APIs", "Microservices"]
        },
        {
            title: "Tools, DevOps & OS",
            icon: <TrendingUp size={30} />,
            skills: ["Git", "GitHub", "Docker", "Selenium", "Postman", "VS Code", "MongoDB Compass", "Virtual Box", "XAMPP", "Cloud-Based Deployment", "CI/CD", "Azure Data Fundamentals", "Linux", "Windows"]
        },
        {
            title: "AI Tools",
            icon: <Database size={30} />,
            skills: ["Antigravity", "Cursor AI", "n8n Cloud", "warp.dev", "ChatGPT"]
        },
        {
            title: "Professional & Soft Skills",
            icon: <TrendingUp size={30} />,
            skills: ["SDLC", "Unit Testing (Jest)", "Debugging", "Problem Solving", "Communication", "Financial Analysis", "Investors Awareness"]
        },
        {
            title: "Digital Marketing & Freelancing",
            icon: <PenTool size={30} />,
            skills: ["SEO", "Content Writing", "Videography", "Branding", "Logo Design", "Meta Campaigning", "Social Media Handling", "Performance marketing"]
        }
    ];

    return (
        <section id="skills" className="section" style={{ paddingTop: '100px' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Skills & Services
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card"
                            style={{
                                padding: '2rem',
                                borderTop: '4px solid var(--accent-pink)'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ color: 'var(--accent-pink)' }}>{category.icon}</div>
                                <h3 style={{ fontSize: '1.3rem' }}>{category.title}</h3>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {category.skills.map((skill) => (
                                    <span key={skill} style={{
                                        background: 'var(--bg-primary)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '0.5rem',
                                        fontSize: '0.9rem',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
