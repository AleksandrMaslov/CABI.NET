import { Icon } from 'cabinet_ui_kit'
import { AnimatePresence, AnimationDefinition, motion } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'

import { useInfinitePagination } from 'src/hooks'

import classes from './FramerSlider.module.css'
import {
  constraints,
  createDragEndHandler,
  transition,
  variants,
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

  const [isAnimating, setAnimating] = useState<boolean>(false)

  const [index, [page, direction], paginate, reset] = useInfinitePagination(
    0,
    number,
  )

  const dragEndHandler = createDragEndHandler(paginate)

  const animationStartHandler = () => setAnimating(true)

  const animationCompleteHandler = (definition: AnimationDefinition) => {
    if (definition !== 'center') return
    setAnimating(false)
  }

  useEffect(() => {
    reset()
  }, [items])

  useEffect(() => {
    if (!setPage) return
    setPage(index + 1)
  }, [index])

  return (
    <div className={rootClasses.join(' ')} data-disabled={isAnimating}>
      <div className={classes.overflow}>
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            drag={hasControls && 'x'}
            initial="initial"
            animate="center"
            exit="exit"
            key={page}
            custom={direction}
            variants={variants}
            transition={transition}
            dragElastic={1}
            dragConstraints={constraints}
            onDragEnd={dragEndHandler}
            onAnimationStart={animationStartHandler}
            onAnimationComplete={animationCompleteHandler}
          >
            {!renderItem || !number ? fallbackItem : renderItem(items[index])}
          </motion.div>
        </AnimatePresence>
      </div>

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
