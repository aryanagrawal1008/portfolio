import { useEffect, useRef, useState } from 'react'
import { personal } from '../data/portfolio'
import styles from './Contact.module.css'

const SOCIALS = [
  { label: 'GitHub',    key: 'github',    icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )},
  { label: 'LinkedIn',  key: 'linkedin',  icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )},
  { label: 'Twitter',   key: 'twitter',   icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )},
  { label: 'Instagram', key: 'instagram', icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  )},
]

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => { setStatus('sent'); setForm({ name: '', email: '', message: '' }) }, 1400)
  }

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <p className="section-tag">// get in touch</p>
        <h2 className="section-title">Let's <span>Work Together</span></h2>
        <p className="section-sub">Have a project in mind or just want to connect? My inbox is always open.</p>

        <div className={styles.grid}>
          {/* Left: Info */}
          <div className={`${styles.infoCol} reveal`}>
            <div className={styles.emailCard}>
              <span className={styles.emailIcon}>✉️</span>
              <div>
                <p className={styles.emailLabel}>Email me at</p>
                <a href={`mailto:${personal.email}`} className={styles.emailVal}>{personal.email}</a>
              </div>
            </div>

            <div className={styles.locationCard}>
              <span className={styles.emailIcon}>📍</span>
              <div>
                <p className={styles.emailLabel}>Based in</p>
                <p className={styles.emailVal}>{personal.location}</p>
              </div>
            </div>

            <p className={styles.socialLabel}>Find me on</p>
            <div className={styles.socials}>
              {SOCIALS.filter(s => personal[s.key]).map(s => (
                <a
                  key={s.key}
                  href={personal[s.key]}
                  target="_blank" rel="noreferrer"
                  className={styles.socialBtn}
                  title={s.label}
                >
                  {s.icon}
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className={`card ${styles.formCard} reveal`} style={{ transitionDelay: '0.1s' }}>
            {status === 'sent' ? (
              <div className={styles.successMsg}>
                <span className={styles.successIcon}>✓</span>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button className="btn btn-outline" onClick={() => setStatus('idle')}>Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>Your Name</label>
                    <input
                      className={styles.input}
                      type="text" placeholder="John Doe" required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Email Address</label>
                    <input
                      className={styles.input}
                      type="email" placeholder="john@example.com" required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Message</label>
                  <textarea
                    className={styles.textarea}
                    rows={5} placeholder="Tell me about your project or idea..." required
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  />
                </div>
                <button type="submit" className="btn btn-green" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
