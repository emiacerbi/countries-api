import Header from '../components/Header'
import { MdWest } from 'react-icons/md'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Context } from '../types'
import CountrySection from '../components/CountrySection'
import { Link } from 'react-router-dom'

function CountryScreen () {
  const { darkMode } = useContext(ThemeContext) as Context
  const isDark = darkMode ? 'dark' : ''

  return (
    <div className={`${isDark} flex min-h-screen flex-col`}>
      <Header />
      <section className='flex-1 bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'>
        <div className='mx-auto max-w-screen-2xl px-6 py-10'>
          <Link to='/' className='flex max-w-[120px] items-center gap-3 rounded-sm bg-neutral-100 py-3 px-6 shadow-md dark:bg-neutral-700 ' >
            <MdWest />
              Back
          </Link>

          <CountrySection darkMode={darkMode} />
        </div>
      </section>
    </div>
  )
}

export default CountryScreen
