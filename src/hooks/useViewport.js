/* --------------------------------- IMPORT --------------------------------- */
import { useState, useEffect } from 'react'

/* ---------------------------------- HOOK ---------------------------------- */
export default function useViewport() {
  const viewport = window.visualViewport

  const [viewportSize, setViewportSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handleResize() {
      setViewportSize({
        width: Math.round(viewport.width),
        height: Math.round(viewport.height),
      })
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [viewport.width, viewport.height])

  return viewportSize
}
