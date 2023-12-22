import { MotionValue, useScroll, useTransform } from 'framer-motion'

function useScrollAnimation(
  inputRange: [number, number],
  outputRange: [string, string],
): MotionValue<string> {
  const { scrollY } = useScroll()
  return useTransform(scrollY, inputRange, outputRange)
}

export default useScrollAnimation
