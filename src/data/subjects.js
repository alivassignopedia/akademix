import { departments } from './departments'

export const subjectCategories = [
  {
    slug: 'school-foundation',
    name: 'School & Foundation',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History', 'Geography', 'Economics', 'Political Science', 'Sociology', 'Psychology', 'Computer Science', 'Statistics', 'Environmental Science', 'Accountancy', 'Business Studies'],
  },
  ...departments.map((d) => ({ slug: d.slug, name: d.name, subjects: d.subjects })),
]

export const allSubjects = Array.from(
  new Set(subjectCategories.flatMap((c) => c.subjects))
).map((name) => ({ slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'), name }))

export const getSubjectBySlug = (slug) => allSubjects.find((s) => s.slug === slug)
