import { useQuery } from '@tanstack/react-query'
import { getCountries } from '../helpers/getCountries'
import { Country, Filter } from '../types'
import CountryCard from './CountryCard'

type Props = {
  searchBarFilter: string
  selectedFilter: Filter
}

function CountriesSection ({ searchBarFilter, selectedFilter }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ['countries'],
    queryFn: getCountries
  })

  const filteredBySearchBar = data?.filter(country => country.name.common.toLowerCase().includes(searchBarFilter))
  const filteredByRegion = filteredBySearchBar?.filter(country => country.region.toLowerCase().includes(selectedFilter.value))

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <section className="flex-1 bg-neutral-800 py-8">
      <div className="mx-auto grid max-w-screen-2xl gap-12 px-6">
        {
          filteredByRegion
            ?.map((country: Country) => <CountryCard key={country.name.common} country={country} />)
        }

        {
          filteredByRegion?.length === 0 && <h3 className='text-center text-neutral-100'>No results</h3>
        }
      </div>
    </section>
  )
}

export default CountriesSection
