import React from 'react';
import styles from './summary.module.css';
import {FaBriefcase, FaCode} from "react-icons/fa";
import {IoIosPeople} from "react-icons/io";

const Summary = () => {
    return (
        <div className={styles.summary}>
            <div className={styles.container}>
                <div className={styles.summaryItem}>
                    <div className={styles.iconContainer}>
                        <FaBriefcase/>
                    </div>
                    <span className={styles.bigText}>8+</span>
                    <span className={styles.descText}>Years of Experience</span>
                </div>
                <div className={styles.summaryItem}>
                    <div className={styles.iconContainer}>
                        <IoIosPeople/>
                    </div>
                    <span className={styles.bigText}>30+</span>
                    <span className={styles.descText}>Clients</span>
                </div>
                <div className={styles.summaryItem}>
                    <div className={styles.iconContainer}>
                        <FaCode/>
                    </div>
                    <span className={styles.bigText}>30+</span>
                    <span className={styles.descText}>Projects</span>
                </div>
            </div>
        </div>
    );
};

export default Summary;
