import { Link } from 'react-router-dom'

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/courses/${course.id}`}
      className="card group flex h-full flex-col p-5 hover:border-brass/40 focus-visible:outline-none"
    >
      <p className="text-xs font-medium text-brass-dark">{course.level}</p>
      <p className="mt-1.5 font-medium leading-snug text-ink">{course.title}</p>
      <p className="mt-1 text-sm text-slate">{course.subject}</p>

      <div className="mt-4 space-y-1 text-sm text-slate">
        <p>Instructor: {course.instructor}</p>
        <p>{course.duration} · {course.mode} · {course.lessons} lessons</p>
      </div>

      <span className="mt-5 border-t border-line pt-4 text-sm font-medium text-ink transition-colors group-hover:text-brass-dark">
        View Course <span aria-hidden="true">→</span>
      </span>
    </Link>
  )
}
