import { ChangeEvent, useState } from 'react'
import CountriesSection from './components/CountriesSection'
import FilterSection from './components/FiltersSection'
import Header from './components/Header'
import { Filter } from './types'

const filters = [
  { id: 1, name: 'Filter by region', value: '' },
  { id: 2, name: 'Africa', value: 'africa' },
  { id: 3, name: 'America', value: 'america' },
  { id: 4, name: 'Asia', value: 'asia' },
  { id: 5, name: 'Europe', value: 'europe' },
  { id: 6, name: 'Oceania', value: 'oceania' }
]

function App () {
  const [selectedFilter, setSelectedFilter] = useState(filters[0])
  const [searchBarFilter, setSearchBarFilter] = useState('')
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const handleSelectFilter = (filter: Filter) => {
    setSelectedFilter(filter)
    setIsDropdownVisible(false)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchBarFilter(e.target.value)
  }

  const handleClick = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

  return (
    <div className='font-primary flex min-h-screen flex-col'>
      <Header />
      <FilterSection
        handleChange={handleChange}
        handleClick={handleClick}
        handleSelectFilter={handleSelectFilter}
        searchBarFilter={searchBarFilter}
        selectedFilter={selectedFilter}
        isDropdownVisible={isDropdownVisible}
        filters={filters}
      />
      <CountriesSection searchBarFilter={searchBarFilter} selectedFilter={selectedFilter} />
    </div>
  )
}

export default App
