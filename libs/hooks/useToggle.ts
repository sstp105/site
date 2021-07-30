import { useState } from 'react'

/**
 * Toggler hook
 * Update state to the opposite boolean state
 * @returns toggle state, toggle switcher
 */
export const useToggle = (
  initState: boolean = false
): [boolean, () => void] => {
  const [show, setShow] = useState<boolean>(initState)

  const toggle = (): void => {
    setShow((prevState) => !prevState)
  }

  return [show, toggle]
}
