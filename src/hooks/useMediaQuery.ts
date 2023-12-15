import { useEffect, useState } from 'react'

function useMediaQuery(query: string) {
  const [isTriggered, setTriggered] = useState<boolean>(
    window.matchMedia(query).matches,
  )

  const resizeHandler = () => {
    setTriggered(window.matchMedia(query).matches)
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [query])

  return isTriggered
}

export default useMediaQuery
