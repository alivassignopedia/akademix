import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { careerPaths } from '../../data/careerPaths'
import { allSubjects } from '../../data/subjects'
import { departments } from '../../data/departments'
import { countries } from '../../data/countries'
import { courses } from '../../data/courses'
import CountryFlag from '../UI/CountryFlag'

const levels = ['School', 'Undergraduate', 'Postgraduate', 'Professional', 'Research']
const degrees = ['Certificate', 'Diploma', "Bachelor's degree", "Master's degree", 'Doctorate']

export default function CareerExplorer() {
  const [path, setPath] = useState({ interest: '', level: '', subject: '', department: '', degree: '', country: '' })
  const [step, setStep] = useState(0)
  const update = (key, value) => setPath((current) => ({ ...current, [key]: value }))
  const availableDepartments = departments.filter((department) => !path.subject || department.subjects.includes(path.subject))
  const availableCourses = useMemo(
    () => courses.filter((course) => (!path.subject || course.subject === path.subject) && (!path.level || course.level === path.level)),
    [path.subject, path.level]
  )
  const careers = path.subject ? (careerPaths[path.subject] || ['Researcher', 'Subject Specialist', 'Academic Consultant', 'Industry Professional']) : []
  const steps = [
    { key: 'interest', label: 'Interest', options: ['Technology', 'Business', 'Health', 'Creative', 'Society', 'Science'] },
    { key: 'level', label: 'Education level', options: levels },
    { key: 'subject', label: 'Subject', options: allSubjects.map((subject) => subject.name) },
    { key: 'department', label: 'Department', options: availableDepartments.map((department) => department.name) },
    { key: 'degree', label: 'Degree', options: degrees },
    { key: 'country', label: 'Country', options: countries },
  ]
  const activeStep = steps[step]
  const isLastStep = step === steps.length - 1
  const isComplete = Object.values(path).every(Boolean)

  const goToNextStep = () => {
    if (!path[activeStep.key]) return
    if (isLastStep) {
      document.getElementById('career-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    setStep(step + 1)
  }

  return (
    <section className="border-b border-line">
      <div className="container-content py-16">
        <p className="eyebrow mb-2">Career guidance</p>
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-3">What can you become?</h2>
        <p className="text-slate max-w-xl mb-8">Build a study route one decision at a time, then explore the courses and career areas that fit.</p>

        <div className="flex gap-1 mb-8">
          {steps.map((item, index) => (
            <button
              key={item.key}
              onClick={() => setStep(index)}
              className={`h-1.5 flex-1 rounded-full transition-colors ${path[item.key] ? 'bg-brass' : index === step ? 'bg-ink' : 'bg-line'}`}
              aria-label={`Go to ${item.label}`}
            />
          ))}
        </div>

        <div className="card p-5 md:p-6">
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <p className="text-xs uppercase tracking-wider text-slate">Step {step + 1} of {steps.length}</p>
              <h3 className="font-display text-2xl text-ink mt-1">Choose your {activeStep.label.toLowerCase()}</h3>
            </div>
            {path.subject && <span className="text-sm text-brass-dark">{path.subject}</span>}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-64 overflow-y-auto pr-1">
            {activeStep.options.map((option) => {
              const isCountry = activeStep.key === 'country'
              const value = isCountry ? option.name : option
              return (
                <button
                  key={isCountry ? option.code : option}
                  onClick={() => {
                    update(activeStep.key, value)
                    if (!isLastStep) setStep(step + 1)
                  }}
                  className={`text-left rounded-lg border px-4 py-3 text-sm transition-colors ${path[activeStep.key] === value ? 'border-brass bg-brass/5 text-ink' : 'border-line text-slate hover:border-ink/30 hover:text-ink'}`}
                >
                  {isCountry ? <span className="inline-flex items-center gap-2"><CountryFlag country={option} /> {option.name}</span> : option}
                </button>
              )
            })}
          </div>

          <div className="flex items-center justify-between mt-6">
            <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="text-sm text-slate hover:text-ink disabled:opacity-30">&larr; Back</button>
            <button onClick={goToNextStep} disabled={!path[activeStep.key]} className="btn-primary disabled:opacity-40">
              {isLastStep ? 'View my pathway' : 'Next →'}
            </button>
          </div>
        </div>

        {isComplete && (
          <div id="career-results" className="mt-8 grid scroll-mt-8 lg:grid-cols-[1fr_1fr] gap-8">
            <div>
              <p className="eyebrow mb-2">Your pathway</p>
              <h3 className="font-display text-2xl text-ink mb-4">{path.degree} in {path.subject}</h3>
              <div className="flex flex-wrap gap-2">
                {careers.map((role) => <span key={role} className="card px-4 py-3 text-sm text-ink">{role}</span>)}
              </div>
            </div>
            <div className="card bg-stone p-5">
              <p className="text-xs uppercase tracking-wider text-brass-dark">Recommended next steps</p>
              <div className="mt-3 space-y-2 text-sm text-ink">
                <p>{availableCourses.length || 'New'} matching course options</p>
                <p>Explore {path.country} universities and professors</p>
                <p>Get guidance for {path.department}</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-5">
                <Link to="/professors" className="btn-primary">Find a Professor</Link>
                <Link to="/universities" className="btn-secondary">Explore Universities</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
