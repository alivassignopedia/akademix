import { Link } from 'react-router-dom'
import { getCountryByCode } from '../../data/countries'
import CountryFlag from '../UI/CountryFlag'

export default function UniversityCard({ university }) {
  const country = getCountryByCode(university.countryCode)

  return (
    <div className="card p-5 flex flex-col h-full">
      <div className="flex items-start justify-between gap-3">
        <p className="text-ink font-medium leading-snug">{university.name}</p>
        <CountryFlag country={country} size="md" />
      </div>
      <p className="text-sm text-slate mt-1">
        {university.city}, {university.country} · {university.type}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {university.popularSubjects.map((s) => (
          <span
            key={s}
            className="text-xs px-2.5 py-1 rounded-full bg-stone text-ink/80 border border-line"
          >
            {s}
          </span>
        ))}
      </div>

      {university.international && (
        <span className="mt-3 text-xs text-brass-dark/80">Open to international students</span>
      )}

      <Link
        to={`/universities/${university.id}`}
        className="mt-5 pt-4 border-t border-line text-sm font-medium text-ink hover:text-brass-dark transition-colors"
      >
        Explore University
      </Link>
    </div>
  )
}
