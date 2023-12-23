import { AnimationScope, stagger, useAnimate } from 'framer-motion'
import { useEffect, useState } from 'react'

interface IKeyframes {
  [key: string]: (string | number)[]
}

interface IFramerAnimationSettings {
  keyframes: IKeyframes
  initial?: boolean
  once?: boolean
  condition?: boolean
  trigger?: boolean
  selectors?: string
}

function useCustomAnimation(
  userSettings: IFramerAnimationSettings,
): AnimationScope<HTMLElement | HTMLDivElement> {
  const { initial, once, condition, trigger, selectors, keyframes } = {
    ...defaultSettings,
    ...userSettings,
  }
  const [scope, animate] = useAnimate<HTMLElement | HTMLDivElement>()
  const [isFirst, setFirst] = useState<boolean>(true)
  const [prevTrigger, setPrevTrigger] = useState<boolean | undefined>(trigger)

  const resetAnimation = (keyframes: IKeyframes, trigger?: boolean) => {
    const elements = selectors ?? scope.current
    const entries = Object.entries(keyframes)
    const resetEntries = entries.map(([key, value]) => [
      key,
      value[trigger ? 1 : 0],
    ])
    const resetKeyframes = Object.fromEntries(resetEntries)
    animate(elements, resetKeyframes, {
      duration: 0,
    })
  }

  const isNotOnce = once && !isFirst
  const isTriggerDefined = trigger !== undefined
  const isNotInitial = isTriggerDefined && !initial && isFirst
  const isNotTriggerChanged = isTriggerDefined && trigger === prevTrigger

  useEffect(() => {
    if (!keyframes) return

    if (!condition) {
      setPrevTrigger(trigger)
      resetAnimation(keyframes)
      return
    }

    if (isNotOnce) return
    if (isNotInitial) return
    if (isNotTriggerChanged) return resetAnimation(keyframes, trigger)

    const elements = selectors ?? scope.current
    const itemsKeyframes = defineKeyframes(keyframes, trigger)
    const itemsStagger = stagger(0.1, {
      startDelay: 0.1,
    })

    animate(elements, itemsKeyframes, {
      bounce: 0,
      delay: itemsStagger,
    })

    setPrevTrigger(trigger)
    if (isFirst) setFirst(false)
  }, [keyframes, trigger, condition])

  return scope
}

const defineKeyframes = (keyframes: IKeyframes, trigger?: boolean) => {
  if (trigger === undefined) return keyframes
  if (trigger) return keyframes
  for (const property in keyframes) {
    keyframes[property] = keyframes[property].reverse()
  }
  return keyframes
}

const defaultSettings = {
  initial: true,
  once: false,
  condition: true,
  trigger: undefined,
  selectors: undefined,
}

export default useCustomAnimation
