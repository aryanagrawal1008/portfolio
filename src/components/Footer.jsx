import { personal } from '../data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <a href="#" className={styles.logo}>&lt;/<span>{personal.name.toLowerCase()}</span>&gt;</a>
        <p className={styles.copy}>
          Made with <span className={styles.heart}>❤️</span> and <span className={styles.coffee}>☕</span> by{' '}
          <span className={styles.name}>{personal.name}</span>
        </p>
        <p className={styles.sub}>&copy; {new Date().getFullYear()} · All rights reserved</p>
      </div>
    </footer>
  )
}
