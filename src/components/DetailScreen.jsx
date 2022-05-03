import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

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

  return (
    <div className='container'>
      {
        isLoading && <h2>Cargando...</h2>
      }
      {
        data
          .map(country => {
            return (
              <div className='main__grid__card' key={country.alpha2Code} to={`/${country.name.toLowerCase()}`} >
                <img className='main__grid__card__img' src={country.flag} alt='' />
                <div className='main__grid__card__wrap'>
                  <h3>{country.name}</h3>
                  <p>Population: {country.population}</p>
                  <p>Region: {country.region}</p>
                  <p>Capital: {country.capital}</p>
                  <button onClick={() => navigate('/')} >Go back</button>
                </div>
              </div>
            )
          })
      }
    </div>
  )
}
