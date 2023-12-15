import { useAnimate } from 'framer-motion'
import { useEffect, useState } from 'react'

function useHeaderAnimation(
  isMobile: boolean,
  isOpened: boolean,
  logoClassName: string,
) {
  const [scope, animate] = useAnimate()
  const [initial, setInitial] = useState<boolean>(true)

  useEffect(() => {
    animate(
      `.${logoClassName}`,
      {
        opacity: [0, 1],
        y: ['-5rem', '0'],
      },
      {
        type: 'spring',
        bounce: 0,
      },
    )
  }, [])

  useEffect(() => {
    animate(
      scope.current,
      {
        backgroundColor:
          !isMobile || initial
            ? '#fff'
            : isOpened
            ? ['#fff', '#1f1f1f']
            : ['#1f1f1f', '#fff'],
      },
      {
        type: 'spring',
        bounce: 0,
        duration: !isMobile ? 0 : 0.4,
      },
    )

    if (initial) setInitial(false)
  }, [isMobile, isOpened])

  return scope
}

export default useHeaderAnimation
