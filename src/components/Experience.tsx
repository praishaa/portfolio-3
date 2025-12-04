"use client";

import styles from './Experience.module.css';
import { motion } from 'framer-motion';

interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
}

const experiences: ExperienceItem[] = [
    {
        id: 1,
        role: 'Associate Software Developer',
        company: 'Ziniosedge Software Technologies',
        period: 'Aug 2023 - Present',
        description: 'Architected reusable React components using custom hooks and Context API, resulting in 30% faster development cycles. Implemented comprehensive Jest test suites achieving 60%+ coverage. Optimized component rendering using React.memo and useMemo, improving performance by 25%.',
        skills: ['React', 'Next.js', 'TypeScript', 'Jest', 'Redux'],
    },
    {
        id: 2,
        role: 'Software Engineer Intern',
        company: 'Oslash',
        period: 'Sept 2022 - Jan 2023',
        description: 'Developed an admin dashboard using React.js and Redux. Built reusable UI components with Material-UI for consistent design. Implemented real-time notifications using WebSocket, improving user engagement.',
        skills: ['React', 'Redux', 'Material-UI', 'WebSocket'],
    },
];

export default function Experience() {
    return (
        <section className={styles.experience} id="experience">
            <div className="container">
                <motion.h2
                    className={`gradient-text ${styles.heading}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Work History
                </motion.h2>
                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className={styles.timelineItem}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <div className={styles.timelineMarker}></div>
                            <div className={`glass-panel ${styles.card}`}>
                                <div className={styles.header}>
                                    <div>
                                        <h3 className={styles.role}>{exp.role}</h3>
                                        <span className={styles.company}>{exp.company}</span>
                                    </div>
                                    <span className={styles.period}>{exp.period}</span>
                                </div>
                                <p className={styles.description}>{exp.description}</p>
                                <div className={styles.skills}>
                                    {exp.skills.map((skill) => (
                                        <span key={skill} className={styles.skillTag}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
