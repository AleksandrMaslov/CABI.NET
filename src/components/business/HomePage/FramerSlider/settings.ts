export const overflowVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  invisible: { display: 'none' },
}

export const overflowTransition = {
  opacity: { ease: 'easeInOut', duration: 0.5 },
  display: { duration: 0 },
}

export const slideVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
  }),

  centered: {
    x: '0%',
  },

  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
  }),
}

export const slideTransition = {
  x: { type: 'tween', ease: 'easeOut', duration: 1 },
}

export const constraints = { left: 0, right: 0 }

const swipeThreshold = 0

const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity

export const createDragEndHandler = (
  paginate: (newDirection: number) => void,
): ((
  e: MouseEvent | TouchEvent | PointerEvent,
  dragInfo: {
    offset: { x: number; y: number }
    velocity: { x: number; y: number }
  },
) => void) => {
  return (e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x)
    if (swipe < -swipeThreshold) return paginate(1)
    if (swipe > swipeThreshold) return paginate(-1)
  }
}
