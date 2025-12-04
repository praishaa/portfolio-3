"use client";

import styles from './Contact.module.css';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section className={styles.contact} id="contact">
            <div className={styles.glowBg}></div>
            <div className="container">
                <motion.h2
                    className={`gradient-text ${styles.heading}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Get In Touch
                </motion.h2>
                <motion.p
                    className={styles.subheading}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Have a project in mind or just want to say hi? I'd love to hear from you.
                </motion.p>

                <div className={styles.contentWrapper}>

                    {/* Contact Form - Left Side */}
                    <motion.div
                        className={`glass-panel ${styles.formContainer}`}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <h3 className={styles.formTitle}>Send a Message</h3>
                        <form className={styles.form}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name" className={styles.label}>Name</label>
                                <input type="text" id="name" className={styles.input} placeholder="John Doe" />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="email" className={styles.label}>Email</label>
                                <input type="email" id="email" className={styles.input} placeholder="john@example.com" />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="message" className={styles.label}>Message</label>
                                <textarea id="message" rows={5} className={styles.textarea} placeholder="Your message here..."></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                <span>Send Message</span>
                                <div className={styles.btnGlow}></div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </button>
                        </form>
                    </motion.div>

                    {/* Social Tiles - Right Side */}
                    <div className={styles.socialGrid}>
                        <motion.a
                            href="mailto:raghavjayateerth@gmail.com"
                            className={`${styles.card} ${styles.emailCard}`}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <div className={styles.iconWrapper}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div>
                                <h3 className={styles.cardTitle}>Email</h3>
                                <p className={styles.cardText}>raghavjayateerth@gmail.com</p>
                            </div>
                            <div className={styles.arrow}>↗</div>
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/rj2001/"
                            className={`${styles.card} ${styles.linkedinCard}`}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <div className={styles.iconWrapper}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </div>
                            <div>
                                <h3 className={styles.cardTitle}>LinkedIn</h3>
                                <p className={styles.cardText}>Let's connect</p>
                            </div>
                            <div className={styles.arrow}>↗</div>
                        </motion.a>

                        <motion.a
                            href="https://github.com/Raghavj2000"
                            className={`${styles.card} ${styles.githubCard}`}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <div className={styles.iconWrapper}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </div>
                            <div>
                                <h3 className={styles.cardTitle}>GitHub</h3>
                                <p className={styles.cardText}>View my code</p>
                            </div>
                            <div className={styles.arrow}>↗</div>
                        </motion.a>
                    </div>

                </div>

                <footer className={styles.footer}>
                    <p>&copy; {new Date().getFullYear()} Raghavendra. Built with Next.js & Glassmorphism.</p>
                </footer>
            </div>
        </section>
    );
}
