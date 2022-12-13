import { MdLightMode } from 'react-icons/md'

// MdDarkMode

function Header () {
  return (
    <header className='bg-neutral-700 text-neutral-100'>
      <div className='mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-10'>
        <h1 className='text-lg font-semibold'>Where in the world?</h1>

        <div className='flex items-center gap-3'>
          <MdLightMode />
          <p>Light Mode</p>
        </div>
      </div>
    </header>
  )
}

export default Header
