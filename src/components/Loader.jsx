import { useEffect, useRef, useState } from 'react'
import styles from './Loader.module.css'

export default function Loader({ onDone }) {
  const [pct, setPct]       = useState(0)
  const [hiding, setHiding] = useState(false)
  const intervalRef         = useRef(null)
  const doneRef             = useRef(false)

  const finish = () => {
    if (doneRef.current) return
    doneRef.current = true
    clearInterval(intervalRef.current)
    setPct(100)
    // Start fade-out, then unmount
    setTimeout(() => {
      setHiding(true)
      setTimeout(onDone, 550)   // matches CSS transition duration
    }, 300)
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPct(p => {
        const next = p + Math.random() * 3.5 + 0.5
        if (next >= 100) {
          finish()
          return 100
        }
        return next
      })
    }, 55)
    return () => clearInterval(intervalRef.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={`${styles.overlay} ${hiding ? styles.hidden : ''}`}>
      <div className={styles.inner}>
        <div className={styles.logo}>&lt;/aryan&gt;</div>
        <div className={styles.barWrap}>
          <div className={styles.bar} style={{ width: `${pct}%` }} />
        </div>
        <div className={styles.pct}>{Math.floor(pct)}%</div>
      </div>
      <button className={styles.skip} onClick={finish}>Skip Intro</button>
    </div>
  )
}
