declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
}

const cacheImgs = (srcs: string[]) => {
  srcs.forEach(src => {
    const image = new Image()
    image.src = src
    window[src] = image
  })
}

export default cacheImgs
