import React, { useEffect } from 'react'

import { RiMoonFill } from "react-icons/ri";

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { switchTheme } from '../newRedux/themeSlice';

export const Header = () => {

  const dispatch = useDispatch()
  let theme = useSelector(state => state.theme.theme)

  localStorage.setItem('theme', theme)

  const classTheme = theme === 'light' ? 'light-mode' : 'dark-mode'

  const navigate = useNavigate()
  // 
  return (
    <header className={`header ${classTheme} `} >
      <div className='container flex ai-center'>
        <a onClick={() => navigate('/')} className='header__title'>Where in the world?</a>
        <p className='header__mode' onClick={() => dispatch(switchTheme())} >
          <span><RiMoonFill /></span>
          {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
        </p>

      </div>
    </header>
  )
}
