import { useParams, Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfessorById } from '../../data/professors'
import { getCountryByCode } from '../../data/countries'
import { selectExpertForGuidance } from '../../features/professors/professorSlice'
import CountryFlag from '../../components/UI/CountryFlag'
import ProfessorAvatar from '../../components/ProfessorAvatar/ProfessorAvatar'

const availability = ['Mon 4:00 PM', 'Wed 6:30 PM', 'Sat 11:00 AM']

export default function ProfessorProfile() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const professor = getProfessorById(id)
  const selectedExperts = useSelector((s) => s.professors.selectedExperts)

  if (!professor) return <Navigate to="/professors" replace />

  const country = getCountryByCode(professor.countryCode)
  const isSelected = selectedExperts.includes(professor.id)

  return (
    <div className="container-content py-14">
      <Link to="/professors" className="text-sm text-slate hover:text-ink">
        ← Back to professors
      </Link>

      <div className="mt-6 grid lg:grid-cols-[1fr_320px] gap-10">
        <div>
          <div className="flex items-start gap-4">
            <ProfessorAvatar professor={professor} size="profile" />
            <div>
              <h1 className="font-display text-3xl text-ink">{professor.name}</h1>
              <p className="text-slate mt-1">{professor.title}</p>
              <p className="text-sm text-slate mt-1">
                <span className="inline-flex items-center gap-2"><CountryFlag country={country} /> {professor.university}, {professor.country}</span>
              </p>
            </div>
          </div>

          <section className="mt-10">
            <h2 className="font-display text-xl text-ink mb-3">Academic Background</h2>
            <p className="text-slate leading-relaxed">{professor.bio}</p>
            <p className="text-sm text-slate mt-3">
              {professor.experience} years of experience · Languages: {professor.languages.join(', ')}
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl text-ink mb-3">Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {professor.expertise.map((e) => (
                <span
                  key={e}
                  className="text-sm px-3 py-1.5 rounded-full bg-stone text-ink/80 border border-line"
                >
                  {e}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl text-ink mb-3">Subjects</h2>
            <div className="flex flex-wrap gap-2">
              {professor.subjects.map((s) => (
                <span
                  key={s}
                  className="text-sm px-3 py-1.5 rounded-full bg-stone text-ink/80 border border-line"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl text-ink mb-3">Guidance Areas</h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {professor.guidance.map((g) => (
                <li key={g} className="text-sm text-ink card px-4 py-3">
                  {g}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="lg:sticky lg:top-28 h-fit">
          <div className="card p-6">
            <p className="text-sm text-slate mb-3">Availability</p>
            <div className="space-y-2 mb-6">
              {availability.map((slot) => (
                <div key={slot} className="text-sm text-ink border border-line rounded-lg px-3 py-2">
                  {slot}
                </div>
              ))}
            </div>
            <button
              onClick={() => dispatch(selectExpertForGuidance(professor.id))}
              className={`w-full rounded-full px-5 py-3 text-sm font-medium transition-colors ${
                isSelected
                  ? 'bg-brass/10 text-brass-dark border border-brass/30'
                  : 'bg-ink text-paper hover:bg-ink-light'
              }`}
            >
              {isSelected ? 'Selected for Guidance' : 'Select This Professor'}
            </button>
          </div>
        </aside>
      </div>
    </div>
  )
}
