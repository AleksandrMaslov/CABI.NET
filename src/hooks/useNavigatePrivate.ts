import { useLocation, useNavigate } from 'react-router-dom'

const useNavigatePrivate = (defaultRoute: string) => {
  const navigate = useNavigate()
  const location = useLocation()

  const navigatePrivate = () => {
    const fromPage: string = location.state?.from?.pathname
    if (fromPage) return navigate(fromPage)
    navigate(defaultRoute)
  }

  return { navigate, navigatePrivate }
}

export default useNavigatePrivate
