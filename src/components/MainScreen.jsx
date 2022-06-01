import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { AiOutlineSearch } from 'react-icons/ai'
import { Loading } from './Loading'
import { useSelector } from 'react-redux'

export const MainScreen = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [keyword, setKeyword] = useState('')
  const [region, setRegion] = useState('')

  const theme = useSelector(state => state.theme.theme)
  const classTheme = theme === 'light' ? 'light-mode' : 'dark-mode'

  const handleSubmit = (e) => {
    e.preventDefault()
    setKeyword(e.target.keyword.value)
    if (!e.target.keyword.value) {
      alert('No empty strings please')
    }

    e.target.keyword.value = ''
  }

  const handleChange = (e) => {
    setRegion(e.target.value)
  }

  const endPoint = !keyword
    ? 'https://restcountries.com/v2/all'
    : `https://restcountries.com/v2/name/${keyword}`

  useEffect(() => {
    axios.get(endPoint)
      .then(response => {
        setData(response.data)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
        alert('No country found')
      })
  }, [endPoint])

  return (
    <main className={`main ${classTheme}`}>
      <div className='container'>

        <div className='main__search flex ai-center'>
          <form onSubmit={handleSubmit} className='main__search__bar' >
            <span>
              <AiOutlineSearch />
            </span>
            <input className={`main__search__bar__input ${classTheme}`} name='keyword' placeholder='Search for a country...' autoComplete='off' />
          </form>

          <form className={`main__search__selection ${classTheme}`}>
            <select className={`main__search__selection__input ${classTheme}`} name='region' onChange={handleChange} placeholder='Filter by region:' >
              <option value=''>Filter by region:</option>
              <option value='America'>America</option>
              <option value='Oceania'>Oceania</option>
              <option value='Asia'>Asia</option>
              <option value='Europe'>Europe</option>
              <option value='Africa'>Africa</option>
              <option value=''>World</option>
            </select>
          </form>
        </div>

        <section className='grid main__grid' >
          {
            isLoading
              ? <Loading />
              : data
                .filter(country => country.region.includes(region))
                .map(country => {
                  return (
                    <Link className={'main__grid__card '} key={country.alpha2Code} to={`/${country.name.toLowerCase()}`} >
                      <div className=''>
                        <img className='main__grid__card__img' src={country.flag} alt='' />
                      </div>
                      <div className={`main__grid__card__wrap ${classTheme}`}>
                        <h3>{country.name}</h3>
                        <p className='main__grid__card__title'>Population: <span>{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span></p>
                        <p className='main__grid__card__title'>Region: <span>{country.region}</span></p>
                        <p className='main__grid__card__title'>Capital: <span>{country.capital}</span></p>
                      </div>
                    </Link>
                  )
                })
                .slice(0, 32)
          }
        </section>

      </div>

    </main >
  )
}
