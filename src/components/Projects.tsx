"use client";

import styles from './Projects.module.css';
import { motion } from 'framer-motion';

interface ProjectItem {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    link: string;
    featured?: boolean;
    tech: string[];
}

const projects: ProjectItem[] = [
    {
        id: 1,
        title: 'Combat 24',
        category: 'Fitness & Lifestyle',
        image: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)',
        description: 'A premium martial arts and fitness training platform offering class schedules, personal coaching, and membership management. Built for a seamless user experience.',
        link: 'https://combat24.in/',
        featured: true,
        tech: ['React', 'Tailwind CSS', 'JavaScript', 'Framer Motion'],
    },
    {
        id: 2,
        title: 'ZDViewer',
        category: '3D Visualization',
        image: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
        description: 'A powerful browser-based 3D viewer and configurator. Enables businesses to showcase products in 3D with real-time customization, animation support, and seamless website integration.',
        link: 'https://zdviewer.com/',
        tech: ['Next.js', 'Three.js', 'WebGL'],
    },
    {
        id: 3,
        title: 'TVS Apache RTR 310 Configurator',
        category: '3D Configurator',
        image: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
        description: 'An immersive 360-degree 3D bike configurator. Users can customize colors, accessories, and view the bike from every angle in real-time.',
        link: 'https://www.tvsmotor.com/tvs-apache/apache-rtr-310/configurator',
        tech: ['React', 'Three.js', 'WebGL'],
    },


];

export default function Projects() {
    return (
        <section className={styles.projects} id="projects">
            <div className="container">
                <motion.h2
                    className={`gradient-text ${styles.heading}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Featured Work
                </motion.h2>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={`${styles.card} ${project.featured ? styles.featured : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className={styles.imageOverlay} style={{ background: project.image }}></div>

                            <div className={styles.content}>
                                <div className={styles.topInfo}>
                                    <span className={styles.category}>{project.category}</span>
                                    <div className={styles.techStack}>
                                        {project.tech.map(t => <span key={t} className={styles.techTag}>{t}</span>)}
                                    </div>
                                </div>

                                <div className={styles.mainInfo}>
                                    <h3 className={styles.title}>{project.title}</h3>
                                    <p className={styles.description}>{project.description}</p>
                                    <a href={project.link} className={styles.link}>
                                        View Project <span className={styles.arrow}>→</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
