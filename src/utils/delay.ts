const delay = (ms: number): Promise<unknown> => {
  return new Promise(resolve => {
    const timeout = setTimeout(() => {
      clearTimeout(timeout)
      resolve(null)
    }, ms)
  })
}

export default delay
