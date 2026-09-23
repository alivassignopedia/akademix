import { courses } from '../../data/courses'
import CourseCard from '../../components/CourseCard/CourseCard'

export default function Courses() {
  return (
    <div className="container-content py-14">
      <p className="eyebrow mb-2">Learn with Akademix</p>
      <h1 className="font-display text-4xl text-ink mb-3">Courses</h1>
      <p className="text-slate max-w-xl mb-10">
        Structured courses across school, undergraduate and postgraduate levels, taught by
        Akademix experts.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </div>
  )
}
