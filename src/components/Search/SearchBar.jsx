import { useMemo, useState } from 'react'
import { Search as SearchIcon } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setSearchQuery } from '../../features/search/searchSlice'
import { professors } from '../../data/professors'
import { allSubjects } from '../../data/subjects'
import { universities } from '../../data/universities'
import { countries } from '../../data/countries'
import { departments } from '../../data/departments'
import { courses } from '../../data/courses'
import { mentorCategories } from '../../data/mentors'
import CountryFlag from '../UI/CountryFlag'

export default function SearchBar() {
  const dispatch = useDispatch()
  const query = useSelector((s) => s.search.searchQuery)
  const [focused, setFocused] = useState(false)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return null
    return {
      professors: professors.filter((p) => `${p.name} ${p.title} ${p.university} ${p.subjects.join(' ')} ${p.expertise.join(' ')}`.toLowerCase().includes(q)).slice(0, 4),
      subjects: allSubjects.filter((s) => s.name.toLowerCase().includes(q)).slice(0, 4),
      departments: departments.filter((d) => `${d.name} ${d.subjects.join(' ')}`.toLowerCase().includes(q)).slice(0, 4),
      universities: universities.filter((u) => `${u.name} ${u.city} ${u.country}`.toLowerCase().includes(q)).slice(0, 4),
      courses: courses.filter((course) => `${course.title} ${course.subject} ${course.level}`.toLowerCase().includes(q)).slice(0, 4),
      mentors: mentorCategories.filter((mentor) => `${mentor.name} ${mentor.description}`.toLowerCase().includes(q)).slice(0, 4),
      countries: countries.filter((c) => c.name.toLowerCase().includes(q)).slice(0, 4),
    }
  }, [query])

  const hasResults =
    results &&
    (results.professors.length ||
      results.subjects.length ||
      results.departments.length ||
      results.universities.length ||
      results.courses.length ||
      results.mentors.length ||
      results.countries.length)

  return (
    <div id="global-search" className="relative max-w-xl scroll-mt-28">
      <div className="flex items-center gap-2 border border-line rounded-full px-4 py-2.5 bg-white">
        <SearchIcon size={16} className="text-slate flex-shrink-0" />
        <input
          value={query}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="Search subjects, professors, universities, courses..."
          className="w-full bg-transparent outline-none text-sm placeholder:text-slate-light"
        />
      </div>

      {focused && query && (
        <div className="absolute mt-2 w-full card shadow-lg p-4 z-30 max-h-96 overflow-y-auto">
          {!hasResults && <p className="text-sm text-slate">No matches yet.</p>}

          {results.professors.length > 0 && (
            <div className="mb-3">
              <p className="text-xs text-slate mb-1.5">Professors</p>
              {results.professors.map((p) => (
                <Link
                  key={p.id}
                  to={`/professors/${p.id}`}
                  className="block text-sm text-ink py-1 hover:text-brass-dark"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          )}

          {results.subjects.length > 0 && (
            <div className="mb-3">
              <p className="text-xs text-slate mb-1.5">Subjects</p>
              {results.subjects.map((s) => (
                <Link
                  key={s.slug}
                  to={`/subjects/${s.slug}`}
                  className="block text-sm text-ink py-1 hover:text-brass-dark"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          )}

          {results.departments.length > 0 && (
            <div className="mb-3"><p className="text-xs text-slate mb-1.5">Departments</p>{results.departments.map((department) => <Link key={department.slug} to={`/professors?department=${department.slug}`} className="block text-sm text-ink py-1 hover:text-brass-dark">{department.name}</Link>)}</div>
          )}

          {results.universities.length > 0 && (
            <div className="mb-3">
              <p className="text-xs text-slate mb-1.5">Universities</p>
              {results.universities.map((u) => <Link key={u.id} to={`/universities/${u.id}`} className="block text-sm text-ink py-1 hover:text-brass-dark">{u.name}</Link>)}
            </div>
          )}

          {results.courses.length > 0 && <div className="mb-3"><p className="text-xs text-slate mb-1.5">Courses</p>{results.courses.map((course) => <Link key={course.id} to={`/courses/${course.id}`} className="block text-sm text-ink py-1 hover:text-brass-dark">{course.title}</Link>)}</div>}

          {results.mentors.length > 0 && <div className="mb-3"><p className="text-xs text-slate mb-1.5">Mentors</p>{results.mentors.map((mentor) => <Link key={mentor.slug} to="/mentoring" className="block text-sm text-ink py-1 hover:text-brass-dark">{mentor.name}</Link>)}</div>}

          {results.countries.length > 0 && (
            <div>
              <p className="text-xs text-slate mb-1.5">Countries</p>
              {results.countries.map((c) => (
                <Link
                  key={c.code}
                  to={`/countries/${c.code}`}
                  className="block text-sm text-ink py-1 hover:text-brass-dark"
                >
                  <span className="inline-flex items-center gap-2"><CountryFlag country={c} /> {c.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
