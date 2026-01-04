"use client";

import styles from "./Projects.module.css";
import { motion } from "framer-motion";

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
    title: "Combat 24",
    category: "Fitness & Lifestyle",
    image: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)",
    description:
      "A premium martial arts and fitness training platform offering class schedules, personal coaching, and membership management. Built for a seamless user experience.",
    link: "https://combat24.in/",

    tech: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
  },
  {
    id: 2,
    title: "SkillSync",
    category: "Corporate Ecosystem Efficiency",
    image: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
    description:
      "A web application designed to help employees identify and connect with colleagues based on skill sets, improving collaboration and problem-solving.",
    link: "",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "GenSave AI",
    category: "Finance coach",
    image: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
    description:
      "A mobile finance assistant that tracks expenses, visualizes spending trends, and provides intelligent insights using a scalable cloud backend.",
    link: "https://github.com/praishaa/finance-coach/releases/tag/v1.0.0",
    tech: ["dart", "node.js", "mongoDB"],
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
              className={`${styles.card} ${
                project.featured ? styles.featured : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div
                className={styles.imageOverlay}
                style={{ background: project.image }}
              ></div>

              <div className={styles.content}>
                <div className={styles.topInfo}>
                  <span className={styles.category}>{project.category}</span>
                  <div className={styles.techStack}>
                    {project.tech.map((t) => (
                      <span key={t} className={styles.techTag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.mainInfo}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  {project.link ? (
                    <a
                      href={project.link}
                      className={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project <span className={styles.arrow}>→</span>
                    </a>
                  ) : (
                    <span className={styles.comingSoon}>Coming Soon</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
