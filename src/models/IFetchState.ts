interface IFetchState<T> {
  isLoading?: boolean
  error?: string
  data?: T
}

export default IFetchState
