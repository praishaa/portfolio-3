"use client";

import styles from './Skills.module.css';
import { motion } from 'framer-motion';

interface Skill {
    name: string;
    icon: string;
}

const skills: Skill[] = [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'RxJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rxjs/rxjs-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
];

export default function Skills() {
    // Duplicate skills for seamless infinite scroll
    const scrollingSkills = [...skills, ...skills];

    return (
        <section className={styles.skills} id="skills">
            <div className={styles.container}>
                <motion.h2
                    className={`gradient-text ${styles.heading}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Tech Arsenal
                </motion.h2>
                <motion.p
                    className={styles.subheading}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    A curated stack of technologies I use to build robust applications.
                </motion.p>

                <motion.div
                    className={styles.scroller}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <div className={styles.scrollerInner}>
                        {scrollingSkills.map((skill, index) => (
                            <div key={`${skill.name}-${index}`} className={styles.skillCard}>
                                <div className={styles.iconWrapper}>
                                    <img src={skill.icon} alt={skill.name} className={styles.icon} />
                                </div>
                                <span className={styles.skillName}>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className={`${styles.scroller} ${styles.reverse}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <div className={styles.scrollerInner}>
                        {scrollingSkills.map((skill, index) => (
                            <div key={`${skill.name}-rev-${index}`} className={styles.skillCard}>
                                <div className={styles.iconWrapper}>
                                    <img src={skill.icon} alt={skill.name} className={styles.icon} />
                                </div>
                                <span className={styles.skillName}>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
