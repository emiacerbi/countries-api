import { useQuery } from '@tanstack/react-query'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import { getCountryByCode } from '../helpers/getCountryByCode'

import { MdWest } from 'react-icons/md'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Context } from '../types'

function CountryScreen () {
  const { country } = useParams()
  const { darkMode } = useContext(ThemeContext) as Context

  const isDark = darkMode ? 'dark' : ''

  const { data, isLoading, isError } = useQuery({
    queryKey: ['country', country],
    queryFn: () => getCountryByCode(country as string)
  })

  if (isLoading) {
    return (
      <div className={`${isDark} flex min-h-screen flex-col`}>
        <Header />
      </div>
    )
  }

  if (isError) {
    return <h1>Something is wrong</h1>
  }

  const countryObject = data[0]

  return (
    <div className={`${isDark} flex min-h-screen flex-col`}>
      <Header />
      <section className='flex-1 bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'>
        <div className='mx-auto max-w-screen-2xl px-6 py-10'>
          <Link to='/' className='flex max-w-[120px] items-center gap-3 rounded-sm bg-neutral-100 py-3 px-6 shadow-md dark:bg-neutral-700 ' >
            <MdWest />
              Back
          </Link>

          <div className='mt-20 flex flex-col justify-between gap-6 lg:flex-row lg:items-center'>
            <div >
              <img className='object-cover shadow-lg sm:h-[400px] sm:max-h-[400px] sm:w-[550px] sm:max-w-[550px]' src={countryObject.flags.svg} alt="" />
            </div>
            <div>
              <h3 className='text-2xl font-bold'>{countryObject.name.common}</h3>

              <div className='mt-8 gap-32 lg:flex'>
                <div className='flex flex-col gap-4'>
                  <p><span className='font-medium'>Official Name:</span> {countryObject.name.official}</p>
                  <p><span className='font-medium'>Population:</span> {countryObject.population.toLocaleString()}</p>
                  <p><span className='font-medium'>Region:</span> {countryObject.region}</p>
                  <p><span className='font-medium'>Sub Region:</span> {countryObject.subregion || 'Not found'}</p>
                  <p><span className='font-medium'>Capital:</span> {countryObject.capital || 'Not found'}</p>
                </div>
                <div className='mt-4 flex flex-col gap-4 lg:mt-0' >
                  <p><span className='font-medium'>Top Level Domain:</span> {countryObject.tld}</p>
                  <p><span className='font-medium'>Currencies: </span>
                    {
                      (countryObject.currencies)
                        ? Object.values(countryObject.currencies).map((currency, index) => {
                          return (
                            <span key={index}>
                              {currency.name}{' '}
                            </span>
                          )
                        })
                        : 'Not found'
                    }
                  </p>

                  <p>
                    <span className='font-medium'>Languages: </span>
                    {
                      countryObject.languages
                        ? Object.values(countryObject.languages).map((language, index, array) => {
                          if (index === array.length - 1) return <span key={index}>{language}</span>
                          return <span key={index}> {language}, </span>
                        })
                        : 'Not found'
                    }
                  </p>

                </div>
              </div>
              <div className='mt-4 flex flex-col flex-wrap gap-2 lg:flex-row lg:items-center'>
                <p className='font-medium'>Border Countries: </p>
                <p className='flex flex-wrap gap-3'>
                  {
                    !countryObject.borders
                      ? ' This country is not near other countries'
                      : countryObject.borders.map(border => (
                        <Link replace to={'/country/' + border.toLowerCase()} className='cursor-pointer rounded-sm p-2 px-4 shadow-lg hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600' key={border}>
                          {border}
                        </Link>
                      ))
                  }
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default CountryScreen
