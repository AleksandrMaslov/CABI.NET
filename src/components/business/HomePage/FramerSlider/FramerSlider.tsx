import { Icon } from 'cabinet_ui_kit'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'

import { useInfinitePagination } from 'src/hooks'

import classes from './FramerSlider.module.css'
import { createDragEndHandler, transition, variants } from './settings'

interface FramerSliderProps<T> {
  fallbackItem: ReactNode
  items?: T[]
  renderItem?: (item: T) => ReactNode
  className?: string
}

function FramerSlider<T>({
  items = [],
  renderItem,
  fallbackItem,
  className,
}: FramerSliderProps<T>) {
  const rootClasses = [classes.framerSlider]
  if (className) rootClasses.push(className)

  const number = items.length
  const hasControls = number > 1

  const [index, [page, direction], paginate] = useInfinitePagination(0, number)

  const dragEndHandler = createDragEndHandler(paginate)

  return (
    <div className={rootClasses.join(' ')}>
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
            onDragEnd={dragEndHandler}
            dragConstraints={{ left: 0, right: 0 }}
          >
            {(!renderItem || !number) && fallbackItem}

            {renderItem && number && renderItem(items[index])}
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
