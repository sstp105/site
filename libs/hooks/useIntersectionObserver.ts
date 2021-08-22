import React, { useState, useEffect } from 'react'

export const useIntersectionObserver = (ref) => {
  const [isInView, setIsInview] = useState<boolean>(false)

  useEffect(() => {
    if (!ref.current) {
      return () => {}
    }

    const node = ref.current
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInview(true)
        } else {
          setIsInview(false)
        }
      })
    })

    if (node !== null) {
      observer.observe(node)
    }

    return () => {
      observer.disconnect()
    }
  }, [ref])

  return isInView
}
