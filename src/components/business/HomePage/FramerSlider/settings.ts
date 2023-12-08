export const variants = {
  initial: (direction: number) => ({
    x: direction > 0 ? '99%' : '-101%',
  }),

  center: {
    x: '-1%',
  },

  exit: (direction: number) => ({
    x: direction < 0 ? '99%' : '-101%',
  }),
}

export const transition = {
  x: {
    ease: 'easeInOut',
    duration: 1,
  },
}

export const swipeConfidenceThreshold = 10000

export const swipePower = (offset: number, velocity: number) =>
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

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1)
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1)
    }
  }
}
