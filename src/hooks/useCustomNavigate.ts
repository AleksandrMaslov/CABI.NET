const useCustomNavigate = () => {
  const navigate = (route: string) =>
    window.location.assign(`./CABI.NET${route}`)
  return navigate
}

export default useCustomNavigate
