import { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { BounceLoader } from 'react-spinners'
import { ThemeContext } from '../context/ThemeContext'
import { getCountries } from '../helpers/getCountries'
import { Context, Country, Filter } from '../types'
import CountryCard from './CountryCard'

type Props = {
  searchBarFilter: string
  selectedFilter: Filter
}

function CountriesSection ({ searchBarFilter, selectedFilter }: Props) {
  const { darkMode } = useContext(ThemeContext) as Context

  const { data, isLoading } = useQuery({
    queryKey: ['countries'],
    queryFn: getCountries
  })

  const filteredBySearchBar = data?.filter(country => country.name.common.toLowerCase().includes(searchBarFilter))
  const filteredByRegion = filteredBySearchBar?.filter(country => country.region.toLowerCase().includes(selectedFilter.value))

  if (isLoading) {
    return (
      <div className='flex-1 bg-neutral-100 dark:bg-neutral-800'>
        <div className='mx-auto flex max-w-screen-2xl justify-center'>
          {
            darkMode ? <BounceLoader color="#ebf6f2" /> : <BounceLoader color="#181e1c" />
          }

        </div>
      </div>
    )
  }

  return (
    <section className="flex-1 bg-neutral-100 py-8 dark:bg-neutral-800">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-12 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          filteredByRegion
            ?.slice(0, 32)
            .map((country: Country) => <CountryCard key={country.name.common} country={country} />)
        }

        {
          filteredByRegion?.length === 0 && <h3 className='pl-1 text-neutral-900 dark:text-neutral-100'>No results</h3>
        }
      </div>
    </section>
  )
}

export default CountriesSection
