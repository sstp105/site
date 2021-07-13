import { useState, useEffect } from 'react'

/**
 * Return the current window width for component condiitonal render
 * @returns width of the client window
 */
export const useMediaQuery = (): number => {
  const [width, setWidth] = useState<number>()

  useEffect(() => {
    const windowResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', windowResize)

    return () => window.removeEventListener('resize', windowResize)
  }, [])

  return width
}
