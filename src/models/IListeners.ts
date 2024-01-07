export default interface IListeners<T> {
  onSuccess?: (data?: T) => Promise<void>
  onError?: (error?: string) => Promise<void>
}
