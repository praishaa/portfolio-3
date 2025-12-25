"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";
import GamePopup from "./GamePopup";

export default function Navbar() {
  const [isGameOpen, setIsGameOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          {/* Logo */}
          <a href="#" className={styles.logoBtn} aria-label="Home">
            <svg
              className={styles.logoSvg}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Rounded square */}
              <rect
                x="2"
                y="2"
                width="36"
                height="36"
                rx="8"
                stroke="currentColor"
                strokeWidth="2"
                fill="rgba(124, 58, 237, 0.15)"
              />

              {/* Letter I */}
              <line
                x1="20"
                y1="12"
                x2="20"
                y2="28"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </a>

          {/* Desktop Links */}
          <div className={`${styles.links} ${styles.desktopLinks}`}>
            <a href="#about" className={styles.link}>
              About
            </a>
            <a href="#experience" className={styles.link}>
              Experience
            </a>
            <a href="#projects" className={styles.link}>
              Projects
            </a>
            <a href="#contact" className={styles.link}>
              Contact
            </a>

            <button
              className={styles.gameTrigger}
              onClick={() => setIsGameOpen(true)}
              title="Play a game!"
            >
              <span className={styles.gameIcon}>👾</span>
            </button>
          </div>
        </div>
      </nav>

      <GamePopup isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
    </>
  );
}
