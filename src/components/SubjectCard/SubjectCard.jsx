import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function SubjectCard({ subject }) {
  return (
    <Link
      to={`/subjects/${subject.slug}`}
      className="group card p-5 flex items-center justify-between hover:border-ink/30 transition-colors"
    >
      <span className="text-ink text-sm font-medium">{subject.name}</span>
      <ArrowUpRight
        size={16}
        className="text-slate group-hover:text-brass-dark transition-colors flex-shrink-0"
      />
    </Link>
  )
}
