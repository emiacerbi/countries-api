import { createContext, ReactNode, useState } from 'react'
import { Context } from '../types'

type Children = {
  children: ReactNode
}

export const ThemeContext = createContext<Context | null>(null)

export function ThemeProvider ({ children }: Children) {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
