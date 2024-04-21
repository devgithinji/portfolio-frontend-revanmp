"use client"
import React from 'react';
import styles from './hero.module.css';
import Button from "@/components/Button";
import SocialIcons from "@/components/socialicons/SocialIcons";
import {BsArrowUpRight} from "react-icons/bs";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.contentSection}>
                    <h1 className={styles.heroMainText}>I'm <span>Dennis Githinji</span>, Full Stack <br/> Software
                        Engineer</h1>
                    <p>
                        Experienced Full Stack Software Engineer crafting innovative solutions and enhancing user
                        experiences.
                    </p>
                    <div className={styles.btnSection}>
                        <Button onclick={() => {
                        }}>About Me</Button>
                        <Button onclick={() => {
                        }} className="btnDark">Download CV</Button>
                    </div>
                </div>
                <div className={styles.photoSection}>
                    <div className={styles.heroImgContainer}>
                        <img src="/heroImg.png" className={styles.heroImage} alt="hero image"/>
                        <div className={styles.heroImgBtm}>
                            <div className={styles.heroIconContainer}>
                                <BsArrowUpRight className={styles.heroImgIcon}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.followMe}>
                        <span>Follow me on :</span>
                        <SocialIcons className={styles.socialIcons} rotate={90}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
