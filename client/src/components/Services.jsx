import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Smartphone,
    Database,
    Layout,
    Server,
    LayoutDashboard,
    TrendingUp,
    Award,
    Sparkles,
    Palette,
    Globe
} from 'lucide-react';

const services = [
    {
        title: "Web Development",
        description: "Building responsive, high-performance websites using modern technologies.",
        icon: <Globe className="w-8 h-8" />
    },
    {
        title: "App Development",
        description: "Creating feature-rich mobile applications for iOS and Android platforms.",
        icon: <Smartphone className="w-8 h-8" />
    },
    {
        title: "MERN Stack Development",
        description: "Full-stack solutions using MongoDB, Express, React, and Node.js.",
        icon: <Database className="w-8 h-8" />
    },
    {
        title: "Mobile Development",
        description: "Native and cross-platform mobile app development tailored to your needs.",
        icon: <Smartphone className="w-8 h-8" />
    },
    {
        title: "UX Design",
        description: "User-centric design focused on intuitive and engaging experiences.",
        icon: <Layout className="w-8 h-8" />
    },
    {
        title: "Hosting Websites",
        description: "Reliable and secure hosting solutions for your web applications.",
        icon: <Server className="w-8 h-8" />
    },
    {
        title: "Business Tools & Dashboards",
        description: "Custom dashboards and tools to streamline your business operations.",
        icon: <LayoutDashboard className="w-8 h-8" />
    },
    {
        title: "Digital Marketing with AI",
        description: "Data-driven marketing strategies enhanced by Artificial Intelligence.",
        icon: <TrendingUp className="w-8 h-8" />
    },
    {
        title: "Brand Solution",
        description: "Comprehensive branding strategies to elevate your business identity.",
        icon: <Award className="w-8 h-8" />
    },
    {
        title: "AI Based Content",
        description: "Generating high-quality, engaging content using advanced AI tools.",
        icon: <Sparkles className="w-8 h-8" />
    },
    {
        title: "Design Solutions",
        description: "Creative graphic and UI design solutions for all your visual needs.",
        icon: <Palette className="w-8 h-8" />
    }
];

const Services = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="section-title"
                >
                    What I Do Best
                </motion.h2>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.00,
                                backgroundColor: "rgba(159, 36, 241, 0.1)",
                                boxShadow: "0 0 25px var(--accent-violet)"
                            }}
                            className="glass-card service-card"
                        >
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
