import { useEffect, useRef, useState } from 'react'
import { stack } from '../data/portfolio'
import styles from './Stack.module.css'

const FILTERS = [
  { key: 'all',      label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend',  label: 'Backend' },
  { key: 'database', label: 'Database' },
  { key: 'devops',   label: 'DevOps' },
]

export default function Stack() {
  const [active, setActive] = useState('all')
  const ref = useRef(null)

  const all = Object.entries(stack).flatMap(([cat, items]) =>
    items.map(item => ({ ...item, cat }))
  )
  const visible = active === 'all' ? all : stack[active] ?? []

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="stack" className="section" ref={ref}>
      <div className="container">
        <p className="section-tag">// what i use</p>
        <h2 className="section-title">My Tech <span>Stack</span></h2>
        <p className="section-sub">Tools and technologies I work with daily.</p>

        {/* Filter Pills */}
        <div className={`${styles.filters} reveal`}>
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`${styles.filterBtn} ${active === f.key ? styles.filterActive : ''}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Skill Pills */}
        <div className={`${styles.pillGrid} reveal`} style={{ transitionDelay: '0.1s' }}>
          {visible.map((item, i) => (
            <div key={`${item.name}-${i}`} className={styles.pill}>
              <span className={styles.pillIcon}>{item.icon}</span>
              <span className={styles.pillName}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
