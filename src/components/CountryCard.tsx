import { Link } from 'react-router-dom'
import { Country } from '../types'

type Props = {
  country: Country
}

function CountryCard ({ country }: Props) {
  return (
    <Link replace to={'country/' + country.cca2.toLowerCase()} className='grid min-h-[432px] justify-self-center overflow-hidden rounded-md bg-white text-neutral-900 shadow-md dark:bg-neutral-700 dark:text-neutral-100'>
      <img className='h-[200px] w-[310px] object-cover' src={country.flags.svg} alt={country.name.common} />
      <div className='grid flex-1 gap-2 px-6 py-8'>
        <h3 className='text-xl font-extrabold'>{country.name.common}</h3>
        <div className='mt-2' />
        <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
        <p><span className="font-semibold">Region:</span> {country.region}</p>
        <p><span className="font-semibold">Capital:</span> {country.capital}</p>
      </div>
    </Link>
  )
}

export default CountryCard
