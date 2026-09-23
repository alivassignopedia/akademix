import { Link } from 'react-router-dom'
import SearchBar from '../Search/SearchBar'

export default function Hero() {
  return (
    <section className="hero-section border-b border-line">
      <div className="container-content py-16 md:py-24">
        <div className="hero-copy max-w-4xl flex flex-col justify-center">
          <p className="eyebrow mb-4">Academic guidance, from Class 10 onward</p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.08] text-ink">
            From Class 10 to Higher Studies.
            <br />
            Find the right guidance for every step.
          </h1>
          <p className="mt-6 text-slate text-base md:text-lg max-w-xl leading-relaxed">
            Learn from experienced educators, explore global universities, discover academic
            opportunities and connect with experts across subjects and disciplines.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/professors" className="btn-primary">
              Find Your Professor
            </Link>
            <Link to="/subjects" className="btn-secondary">
              Explore Subjects
            </Link>
          </div>
          <div className="mt-7 max-w-xl"><SearchBar /></div>
        </div>
      </div>
    </section>
  )
}
