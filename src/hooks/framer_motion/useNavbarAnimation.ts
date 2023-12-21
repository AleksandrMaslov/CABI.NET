import { AnimationScope, useAnimate } from 'framer-motion'
import { useEffect, useState } from 'react'

import { useMediaQuery } from '..'

function useNavbarAnimation(isOpened: boolean): AnimationScope<HTMLElement> {
  const isMobile = useMediaQuery('(width < 576px)')
  const isTablet = useMediaQuery('(width < 992px)')

  const [scope, animate] = useAnimate()
  const [initial, setInitial] = useState<boolean>(true)

  useEffect(() => {
    animate(
      scope.current,
      !isTablet
        ? {
            x: '0%',
          }
        : initial
        ? {
            x: '100%',
          }
        : isOpened
        ? {
            x: ['100%', '0%'],
          }
        : {
            x: ['0%', '100%'],
          },
      {
        type: 'spring',
        bounce: 0,
        duration: initial ? 0 : 0.4,
      },
    )

    if (initial) setInitial(false)
  }, [isMobile, isTablet, isOpened])

  return scope
}

export default useNavbarAnimation
