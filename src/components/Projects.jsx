import { useEffect, useRef } from 'react'
import { projects } from '../data/portfolio'
import styles from './Projects.module.css'

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <p className="section-tag">// what i've built</p>
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <p className="section-sub">A selection of real-world projects I've designed and built from scratch.</p>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`${styles.card} card reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Header */}
              <div className={styles.cardTop}>
                <span className={styles.num}>0{p.id}</span>
                <div className={styles.cardLinks}>
                  {p.github && p.github !== '#' && (
                    <a href={p.github} target="_blank" rel="noreferrer" className={styles.iconLink} title="GitHub">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {p.live && p.live !== '#' && (
                    <a href={p.live} target="_blank" rel="noreferrer" className={styles.iconLink} title="Live Demo">↗</a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.subtitle}>{p.subtitle}</p>
              <p className={styles.desc}>{p.description}</p>

              {/* Features */}
              <ul className={styles.features}>
                {p.features.map((f, j) => (
                  <li key={j} className={styles.feature}>
                    <span className={styles.featureDot}>▸</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className={styles.tags}>
                {p.tech.slice(0, 4).map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
                {p.tech.length > 4 && (
                  <span className={styles.tagMore}>+{p.tech.length - 4}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
