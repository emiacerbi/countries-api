import React from 'react'

import { RiMoonFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='header '>
      <div className='container flex ai-center'>
        <Link to='/' className='header__title'>Where in the world?</Link>
        <p className='header__mode'>
          <span><RiMoonFill /></span>
          Dark Mode</p>

      </div>
    </header>
  )
}
