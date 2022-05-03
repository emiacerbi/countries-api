import axios from 'axios'
import { useEffect, useState } from 'react'


export const MainScreen = () => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [keyword, setKeyword] = useState('')
  const [region, setRegion] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setKeyword(e.target.keyword.value)
    // navigate(`resultados?keyword=${keyword}`)
    console.log(keyword)
    e.target.keyword.value = ""
  }

  const handleChange = (e) => {
    setRegion(e.target.value)
    console.log(e.target.value)
  }

  const endPoint = !keyword ?
    'https://restcountries.com/v2/all' :
    `https://restcountries.com/v2/name/${keyword}`

  useEffect(() => {
    axios.get(endPoint)
      .then(response => {
        setData(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [endPoint])

  return (
    <main className='main container'>
      <div className='main__search flex ai-center'>
        <form onSubmit={handleSubmit}>
          <input name='keyword' />

        </form>

        <form>
          <span>Filter by region: </span>
          <select name='region' onChange={handleChange} >
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
          isLoading && <h2>Cargando...</h2>
        }
        {
          data
            .filter(country => country.region.includes(region))
            .map(country => {
              return (
                <div className='main__grid__card' key={country.alpha2Code} onClick={() => console.log('test')}>
                  <img className='main__grid__card__img' src={country.flag} alt='' />
                  <div className='main__grid__card__wrap'>
                    <h3>{country.name}</h3>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                  </div>
                </div>
              )
            })
        }

        {
          console.log()
        }
      </section>



    </main>
  )
}
