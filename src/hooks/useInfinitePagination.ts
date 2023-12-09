import { useState } from 'react'

const useInfinitePagination = (
  min: number,
  max: number,
): [number, [number, number], (newDirection: number) => void, () => void] => {
  const [[page, direction], setPage] = useState([0, 0])
  const index = useInfiniteIndex(min, max, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  const reset = () => {
    setPage([0, 0])
  }

  return [index, [page, direction], paginate, reset]
}

const useInfiniteIndex = (min: number, max: number, current: number) => {
  const range = max - min
  return ((((current - min) % range) + range) % range) + min
}

export default useInfinitePagination
