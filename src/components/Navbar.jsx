import { useEffect, useState } from 'react'
import { personal } from '../data/portfolio'
import styles from './Navbar.module.css'

const LINKS = [
  { label: '/about',        href: '#about'        },
  { label: '/stack',        href: '#stack'        },
  { label: '/projects',     href: '#projects'     },
  { label: '/achievements', href: '#achievements' },
  { label: '/contact',      href: '#contact'      },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('')
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight active section
  useEffect(() => {
    const ids = ['about', 'stack', 'projects', 'achievements', 'contact']
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.4 }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`${styles.nav} container`}>
        <a href="#" className={styles.logo} onClick={e => handleNav(e, '#hero')}>
          &lt;/<span>{personal.name.toLowerCase()}</span>&gt;
        </a>

        <div className={styles.links}>
          {LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`${styles.link} ${active === l.href.slice(1) ? styles.activeLink : ''}`}
              onClick={e => handleNav(e, l.href)}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button className={styles.hamburger} onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span className={open ? styles.span1Open : ''} />
          <span className={open ? styles.span2Open : ''} />
          <span className={open ? styles.span3Open : ''} />
        </button>
      </nav>

      {open && (
        <div className={styles.mobile}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} className={styles.mobLink} onClick={e => handleNav(e, l.href)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
