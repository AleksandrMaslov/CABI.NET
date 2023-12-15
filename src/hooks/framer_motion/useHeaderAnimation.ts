import { AnimationScope, stagger, useAnimate } from 'framer-motion'
import { useEffect, useState } from 'react'

import { useMediaQuery } from '..'

const staggerItems = stagger(0.2, { startDelay: 0.15 })

function useHeaderAnimation(
  isOpened: boolean,
  logoClassName: string,
): AnimationScope<HTMLElement> {
  const isMobile = useMediaQuery('(width < 992px)')
  const [scope, animate] = useAnimate()
  const [initial, setInitial] = useState<boolean>(true)

  useEffect(() => {
    animate(
      `.${logoClassName}, li`,
      {
        opacity: [0, 1],
        y: ['-5rem', '0'],
      },
      {
        bounce: 0,
        delay: staggerItems,
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
