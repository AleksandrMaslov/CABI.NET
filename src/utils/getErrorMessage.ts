export default function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message
  if (error instanceof Object) {
    if ('status' in error && 'statusText' in error)
      return `${error.status} ${error.statusText}`
  }
  return String(error)
}
