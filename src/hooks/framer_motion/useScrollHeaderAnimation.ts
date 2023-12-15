import { useScroll, useTransform } from 'framer-motion'

function useScrollHeaderAnimation() {
  const { scrollY } = useScroll()
  return useTransform(scrollY, [100, 300], ['13rem', '10rem'])
}

export default useScrollHeaderAnimation
