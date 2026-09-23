export default function CountryFlag({ country, size = 'sm', className = '' }) {
  if (!country?.code) return null

  const dimensions = size === 'lg' ? 'h-12 w-[4.5rem]' : size === 'md' ? 'h-7 w-10' : 'h-4 w-6'

  return (
    <img
      src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
      alt={`${country.name} flag`}
      width={size === 'lg' ? 72 : size === 'md' ? 40 : 24}
      height={size === 'lg' ? 48 : size === 'md' ? 27 : 16}
      loading="lazy"
      className={`${dimensions} shrink-0 rounded-sm object-cover shadow-sm ${className}`}
    />
  )
}
