import React from 'react'
import styles from './Welcome.module.css'
import imageC from './selfPictures/selfie2.jpg'
import imageS from './KaiMcFarlaneSeniorPicture2.jpeg'

export default function Welcome() {
  return (
    <>
    <section id={styles.welcomeAll}>
    <div id={styles.welcomeContent}>
        <h2 id={styles.subtitle}>Hey I'm,</h2>
        <h1 id={styles.title}>Kai McFarlane</h1>
        <p2 id={styles.paragraph1}>Full-Stack Developer - CS Student</p2>
        <p1 id={styles.paragraph2}>I am a software developer driven by a love for creating exciting and impactful projects. I'm currently exploring Web-Development and pursuing a degree in computer science from the University of Florida.</p1>
        {/* I'm a Software Developer that loves to create exciting projects through code. */}
    </div>
    <div>
        <img id={styles.profilePic} alt='Logo' src={imageC}></img>
    </div>
    </section>
    <div id={styles.mouseContainer}>
        <div className={styles["icon-scroll"]}></div>
    </div>
    
    </>
  )
}
