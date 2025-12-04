"use client";

import { useState, useEffect, useRef } from 'react';
import styles from './GamePopup.module.css';

interface GamePopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function GamePopup({ isOpen, onClose }: GamePopupProps) {
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(15);
    const [isPlaying, setIsPlaying] = useState(false);
    const [bugPosition, setBugPosition] = useState({ top: '50%', left: '50%' });
    const [highScore, setHighScore] = useState(0);

    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isOpen) {
            // Reset game state when opened
            setScore(0);
            setTimeLeft(15);
            setIsPlaying(false);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isPlaying && timeLeft > 0) {
            timerRef.current = setTimeout(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            endGame();
        }
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [isPlaying, timeLeft]);

    const startGame = () => {
        setIsPlaying(true);
        setScore(0);
        setTimeLeft(15);
        moveBug();
    };

    const endGame = () => {
        setIsPlaying(false);
        if (score > highScore) {
            setHighScore(score);
        }
    };

    const moveBug = () => {
        const top = Math.floor(Math.random() * 80) + 10 + '%';
        const left = Math.floor(Math.random() * 80) + 10 + '%';
        setBugPosition({ top, left });
    };

    const handleBugClick = () => {
        if (!isPlaying) return;
        setScore((prev) => prev + 1);
        moveBug();
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={`glass-panel ${styles.popup}`}>
                <button className={styles.closeBtn} onClick={onClose}>×</button>

                <h2 className={styles.title}>Catch the Bug! 🐛</h2>

                <div className={styles.stats}>
                    <div className={styles.statBox}>
                        <span className={styles.label}>Score</span>
                        <span className={styles.value}>{score}</span>
                    </div>
                    <div className={styles.statBox}>
                        <span className={styles.label}>Time</span>
                        <span className={`${styles.value} ${timeLeft < 5 ? styles.danger : ''}`}>{timeLeft}s</span>
                    </div>
                    <div className={styles.statBox}>
                        <span className={styles.label}>High Score</span>
                        <span className={styles.value}>{highScore}</span>
                    </div>
                </div>

                <div className={styles.gameArea}>
                    {!isPlaying && timeLeft === 15 && (
                        <div className={styles.startScreen}>
                            <button className={styles.startBtn} onClick={startGame}>Start Game</button>
                        </div>
                    )}

                    {!isPlaying && timeLeft === 0 && (
                        <div className={styles.gameOverScreen}>
                            <h3>Game Over!</h3>
                            <p>You caught {score} bugs.</p>
                            <button className={styles.startBtn} onClick={startGame}>Play Again</button>
                        </div>
                    )}

                    {isPlaying && (
                        <button
                            className={styles.bug}
                            style={{ top: bugPosition.top, left: bugPosition.left }}
                            onClick={handleBugClick}
                        >
                            🐛
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
