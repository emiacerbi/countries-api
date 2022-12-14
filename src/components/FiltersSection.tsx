import { ChangeEventHandler, MouseEventHandler } from 'react'
import { MdSearch } from 'react-icons/md'
import { Filter } from '../types'

type Props = {
  handleChange: ChangeEventHandler<HTMLInputElement>
  handleClick: MouseEventHandler<HTMLButtonElement>
  searchBarFilter: string
  selectedFilter: Filter
  handleSelectFilter: Function
  isDropdownVisible: boolean
  filters: Filter[]
}

function FiltersSection ({ handleChange, searchBarFilter, handleClick, selectedFilter, handleSelectFilter, isDropdownVisible, filters }: Props) {
  const isHidden = isDropdownVisible ? 'block' : 'hidden'

  return (
    <section className="bg-neutral-800">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-16 px-6 py-10">

        <div className='relative'>
          <MdSearch className='absolute top-1/2 left-5 -translate-y-1/2 text-2xl text-white' />
          <input type='text' onChange={handleChange} value={searchBarFilter} placeholder="Search for a country..." className="w-full max-w-lg rounded-md bg-neutral-700 p-3 pl-14 text-neutral-100 placeholder:text-neutral-100 hover:ring-2 hover:ring-neutral-600" />
        </div>

        <div className='relative'>
          <button
            onClick={handleClick}
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            className="inline-flex w-44 items-center rounded-md bg-neutral-700 px-4 py-3 text-center text-neutral-100 hover:ring-2 hover:ring-neutral-600 focus:outline-none"
            type="button">

            {
              selectedFilter.name
            }

            <svg className="ml-auto h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          {/* Dropdown menu */}
          <div id="dropdown" className={`z-10 ${isHidden} absolute top-14 w-44 divide-y divide-gray-100 overflow-hidden rounded bg-white shadow dark:bg-neutral-700`}>
            <ul className="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
              {
                filters.map(filter => (
                  <li
                    className='block cursor-pointer px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    key={filter.id}
                    onClick={() => handleSelectFilter(filter)}
                  >
                    {filter.name}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}

export default FiltersSection
