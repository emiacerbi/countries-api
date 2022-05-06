import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from './Loading'

import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from 'react-redux';



export const DetailScreen = () => {

  const { countryName } = useParams()

  const [data, setData] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()

  let theme = useSelector(state => state.theme.theme)
  const classThemePrimary = theme === 'light' ? 'light-mode' : 'dark-mode'
  const classTheme = theme === 'light' ? 'light-mode-secondary' : 'dark-mode-secondary'

  let endPoint = `https://restcountries.com/v2/name/${countryName}`

  useEffect(() => {
    axios.get(endPoint)
      .then(response => {
        setTimeout(() => {
          setData(response.data)
          setIsLoading(false)
        }, 1000);
      })
      .catch(err => console.log(err))
  }, [endPoint])

  console.log(data)

  return (
    <div className={`detail ${classTheme}`}>

      {
        isLoading ?
          <Loading /> :
          data
            .map(country => {
              return (
                <div className={`container `}>
                  <button className={`detail__button ${classThemePrimary}`} onClick={() => navigate('/')}><BsArrowLeft /> Back</button>
                  <div className='detail__flag' key={country.alpha2Code}>
                    <img src={country.flags.svg} alt={country.name} />
                  </div>
                  <div className='detail__data'>
                    <h2 className='detail__data__title'>{country.name}</h2>
                    <div className='col-1'>
                      <p className='detail__data__subtitle'>Native Name: <span>{country.nativeName}</span></p>
                      <p className='detail__data__subtitle'>Population: <span> {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} </span></p>
                      <p className='detail__data__subtitle'>Region: <span> {country.region} </span></p>
                      <p className='detail__data__subtitle'>Sub Region: <span> {country.subregion} </span></p>
                      <p className='detail__data__subtitle'>Capital: <span> {country.capital} </span></p>
                    </div>
                    <div className='col-2'>
                      <p className='detail__data__subtitle '>Top Level Domain: <span> {country.topLevelDomain}</span></p>
                      <p className='detail__data__subtitle '>Currencies:
                        {
                          country.currencies
                            .map(currency => {
                              return <span key={currency.name}> {currency.name}</span>
                            })
                        }
                      </p>

                      <p className='detail__data__subtitle'>Languages:
                        {
                          country.languages
                            .map((language, index) => {
                              return <span key={language.name}>{index ? ', ' : ''} {language.name}</span>
                            })
                        }
                      </p>

                    </div>
                    <p className='detail__data__borders'>Border countries:
                      {
                        country.borders ?
                          country.borders
                            .map(border => <span key={border} className={`border ${classThemePrimary}`}>{border}</span>)
                            .slice(0, 5) :
                          <span className={`border ${classThemePrimary}`} >No countries around </span>
                      }
                    </p>
                  </div>
                </div>
              )
            })
      }
    </div>
  )
}

