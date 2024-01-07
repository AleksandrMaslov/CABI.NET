import { useState } from 'react'

export default function useLocalStorage<T>(
  key: string,
  defaultValue?: T,
): [T | undefined, (value?: T) => void, () => void] {
  const getValue = () => {
    const storage = localStorage.getItem(key)
    if (!storage) return defaultValue
    return JSON.parse(storage) as T
  }

  const [value, setValue] = useState<T | undefined>(getValue)

  const removeValue = () => {
    localStorage.removeItem(key)
    setValue(undefined)
  }

  const saveValue = (value?: T) => {
    if (!value) removeValue()
    localStorage.setItem(key, JSON.stringify(value))
    setValue(value)
  }

  return [value, saveValue, removeValue]
}
