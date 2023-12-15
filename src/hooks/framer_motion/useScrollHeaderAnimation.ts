import { MotionValue, useScroll, useTransform } from 'framer-motion'

function useScrollHeaderAnimation(): MotionValue<string> {
  const { scrollY } = useScroll()
  return useTransform(scrollY, [100, 300], ['13rem', '10rem'])
}

export default useScrollHeaderAnimation
