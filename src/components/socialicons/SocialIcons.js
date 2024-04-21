import React from 'react';
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import styles from './icons.module.css';

const SocialIcons = ({className, rotate}) => {
    return (
        <div className={`${styles.socialIcons} ${className}`}>
            <div className={styles.icon} style={{transform: rotate ? `rotate(${rotate}deg)` : 'none'}}>
                <FaGithub/>
            </div>
            <div className={styles.icon} style={{transform: rotate ? `rotate(${rotate}deg)` : 'none'}}>
                <FaLinkedin/>
            </div>
            <div className={styles.icon} style={{transform: rotate ? `rotate(${rotate}deg)` : 'none'}}>
                <FaTwitter/>
            </div>
        </div>
    );
};

export default SocialIcons;
