"use client";

import styles from "./About.module.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Visual Side */}
          <div className={styles.visualCol}>
            <div className={styles.imageCard}>
              <div className={styles.glow}></div>
              <div className={styles.codeSnippet}>
                <pre>
                  <code>
                    {`const developer = {
  name: "ISHA PRABHU",
  role: "Frontend Dev",
  skills: ["React", "Next.js"],
  exp: "6 Months",
  focus: "Performance"
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={styles.contentCol}>
            <h2 className={`gradient-text ${styles.heading}`}>About Me</h2>

            <div className={styles.bio}>
              <p>
                A detail-oriented{" "}
                <span className={styles.highlight}>Frontend Developer</span> A
                frontend enthusiast learning and growing by building projects
                and exploring different technologies.
              </p>
              <p>
                Hands-on experience with HTML, CSS, JavaScript, and React,
                having built 1–2 responsive websites. Familiar with
                component-based development and basic React concepts, with a
                strong interest in improving frontend skills.
              </p>
              <p>
                Focused on writing clean, efficient code and following best
                practices in testing and optimization. Passionate about creating
                effective tools and contributing to open-source projects.
              </p>
            </div>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>6+</span>
                <span className={styles.statLabel}>Months Exp.</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>∞</span>
                <span className={styles.statLabel}>Passion</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
