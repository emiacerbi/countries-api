import CountriesSection from './components/CountriesSection'
import FilterSection from './components/FiltersSection'
import Header from './components/Header'

function App () {
  return (
    <div className='font-primary flex min-h-screen flex-col'>
      <Header />
      <FilterSection />
      <CountriesSection />
    </div>
  )
}

export default App
