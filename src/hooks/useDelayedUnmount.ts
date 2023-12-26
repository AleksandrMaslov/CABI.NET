import { useEffect, useState } from 'react'

export default function useDelayedUnmount(
  isMounted: boolean,
  delayTime: number,
): boolean {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let timeoutId: number

    if (isMounted && !show) {
      setShow(true)
    } else if (!isMounted && show) {
      timeoutId = setTimeout(() => setShow(false), delayTime)
    }

    return () => clearTimeout(timeoutId)
  }, [isMounted, delayTime, show])

  return show
}
