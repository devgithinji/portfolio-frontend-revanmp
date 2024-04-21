"use client"
import React, {useState} from 'react';
import styles from './aboutme.module.css';
import SocialIcons from "@/components/socialicons/SocialIcons";
import Button from "@/components/Button";


const AboutMe = () => {
    const [active, setActive] = useState('about-me');

    return (
        <div className={styles.aboutMe}>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <img src="./heroImg.png" alt="about me image"/>
                </div>
                <div className={styles.mainContent}>
                    <div className={styles.tabContainer}>
                        <div className={`${styles.tab} ${active === 'about-me' ? styles.tabActive : ''}`}
                             onClick={() => setActive('about-me')}>
                            <span>About Me</span>
                            {active === 'about-me' && <div className={styles.marker}></div>}
                        </div>
                        <div className={`${styles.tab} ${active === 'skills' ? styles.tabActive : ''}`}
                             onClick={() => setActive('skills')}>
                            <span>Skills</span>
                            {active === 'skills' && <div className={styles.marker}></div>}
                        </div>
                        <div className={`${styles.tab} ${active === 'education' ? styles.tabActive : ''}`}
                             onClick={() => setActive('education')}>
                            <span>Education</span>
                            {active === 'education' && <div className={styles.marker}></div>}
                        </div>
                        <div className={`${styles.tab} ${active === 'work' ? styles.tabActive : ''}`}
                             onClick={() => setActive('work')}>
                            <span>Work</span>
                            {active === 'work' && <div className={styles.marker}></div>}
                        </div>
                    </div>
                    {active === 'about-me' && (
                        <div className={styles.aboutMeContent}>
                            <p>
                                Results-driven Full Stack Software Engineer skilled in web and mobile development with
                                expertise in Java, JavaScript, and Python. Proven track record in optimizing
                                architectures
                                and implementing DevOps strategies. Passionate about innovation and continuous learning.
                            </p>
                            <div className={styles.btnSection}>
                                <Button onclick={() => {
                                }}>Hire Me</Button>
                                <div className={styles.followMe}>
                                    <p>Follow Me on:</p>
                                    <SocialIcons/>
                                </div>
                            </div>
                        </div>
                    )}
                    {active === 'skills' && (
                        <div className={styles.skillsContainer}>
                            <div className={styles.skillItem}>
                                <div className={styles.bullet}></div>
                                <span>Front End:</span>
                                <p>javascript, react, vue, angular</p>
                            </div>
                            <div className={styles.skillItem}>
                                <div className={styles.bullet}></div>
                                <span>Back End:</span>
                                <p>javascript, react, vue, angular</p>
                            </div>
                            <div className={styles.skillItem}>
                                <div className={styles.bullet}></div>
                                <span>Databases:</span>
                                <p>javascript, react, vue, angular</p>
                            </div>
                        </div>
                    )}
                    {active === 'education' && (
                        <div className={styles.educationContainer}>
                            <div className={styles.educationItem}>
                                <div className={styles.upperPart}>
                                    <span className={styles.instCat}>University</span>
                                    <span>Aug 2021 - Sep 2022</span>
                                </div>
                                <div className={styles.lowerPart}>
                                    <span className={styles.instName}>Kisii University</span>
                                    <span>2nd Class Hons Upper Division</span>
                                </div>
                            </div>
                            <div className={styles.educationItem}>
                                <div className={styles.upperPart}>
                                    <span className={styles.instCat}>University</span>
                                    <span>Aug 2021 - Sep 2022</span>
                                </div>
                                <div className={styles.lowerPart}>
                                    <span className={styles.instName}>Kisii University</span>
                                    <span>2nd Class Hons Upper Division</span>
                                </div>
                            </div>
                            <div className={styles.educationItem}>
                                <div className={styles.upperPart}>
                                    <span className={styles.instCat}>University</span>
                                    <span>Aug 2021 - Sep 2022</span>
                                </div>
                                <div className={styles.lowerPart}>
                                    <span className={styles.instName}>Kisii University</span>
                                    <span>2nd Class Hons Upper Division</span>
                                </div>
                            </div>
                        </div>
                    )}
                    {active === 'work' && (
                        <div className={styles.workContainer}>
                            <div className={styles.workItem}>
                                <div className={styles.upperPart}>
                                    <span className={styles.instName}>Techchimp Solutions</span>
                                    <span>Aug 2021 - Sep 2022</span>
                                </div>
                                <div className={styles.lowerPart}>
                                    <span>Achievements</span>
                                    <div className={styles.achievementItem}>
                                        <div className={styles.bullet}></div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur enim
                                            eveniet ex iure quae suscipit?</p>
                                    </div>
                                    <div className={styles.achievementItem}>
                                        <div className={styles.bullet}></div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur enim
                                            eveniet ex iure quae suscipit?</p>
                                    </div>
                                    <div className={styles.achievementItem}>
                                        <div className={styles.bullet}></div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur enim
                                            eveniet ex iure quae suscipit?</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.workItem}>
                                <div className={styles.upperPart}>
                                    <span className={styles.instName}>Techchimp Solutions</span>
                                    <span>Aug 2021 - Sep 2022</span>
                                </div>
                                <div className={styles.lowerPart}>
                                    <span>Achievements</span>
                                    <div className={styles.achievementItem}>
                                        <div className={styles.bullet}></div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur enim
                                            eveniet ex iure quae suscipit?</p>
                                    </div>
                                    <div className={styles.achievementItem}>
                                        <div className={styles.bullet}></div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur enim
                                            eveniet ex iure quae suscipit?</p>
                                    </div>
                                    <div className={styles.achievementItem}>
                                        <div className={styles.bullet}></div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur enim
                                            eveniet ex iure quae suscipit?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
