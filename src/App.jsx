import { Header } from './components/Header'
import { MainScreen } from './components/MainScreen'

function App() {

  return (
    <>
      <Header />
      <MainScreen />
      {/* <div>
        {
          data.map(country => (
            <div key={country.alpha2Code}>
              <p> {country.name} </p>
            </div>
          )).slice(0, 8)
        }

      </div> */}
    </>
  )
}

export default App
