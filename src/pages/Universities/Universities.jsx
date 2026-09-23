import { useState, useMemo } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { universities } from '../../data/universities'
import { countries } from '../../data/countries'
import { professors } from '../../data/professors'
import UniversityCard from '../../components/UniversityCard/UniversityCard'
import ProfessorCard from '../../components/ProfessorCard/ProfessorCard'
import CountryFlag from '../../components/UI/CountryFlag'

export default function Universities() {
  const { id } = useParams()
  const [country, setCountry] = useState(null)

  if (id) {
    const university = universities.find((item) => item.id === id)
    if (!university) return <Navigate to="/universities" replace />
    const countryData = countries.find((item) => item.code === university.countryCode)
    const relatedProfessors = professors.filter((professor) => professor.university === university.name)
    return <div className="container-content py-14"><Link to="/universities" className="inline-flex items-center gap-2 text-sm text-slate hover:text-ink"><ArrowLeft size={15} /> All universities</Link><div className="mt-8 max-w-3xl"><p className="eyebrow mb-2">University profile</p><div className="flex items-start gap-4"><CountryFlag country={countryData} size="lg" /><div><h1 className="font-display text-4xl text-ink">{university.name}</h1><p className="text-slate mt-2">{university.city}, {university.country} · {university.type}</p></div></div></div><div className="mt-12 grid lg:grid-cols-[1fr_320px] gap-10"><main><section><h2 className="font-display text-2xl text-ink mb-4">Academic areas</h2><div className="flex flex-wrap gap-2">{university.departments.map((department) => <span key={department} className="rounded-full border border-line bg-stone px-3 py-1.5 text-sm text-ink">{department}</span>)}</div><h2 className="font-display text-2xl text-ink mt-10 mb-4">Popular subjects</h2><div className="flex flex-wrap gap-2">{university.popularSubjects.map((subject) => <Link key={subject} to={`/subjects/${subject.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="rounded-full border border-line px-3 py-1.5 text-sm text-slate hover:text-ink hover:border-ink/30">{subject}</Link>)}</div></section><section className="mt-12"><h2 className="font-display text-2xl text-ink mb-6">Related professors</h2>{relatedProfessors.length ? <div className="grid sm:grid-cols-2 gap-5">{relatedProfessors.map((professor) => <ProfessorCard key={professor.id} professor={professor} />)}</div> : <p className="text-slate">Related professor profiles are being added to this demo directory.</p>}</section></main><aside className="card bg-stone p-6 h-fit"><p className="eyebrow mb-2">International pathway</p><h2 className="font-display text-2xl text-ink">Plan your next step</h2><p className="text-sm text-slate mt-3">Explore professors, subjects, and country guidance connected to this university.</p><Link to={`/countries/${university.countryCode}`} className="btn-primary mt-6">Explore {university.country}</Link></aside></div></div>
  }

  const filtered = useMemo(
    () => (country ? universities.filter((u) => u.countryCode === country) : universities),
    [country]
  )

  return (
    <div className="container-content py-14">
      <p className="eyebrow mb-2">Explore universities</p>
      <h1 className="font-display text-4xl text-ink mb-3">Global universities</h1>
      <p className="text-slate max-w-xl mb-10">
        Explore a curated starting point of established universities across our supported countries.
        Always confirm current programmes, entry requirements, and deadlines with each university.
      </p>

      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setCountry(null)}
          className={`rounded-full border px-4 py-2 text-sm ${
            !country ? 'border-brass bg-brass/5' : 'border-line text-slate hover:text-ink'
          }`}
        >
          All countries
        </button>
        {countries.map((c) => (
          <button
            key={c.code}
            onClick={() => setCountry(c.code)}
            className={`rounded-full border px-4 py-2 text-sm ${
              country === c.code ? 'border-brass bg-brass/5' : 'border-line text-slate hover:text-ink'
            }`}
          >
            <span className="inline-flex items-center gap-2"><CountryFlag country={c} /> {c.name}</span>
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((u) => (
          <UniversityCard key={u.id} university={u} />
        ))}
      </div>
    </div>
  )
}
