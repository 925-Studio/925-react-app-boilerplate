/* --------------------------------- IMPORT --------------------------------- */
import { useState, useEffect } from 'react'

/* ---------------------------------- HOOK ---------------------------------- */
export default function useAutoTheme() {
  const checkTheme = () => window.matchMedia('(prefers-color-scheme: dark)')

  const [theme, setTheme] = useState(checkTheme().matches ? 'dark' : 'light')

  useEffect(() => {
    const chooseTheme = (e) => {
      if (e.matches) {
        setTheme('dark')
      } else {
        setTheme('light')
      }
    }

    checkTheme().addEventListener('change', (e) => chooseTheme(e))

    return () => checkTheme().removeEventListener('change', chooseTheme)
  }, [])

  return theme
}
