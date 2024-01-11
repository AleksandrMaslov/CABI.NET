import { Icon } from '@aleksandrmaslov/cabinet_ui_kit'
import { AnimatePresence, AnimationDefinition, motion } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'

import { useInfinitePagination } from 'src/hooks'

import classes from './FramerSlider.module.css'
import {
  constraints,
  createDragEndHandler,
  overflowTransition,
  overflowVariants,
  slideTransition,
  slideVariants,
} from './settings'

interface FramerSliderProps<T> {
  fallbackItem: ReactNode
  items?: T[]
  renderItem?: (item: T) => ReactNode
  setPage?: (page: number) => void
  className?: string
}

function FramerSlider<T>({
  fallbackItem,
  items = [],
  renderItem,
  setPage,
  className,
}: FramerSliderProps<T>) {
  const rootClasses = [classes.framerSlider]
  if (className) rootClasses.push(className)

  const number = items.length
  const hasControls = renderItem && number > 1

  const [overflowKey, setOverflowKey] = useState<number>(Date.now())

  const [isAnimating, setAnimating] = useState<boolean>(false)

  const [index, [page, direction], paginate, reset] = useInfinitePagination(
    0,
    number,
  )

  const dragEndHandler = createDragEndHandler(paginate)

  const animationStartHandler = () => setAnimating(true)

  const animationCompleteHandler = (definition: AnimationDefinition) => {
    if (definition !== 'centered') return
    setAnimating(false)
  }

  const animationOverflowCompleteHandler = (
    definition: AnimationDefinition,
  ) => {
    if (definition !== 'visible') return
    setAnimating(false)
  }

  const item = !renderItem || !number ? fallbackItem : renderItem(items[index])

  useEffect(() => {
    setOverflowKey(Date.now())
    reset()
  }, [items])

  useEffect(() => {
    if (!setPage) return
    setPage(index + 1)
  }, [index])

  return (
    <div className={rootClasses.join(' ')} data-disabled={isAnimating}>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          className={classes.overflow}
          initial="hidden"
          animate="visible"
          exit="invisible"
          key={overflowKey}
          variants={overflowVariants}
          transition={overflowTransition}
          onAnimationComplete={animationOverflowCompleteHandler}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              drag={hasControls && 'x'}
              initial="initial"
              animate="centered"
              exit="exit"
              key={page}
              custom={direction}
              variants={slideVariants}
              transition={slideTransition}
              dragConstraints={constraints}
              onDragEnd={dragEndHandler}
              onAnimationStart={animationStartHandler}
              onAnimationComplete={animationCompleteHandler}
            >
              {item}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {hasControls && (
        <>
          <button className={classes.arrow} onClick={() => paginate(1)}>
            <Icon className={classes.icon} icon="arrow" size="8rem" />
          </button>

          <button className={classes.arrow} onClick={() => paginate(-1)}>
            <Icon className={classes.icon} icon="arrow" size="8rem" />
          </button>
        </>
      )}
    </div>
  )
}

export default FramerSlider
