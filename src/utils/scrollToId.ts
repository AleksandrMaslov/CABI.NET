const scrollToId = (id: string) => {
  const anchor = document.getElementById(id)
  if (anchor) anchor.scrollIntoView()
}

export default scrollToId
