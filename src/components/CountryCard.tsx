import { Country } from '../types'

type Props = {
  country: Country
}

function CountryCard ({ country }: Props) {
  return (
    <article className='max-w-[530px] overflow-hidden rounded-md bg-neutral-700 text-neutral-100'>
      <img src={country.flags.svg} alt={country.name.common} />
      <div className='grid gap-2 px-6 py-8'>
        <h3 className='text-xl font-extrabold'>{country.name.common}</h3>
        <div className='mt-2' />
        <p><span className="font-semibold">Population:</span> {country.population}</p>
        <p><span className="font-semibold">Region:</span> {country.region}</p>
        <p><span className="font-semibold">Capital:</span> {country.capital}</p>
      </div>
    </article>
  )
}

export default CountryCard
