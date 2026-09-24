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

    search?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })

    search?.querySelector('input')?.focus()
  }

  useEffect(() => {
    if (location.hash !== '#global-search') return undefined

    const frame = requestAnimationFrame(() => {
      const search = document.getElementById('global-search')

      search?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })

      search?.querySelector('input')?.focus()
    })

    return () => cancelAnimationFrame(frame)
  }, [location.hash])

  return (
    <header className="sticky top-0 z-50">
      {/* Country ticker */}
      <CountryTicker />

      {/* Main Navbar */}
      <div className="backdrop-blur-2xl bg-white/70 border-b border-stone-300/60 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">

          {/* =========================
              LOGO
          ========================== */}
          <Link
            to="/"
            className="flex items-center shrink-0 group"
            aria-label="Akademix Home"
          >
            <img
              src="/akademix-logo.png"
              alt="Akademix"
              className="
                h-14
                sm:h-16
                w-auto
                object-contain
                transition-transform
                duration-300
                group-hover:scale-[1.03]
              "
            />
          </Link>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <nav className="hidden xl:flex flex-1 items-center justify-center gap-4 2xl:gap-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative whitespace-nowrap text-[13px] 2xl:text-sm font-medium transition-colors hover:text-amber-700
                   
                   after:content-['']
                   after:absolute
                   after:left-0
                   after:-bottom-1
                   after:h-0.5
                   after:bg-gradient-to-r
                   after:from-amber-600
                   after:to-pink-400
                   after:transition-all
                   after:duration-300

                   ${
                     isActive
                       ? 'text-amber-700 after:w-full'
                       : 'text-slate-800 after:w-0 hover:after:w-full'
                   }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* =========================
              DESKTOP ACTIONS
          ========================== */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">

            {/* Search */}
            <button
              aria-label="Search"
              onClick={focusSearch}
              className="
                text-slate-800
                hover:text-amber-700
                transition-colors
              "
            >
              <Search size={18} />
            </button>

            {/* Login */}
            <button
              className="
                text-sm
                font-semibold
                text-slate-800
                hover:text-slate-950
                px-2
                py-2
                transition-colors
              "
            >
              Login
            </button>

            {/* Get Guidance */}
            <Link
              to="/professors"
              className="
                px-5
                py-2.5
                rounded-full
                bg-gradient-to-r
                from-amber-500
                to-amber-600
                hover:from-amber-600
                hover:to-amber-700
                text-white
                font-semibold
                text-sm
                shadow-lg
                shadow-amber-500/25
                transition-all
                transform
                hover:-translate-y-0.5
                active:translate-y-0
                whitespace-nowrap
              "
            >
              Get Guidance
            </Link>
          </div>

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}
          <button
            className="
              xl:hidden
              p-2
              -mr-2
              rounded-lg
              text-slate-800
              hover:bg-stone-200/60
              transition-colors
            "
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}
      {open && (
        <div
          className="
            xl:hidden
            bg-white/95
            border-b
            border-stone-200
            backdrop-blur-2xl
            shadow-xl
          "
        >
          <nav className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">

            {/* Mobile Navigation Links */}
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2.5
                   text-sm
                   font-semibold
                   border-b
                   border-stone-200/70
                   last:border-none
                   transition-colors
                   hover:text-amber-700

                   ${
                     isActive
                       ? 'text-amber-700'
                       : 'text-slate-800'
                   }`
                }
              >
                {l.label}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <Link
              to="/professors"
              onClick={() => setOpen(false)}
              className="
                mt-4
                w-full
                text-center
                py-3
                rounded-full
                bg-gradient-to-r
                from-amber-500
                to-amber-600
                text-white
                font-semibold
                text-sm
                shadow-lg
                shadow-amber-500/25
                transition-all
                hover:from-amber-600
                hover:to-amber-700
              "
            >
              Find Your Professor
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}