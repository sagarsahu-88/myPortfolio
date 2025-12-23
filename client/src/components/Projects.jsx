import React, { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fallback data for demo if backend is not running
        setProjects([
            {
                _id: '1',
                title: "React Ecommerce",
                description: "Dynamic and responsive user interface with Node.js/Express backend, MongoDB, and Stripe payment integration.",
                technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe"],
                link: "https://ecommerce-backend-rouge.vercel.app/login",
                image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
            },
            {
                _id: '2',
                title: "LeadSpark",
                description: "Architected a high-performance, secure MERN Stack platform featuring role-based authentication, an AI-driven chatbot, and a custom CMS with integrated payment processing, all optimized through TypeScript and smooth-scrolling UX to maximize user engagement and operational efficiency.",
                technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Lenis Effect",",AI chat","JWT","React hlemet"],
                link: " ",
                image: "https://plus.unsplash.com/premium_photo-1683583961436-fa9efb9f72d7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                _id: '3',
                title: "Portfolio",
                description: "Responsive design using React.js and Framer Motion with dedicated sections for services and contact form.",
                technologies: ["React.js", "Framer Motion", "CSS3"],
                link: "https://animated-portfolio-ivory.vercel.app/",
                image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80"
            },
            {
                _id: '4',
                title: "Music Player",
                description: "Robust audio playback system using JavaScript with play, pause, track navigation, and interactive progress bar.",
                technologies: ["JavaScript", "CSS", "HTML"],
                link: "https://music-player-in-java-script.vercel.app/",
                image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80"
            }
        ]);
        setLoading(false);
    }, []);

    return (
        <section id="projects" className="section" style={{ paddingTop: '100px' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project._id}
                            className="glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease'
                            }}
                            whileHover={{ y: -10 }}
                        >
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                    {project.description}
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    {project.technologies.map(tech => (
                                        <span key={tech} style={{
                                            background: 'rgba(6, 182, 212, 0.1)',
                                            color: 'var(--accent-cyan)',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '20px',
                                            fontSize: '0.875rem'
                                        }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href={project.link} target="_blank" className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)' }}>
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a href="#" className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)' }}>
                                        <Github size={16} /> Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
