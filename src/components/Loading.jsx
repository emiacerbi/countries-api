import React from 'react'
import { useSelector } from 'react-redux'

export const Loading = () => {

  // let theme = useSelector(state => state.theme.theme)
  // const classTheme = theme === 'light' ? 'light-mode' : 'dark-mode'

  return (
    <div className={`loading container `}>
      <h1 className='loading__text'>Loading please wait...</h1>
    </div>
  )
}
