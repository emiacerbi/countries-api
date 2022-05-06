import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from './Loading'

export const DetailScreen = () => {

  const { countryName } = useParams()

  const [data, setData] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()

  let endPoint = `https://restcountries.com/v2/name/${countryName}`

  useEffect(() => {
    axios.get(endPoint)
      .then(response => {
        setData(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [endPoint])

  console.log(data)

  return (
    <div className='detail'>
      {/* {
        isLoading && <Loading />
      } */}
      <div className='container'>
        <button className='detail__button' onClick={() => navigate('/')}>Go back</button>
        {
          data
            .map(country => {
              return (
                <>
                  <div className='detail__flag' key={country.alpha2Code}>
                    <img src={country.flag} alt={country.name} />
                  </div>
                  <div className='detail__data'>
                    <h2>{country.name}</h2>
                    <p className='detail__data__subtitle'>Native Name: <span>{country.nativeName}</span></p>
                    <p className='detail__data__subtitle'>Population: </p><span> {country.population} </span>
                    <p className='detail__data__subtitle'>Region: </p><span> {country.region} </span>
                    <p className='detail__data__subtitle'>Sub Region: </p><span> {country.subregion} </span>
                    <p className='detail__data__subtitle'>Capital: </p><span> {country.capital} </span>
                    <p className='detail__data__subtitle'>Top Level Domain: </p><span> {country.topLevelDomain}</span>
                    <p className='detail__data__subtitle'>Currencies </p>
                    {
                      country.currencies
                        .map(currency => {
                          return <span key={currency.name}>{currency.name}</span>
                        })
                    }

                    <p>Languages: </p>
                    {
                      country.languages
                        .map((language, index) => {
                          return <span key={language.name}>{index ? ', ' : ''} {language.name}</span>
                        })
                    }

                  </div>
                </>
              )
            })
        }
      </div>

    </div>
  )
}

