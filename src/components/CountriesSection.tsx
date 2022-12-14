import { useQuery } from '@tanstack/react-query'
import { getCountries } from '../helpers/getCountries'
import { Country } from '../types'
import CountryCard from './CountryCard'

function CountriesSection () {
  const { data, isLoading } = useQuery({
    queryKey: ['countries'],
    queryFn: getCountries
  })

  const onlyACouple = data?.slice(0, 16)

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <section className="flex-1 bg-neutral-800 py-8">
      <div className="mx-auto grid max-w-screen-2xl gap-12 px-6">
        {
          onlyACouple?.map((country: Country) => <CountryCard key={country.name.common} country={country} />)
        }
      </div>
    </section>
  )
}

export default CountriesSection
