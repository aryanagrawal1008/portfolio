import { useState } from 'react'
import Loader       from './components/Loader'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Stack        from './components/Stack'
import Projects     from './components/Projects'
import Achievements from './components/Achievements'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <div className="bg-grid" />
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      {loaded && (
        <>
          <Navbar />
          <main>
            <Hero />
            <hr className="divider container" />
            <About />
            <hr className="divider container" />
            <Stack />
            <hr className="divider container" />
            <Projects />
            <hr className="divider container" />
            <Achievements />
            <hr className="divider container" />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
