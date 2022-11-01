/* --------------------------------- IMPORT --------------------------------- */
import { useState, useEffect } from 'react'

/* ---------------------------------- HOOK ---------------------------------- */
export default function useTheme(auto, mode) {
  const checkTheme = () => window.matchMedia('(prefers-color-scheme: dark)')

  const [autoTheme, setAutoTheme] = useState(
    checkTheme().matches ? 'dark' : 'light'
  )
  const [userTheme, setUserTheme] = useState(undefined)

  useEffect(() => {
    const chooseTheme = (e) => {
      if (e.matches) {
        setAutoTheme('dark')
      } else {
        setAutoTheme('light')
      }
    }

    if (auto) {
      checkTheme().addEventListener('change', (e) => chooseTheme(e))
    }
    if (!auto) {
      setUserTheme(mode)
    }

    return () => checkTheme().removeEventListener('change', chooseTheme)
  }, [auto, mode])

  return auto ? autoTheme : userTheme
}
