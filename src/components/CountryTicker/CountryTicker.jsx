import { Link } from 'react-router-dom'
import { countries } from '../../data/countries'
import CountryFlag from '../UI/CountryFlag'

export default function CountryTicker() {
  const track = [...countries, ...countries] // duplicated for seamless loop

  return (
    <div className="w-full bg-ink text-paper/90 overflow-hidden border-b border-white/10" aria-label="Explore countries">
      <div className="relative flex items-center h-9">
        <div className="flex w-max shrink-0 whitespace-nowrap animate-ticker transform-gpu hover:[animation-play-state:paused] motion-reduce:animate-none">
          {track.map((c, i) => (
            <Link
              key={`${c.code}-${i}`}
              to={`/countries/${c.code}`}
              className="flex shrink-0 items-center gap-2 px-4 sm:px-5 text-xs tracking-wide text-paper/80 hover:text-paper transition-colors"
            >
              <CountryFlag country={c} />
              <span className="whitespace-nowrap">{c.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
