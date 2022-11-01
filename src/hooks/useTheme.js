/* --------------------------------- IMPORT --------------------------------- */
import { useState, useEffect } from 'react'

/* ---------------------------------- HOOK ---------------------------------- */
export default function useTheme() {
  const darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

  const [theme, setTheme] = useState(darkTheme ? 'dark' : 'light')

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => e.matches && setTheme('dark'))
    window
      .matchMedia('(prefers-color-scheme: light)')
      .addEventListener('change', (e) => e.matches && setTheme('light'))

    console.log(theme)
  }, [theme])

  return theme
}
