import { useDispatch, useSelector } from 'react-redux'
import { setEducationLevel } from '../../features/journey/journeySlice'

const stages = [
  { id: 'class-10', label: 'Class 10', sub: 'Foundation' },
  { id: 'class-11-12', label: 'Class 11–12', sub: 'Higher Secondary' },
  { id: 'entrance', label: 'Entrance Preparation', sub: 'Competitive Exams' },
  { id: 'undergraduate', label: 'Undergraduate', sub: 'University' },
  { id: 'postgraduate', label: 'Postgraduate', sub: 'Advanced Studies' },
  { id: 'professional', label: 'Professional', sub: 'Career & Skills' },
  { id: 'research', label: 'Research', sub: 'Academic & Research Path' },
]

export default function StudentJourney() {
  const dispatch = useDispatch()
  const selected = useSelector((s) => s.journey.educationLevel)

  return (
    <section className="border-b border-line">
      <div className="container-content py-16">
        <p className="eyebrow mb-2">Step 1</p>
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-8">
          Where are you in your journey?
        </h2>

        <div className="flex overflow-x-auto gap-3 pb-2 -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap">
          {stages.map((stage, i) => (
            <button
              key={stage.id}
              onClick={() => dispatch(setEducationLevel(stage.id))}
              className={`flex-shrink-0 text-left w-52 md:w-auto md:flex-1 rounded-xl border px-5 py-4 transition-colors ${
                selected === stage.id
                  ? 'border-brass bg-brass/5'
                  : 'border-line hover:border-ink/30'
              }`}
            >
              <span className="text-xs text-slate">{String(i + 1).padStart(2, '0')}</span>
              <p className="mt-1.5 text-ink font-medium">{stage.label}</p>
              <p className="text-sm text-slate">{stage.sub}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
