import React, { useEffect } from 'react'

import { RiMoonFill, RiSunFill } from "react-icons/ri";

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { switchTheme } from '../store/themeSlice';

export const Header = () => {

  const dispatch = useDispatch()
  let theme = useSelector(state => state.theme.theme)

  localStorage.setItem('theme', theme)

  const classTheme = theme === 'light' ? 'light-mode' : 'dark-mode'

  const navigate = useNavigate()
  // 
  return (
    <header className={`header ${classTheme}`} >
      <div className='container flex ai-center'>
        <button onClick={() => navigate('/')} className='header__title'>Where in the world?</button>
        <span className='header__mode' onClick={() => dispatch(switchTheme())} >
          {
            theme === 'light' ?
              <RiMoonFill /> :
              <RiSunFill />
          }
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </span>

      </div>
    </header>
  )
}
