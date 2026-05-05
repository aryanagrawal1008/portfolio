import { useEffect, useRef } from 'react'
import { achievements } from '../data/portfolio'
import styles from './Achievements.module.css'

const TYPE_LABEL = {
  hackathon:   'Hackathon',
  leadership:  'Leadership',
  certificate: 'Certificate',
}

export default function Achievements() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="achievements" className="section" ref={ref}>
      <div className="container">
        <p className="section-tag">// recognition &amp; growth</p>
        <h2 className="section-title">Achievements &amp; <span>Certifications</span></h2>
        <p className="section-sub">Milestones, certifications and recognitions along the journey.</p>

        <div className={styles.grid}>
          {achievements.map((item, i) => (
            <div
              key={item.id}
              className={`${styles.card} card reveal`}
              style={{ transitionDelay: `${i * 0.07}s`, '--accent': item.color }}
            >
              <div className={styles.top}>
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.typeBadge}>{TYPE_LABEL[item.type]}</span>
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <div className={styles.meta}>
                <span className={styles.issuer}>{item.issuer}</span>
                <span className={styles.dot}>·</span>
                <span className={styles.date}>{item.date}</span>
              </div>
              <p className={styles.desc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
