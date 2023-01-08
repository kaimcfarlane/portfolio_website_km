import React from 'react'
import styles from './Welcome.module.css'

export default function Welcome() {
  return (
    <div id={styles.welcomeContent}>
        <h2 id={styles.subtitle}>Hey I'm,</h2>
        <h1 id={styles.title}>Kai McFarlane</h1>
    </div>
  )
}
