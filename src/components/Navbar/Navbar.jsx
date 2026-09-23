import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Search } from 'lucide-react'
import CountryTicker from '../CountryTicker/CountryTicker'

const links = [
  { to: '/', label: 'Home' },
  { to: '/professors', label: 'Find a Professor' },
  { to: '/subjects', label: 'Subjects' },
  { to: '/universities', label: 'Universities' },
  { to: '/countries', label: 'Countries' },
  { to: '/courses', label: 'Courses' },
  { to: '/mentoring', label: 'Mentoring' },
  { to: '/career-guidance', label: 'Career Guidance' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const focusSearch = () => {
    if (location.pathname !== '/') {
      navigate('/#global-search')
      return
    }

    const search = document.getElementById('global-search')
    search?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    search?.querySelector('input')?.focus()
  }

  useEffect(() => {
    if (location.hash !== '#global-search') return undefined
    const frame = requestAnimationFrame(() => {
      const search = document.getElementById('global-search')
      search?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      search?.querySelector('input')?.focus()
    })
    return () => cancelAnimationFrame(frame)
  }, [location.hash])

  return (
    <header className="sticky top-0 z-40">
      <CountryTicker />
      <div className="bg-paper/95 backdrop-blur border-b border-line">
        <div className="container-content flex items-center gap-6 min-h-16 py-3">
          <Link to="/" className="brand-link flex items-center gap-2">
            <span className="font-display text-xl text-ink">Akademix</span>
          </Link>

          <nav className="hidden xl:flex flex-1 items-center justify-center gap-4 2xl:gap-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `nav-link whitespace-nowrap text-sm transition-colors ${
                    isActive ? 'is-active text-ink font-medium' : 'text-slate'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-4">
            <button aria-label="Search" onClick={focusSearch} className="text-slate hover:text-ink transition-colors">
              <Search size={18} />
            </button>
            <button className="text-sm text-slate hover:text-ink transition-colors">Login</button>
            <Link to="/professors" className="btn-primary">
              Get Guidance
            </Link>
          </div>

          <button
            className="xl:hidden text-ink p-2 -mr-2 rounded-full hover:bg-stone transition-colors"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu xl:hidden bg-paper border-b border-line">
          <nav className="container-content flex flex-col py-4 gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `mobile-nav-link py-2.5 text-sm border-b border-line/70 last:border-none ${
                    isActive ? 'is-active text-ink font-medium' : 'text-slate'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/professors"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 self-start"
            >
              Get Guidance
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
