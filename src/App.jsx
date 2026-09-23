import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    const main = document.querySelector('main')
    if (!main) return undefined

    const targets = main.querySelectorAll('section, .card')
    targets.forEach((target) => target.classList.add('reveal-target'))

    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('reveal-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <div className="site-root min-h-screen">
      <div className="ambient-scene" aria-hidden="true">
        <div className="ambient-grid" />
        <div className="ambient-orb ambient-orb-one" />
        <div className="ambient-orb ambient-orb-two" />
        <div className="ambient-orb ambient-orb-three" />
        <div className="ambient-ring ambient-ring-one" />
        <div className="ambient-ring ambient-ring-two" />
      </div>
      <div className="site-content min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 page-shell">
          <div key={location.pathname} className="route-view">
            <AppRoutes />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
