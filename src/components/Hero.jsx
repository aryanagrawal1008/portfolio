import { useEffect, useState } from 'react'
import { personal } from '../data/portfolio'
import styles from './Hero.module.css'

const CODE_LINES = [
  { tokens: [{ t: 'keyword', v: 'const ' }, { t: 'var', v: 'developer' }, { t: 'op', v: ' = ' }, { t: 'string', v: '"Aryan Agrawal"' }, { t: 'op', v: ';' }] },
  { tokens: [] },
  { tokens: [{ t: 'keyword', v: 'const ' }, { t: 'var', v: 'skills' }, { t: 'op', v: ' = ' }, { t: 'bracket', v: '[' }] },
  { tokens: [{ t: 'indent', v: '  ' }, { t: 'string', v: '"React"' }, { t: 'op', v: ', ' }, { t: 'string', v: '"Next.js"' }, { t: 'op', v: ',' }] },
  { tokens: [{ t: 'indent', v: '  ' }, { t: 'string', v: '"Node.js"' }, { t: 'op', v: ', ' }, { t: 'string', v: '"MongoDB"' }, { t: 'op', v: ',' }] },
  { tokens: [{ t: 'indent', v: '  ' }, { t: 'string', v: '"Python"' }, { t: 'op', v: ', ' }, { t: 'string', v: '"Tailwind CSS"' }] },
  { tokens: [{ t: 'bracket', v: '];' }] },
  { tokens: [] },
  { tokens: [{ t: 'keyword', v: 'const ' }, { t: 'var', v: 'passion' }, { t: 'op', v: ' = ' }, { t: 'string', v: '"building things that just work"' }, { t: 'op', v: ';' }] },
]

function TypedText({ text, speed = 60 }) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      setDisplayed(text.slice(0, ++i))
      if (i >= text.length) clearInterval(t)
    }, speed)
    return () => clearInterval(t)
  }, [text, speed])
  return <>{displayed}<span className={styles.cursor}>|</span></>
}

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.inner} container`}>
        {/* ── Left: Text ── */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            Available for opportunities
          </div>

          <h1 className={styles.name}>
            <TypedText text={personal.name} speed={90} />
          </h1>
          <p className={styles.role}>{personal.role}</p>
          <p className={styles.tagline}>{personal.tagline}</p>

          <div className={styles.btns}>
            <a href="#projects" className="btn btn-green"
              onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              View Projects →
            </a>
            <a href="#contact" className="btn btn-outline"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Contact Me
            </a>
          </div>

          <div className={styles.socials}>
            {personal.github    && <a href={personal.github}    target="_blank" rel="noreferrer" className={styles.socialLink}>GitHub</a>}
            {personal.linkedin  && <a href={personal.linkedin}  target="_blank" rel="noreferrer" className={styles.socialLink}>LinkedIn</a>}
            {personal.twitter   && <a href={personal.twitter}   target="_blank" rel="noreferrer" className={styles.socialLink}>Twitter</a>}
          </div>
        </div>

        {/* ── Right: Code Card ── */}
        <div className={styles.right}>
          {/* Floating decorators */}
          <div className={`${styles.floatBadge} ${styles.badgeCurly}`}>{'{}'}</div>
          <div className={`${styles.floatBadge} ${styles.badgeTag}`}>{'</>'}</div>

          {/* Sticky note */}
          <div className={styles.stickyNote}>
            <p className={styles.stickyTitle}>CODING MANTRA</p>
            <p className={styles.stickyText}>"{personal.mantra}"</p>
          </div>

          {/* Code snippet card */}
          <div className={styles.codeCard}>
            <div className={styles.codeHeader}>
              <div className={styles.dots}>
                <span className={styles.red}   />
                <span className={styles.yellow} />
                <span className={styles.green}  />
              </div>
              <span className={styles.fileName}>portfolio.js</span>
            </div>
            <div className={styles.codeBody}>
              {CODE_LINES.map((line, i) => (
                <div key={i} className={styles.codeLine}>
                  <span className={styles.lineNum}>{i + 1}</span>
                  <span className={styles.lineContent}>
                    {line.tokens.map((tok, j) => (
                      <span key={j} className={styles[tok.t]}>{tok.v}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <span className={styles.scrollText}>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
