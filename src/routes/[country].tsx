import { useQuery } from '@tanstack/react-query'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { getCountryByCode } from '../helpers/getCountryByCode'

import { MdWest } from 'react-icons/md'

function CountryScreen () {
  const { country } = useParams()

  const navigate = useNavigate()

  const { data, isLoading } = useQuery({
    queryKey: ['country'],
    queryFn: () => getCountryByCode(country as string)
  })

  const navigateTo = (code: string) => {
    navigate('/' + code)
    location.reload()
  }

  if (isLoading) {
    return (
      <div className='flex min-h-screen flex-col'>
        <Header />
        <div className='flex-1 bg-neutral-800 text-neutral-100'>
        </div>
      </div>
    )
  }

  if (!data) {
    return <h1>No data rey</h1>
  }

  const countryObject = data[0]

  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <section className='flex-1 bg-neutral-800 text-neutral-100'>
        <div className='p-6'>
          <Link to='/' className='flex max-w-[120px] items-center gap-3 rounded-sm bg-neutral-700 py-3 px-6 shadow-md ' >
            <MdWest />
              Back
          </Link>

          <div className='mt-6'>
            <div>
              <img src={countryObject.flags.svg} alt="" />
            </div>
            <div>
              <h3 className='text-2xl font-bold'>{countryObject.name.common}</h3>

              <div>
                <div>
                  <p><span className='font-medium'>Official Name:</span> {countryObject.name.official}</p>
                  <p><span className='font-medium'>Population:</span> {countryObject.population.toLocaleString()}</p>
                  <p><span className='font-medium'>Region:</span> {countryObject.region}</p>
                  <p><span className='font-medium'>Sub Region:</span> {countryObject.subregion || 'Not found'}</p>
                  <p><span className='font-medium'>Capital:</span> {countryObject.capital || 'Not found'}</p>
                </div>
                <div>
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

                  <div className='flex flex-col flex-wrap gap-2'>
                    <p className='font-medium'>Border Countries: </p>
                    <p className='flex flex-wrap gap-3'>
                      {
                        !countryObject.borders
                          ? ' This country is not near other countries'
                          : countryObject.borders.map(border => <span onClick={() => navigateTo(border.toLowerCase())} className='cursor-pointer rounded-sm bg-neutral-800 p-2' key={border}>{border}</span>)
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default CountryScreen
