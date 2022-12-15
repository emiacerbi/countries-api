import { useContext } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { ThemeContext } from '../context/ThemeContext'
import { Context } from '../types'

function Header () {
  const { darkMode, setDarkMode } = useContext(ThemeContext) as Context

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <header className='z-10 bg-white text-neutral-900 shadow-md dark:bg-neutral-700 dark:text-neutral-100'>
      <div className='mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-10'>
        <h1 className='text-lg font-bold'>Where in the world?</h1>

        <div className='flex cursor-pointer items-center gap-3' onClick={handleDarkMode}>
          {
            darkMode
              ? (
                <>
                  <MdLightMode />
                  <p>Light Mode</p>
                </>
              )
              : (
                <>
                  <MdDarkMode />
                  <p>Dark Mode</p>
                </>
              )
          }
        </div>
      </div>
    </header>
  )
}

export default Header
