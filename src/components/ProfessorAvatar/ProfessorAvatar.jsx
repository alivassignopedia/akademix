import { useState } from 'react'

const sizes = {
  card: 'h-12 w-12 text-sm',
  profile: 'h-16 w-16 text-lg',
  compact: 'h-9 w-9 text-xs',
}

export default function ProfessorAvatar({ professor, size = 'card' }) {
  const [imageFailed, setImageFailed] = useState(false)
  const initials = professor.name
    .replace(/^(Dr\.|Prof\.)\s*/, '')
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  return (
    <div className={`${sizes[size]} relative flex flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-stone font-medium text-ink`}>
      <span aria-hidden="true">{initials}</span>
      {professor.avatar && !imageFailed && (
        <img
          src={professor.avatar}
          alt={`${professor.name} profile`}
          loading="lazy"
          onError={() => setImageFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  )
}
