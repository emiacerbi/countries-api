import { Navigate, Route, Routes } from 'react-router-dom'
import { DetailScreen } from './components/DetailScreen'
import { Header } from './components/Header'
import { MainScreen } from './components/MainScreen'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/:countryName" element={<DetailScreen />} />
        <Route path="/*" element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default App
