"use client";

import styles from "./Experience.module.css";
import { motion } from "framer-motion";

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
    role: "Intern",
    company: "Ziniosedge Software Technologies",
    period: "Apr 2025 - May 2025",
    description:
      "Gained hands-on experience in modern web development using HTML, CSS, JavaScript, and React. Built interactive and responsive web pages and developed a project aimed at identifying and matching individuals based on skill sets within a company ecosystem, providing an introduction to full-stack development workflows.",
    skills: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    role: "DAQ engineer",
    company: "Team Manipal Racing",
    period: "Aug 2025 - Present",
    description:
      "Working as a Data Acquisition (DAQ) Engineer for an ATV racing team, responsible for collecting, analyzing, and interpreting vehicle sensor data to improve performance and reliability. Assisted in integrating sensors, validating data pipelines, and collaborating with mechanical and electrical teams to support data-driven engineering decisions during testing and racing.",
    skills: ["Sensors", "Arduino IDE", "Data Analysis"],
  },
  {
    id: 3,
    role: "Web Development Team Member",
    company: "ACM-W Manipal Chapter",
    period: "Aug 2025-Present",
    description:
      "Active member of ACM-W Manipal, a women-led technical club, currently contributing to the development of the club’s official website.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
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
                    <span key={skill} className={styles.skillTag}>
                      {skill}
                    </span>
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
