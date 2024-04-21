"use client"
import React, {useState} from 'react';
import Button from "@/components/Button";
import Image from "next/image";
import Logo from "../../../public/logo.png"
import styles from "./header.module.css"
import {IoMdClose} from "react-icons/io";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);


    const CloseButton = ({onClick}) => (<IoMdClose className={styles.closeBtn} onClick={onClick}/>);

    const MenuButton = ({openMenu}) => (
        <div className={styles.menuBtn} onClick={openMenu}>
            <div className={styles.menuBar}></div>
            <div className={`${styles.menuBar} ${styles.centerBar}`}></div>
            <div className={styles.menuBar}></div>
        </div>
    );

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image src={Logo} className={styles.logoImg} alt="logo"/>
                    <span className={styles.logoName}>Dennis</span>
                </div>
                <ul className={styles.mainMenu} style={{display: isOpen ? "flex" : "none"}}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Project</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <Button className={styles.hireMeButton}>Hire Me</Button>
                </ul>
                <Button className={styles.hireMeButton}>Hire Me</Button>
                {isOpen ? <CloseButton onClick={() => setIsOpen(false)}/> :
                    <MenuButton openMenu={() => setIsOpen(true)}/>}
            </div>
        </div>
    );
};

export default Header;
