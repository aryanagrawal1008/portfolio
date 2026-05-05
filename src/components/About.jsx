import { useEffect, useRef, useState } from 'react'
import { personal } from '../data/portfolio'
import styles from './About.module.css'
import avatarImg from '/avatar.jpg'

const INTERESTS = ['Software Development', 'AI & Automation', 'Web Technologies', 'Problem-Solving', 'Open Source']

export default function About() {
  const ref = useRef(null)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <p className="section-tag">// who am i</p>
        <h2 className="section-title">A developer who cares about <span>the details</span></h2>
        <p className="section-sub">Building clean, scalable systems — one commit at a time.</p>

        <div className={styles.grid}>
          {/* Profile Card */}
          <div className={`${styles.profileCard} card reveal`}>
            <div className={styles.avatarRing}>
              {!imgError ? (
                <img
                  src={avatarImg}
                  alt={personal.fullName}
                  className={styles.avatarImg}
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className={styles.avatarInner}>{personal.name[0]}</div>
              )}
            </div>
            <p className={styles.handle}>{personal.handle}</p>
            <div className={styles.tags}>
              <span className={styles.tag}>Student &amp; Developer</span>
              <span className={styles.tag}>{personal.location}</span>
              <span className={styles.tag}>{personal.college}</span>
            </div>
            <div className={styles.statRow}>
              <div className={styles.stat}><span className={styles.statNum}>5+</span><span className={styles.statLabel}>Projects</span></div>
              <div className={styles.statDivider} />
              <div className={styles.stat}><span className={styles.statNum}>{personal.cgpa}</span><span className={styles.statLabel}>CGPA</span></div>
              <div className={styles.statDivider} />
              <div className={styles.stat}><span className={styles.statNum}>4+</span><span className={styles.statLabel}>Certs</span></div>
            </div>
          </div>

          {/* Bio Card */}
          <div className={`${styles.bioCard} card reveal`} style={{ transitionDelay: '0.1s' }}>
            <p className={styles.bio}>{personal.bio}</p>
            <blockquote className={styles.quote}>
              <span className={styles.quoteIcon}>"</span>
              {personal.mantra}
              <span className={styles.quoteIcon}>"</span>
            </blockquote>
            <div className={styles.interests}>
              {INTERESTS.map(i => <span key={i} className={styles.chip}>{i}</span>)}
            </div>
            <div className={styles.bioActions}>
              <a href={personal.resumeUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
                View Resume ↗
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
