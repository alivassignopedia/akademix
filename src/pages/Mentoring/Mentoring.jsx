import { Link } from 'react-router-dom'
import { mentorCategories } from '../../data/mentors'

export default function Mentoring() {
  return (
    <div className="container-content py-14">
      <p className="eyebrow mb-2">One-to-one mentoring</p>
      <h1 className="font-display text-4xl text-ink mb-3">Find a mentor</h1>
      <p className="text-slate max-w-xl mb-10">
        Ongoing, personal support — separate from a one-off professor selection — for students who
        want a consistent guide through their journey.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {mentorCategories.map((m) => (
          <div key={m.slug} className="card p-6">
            <p className="text-ink font-medium">{m.name}</p>
            <p className="text-sm text-slate mt-2 leading-relaxed">{m.description}</p>
          </div>
        ))}
      </div>

      <Link to="/professors" className="btn-primary mt-10 inline-flex">
        Find a Mentor
      </Link>
    </div>
  )
}
