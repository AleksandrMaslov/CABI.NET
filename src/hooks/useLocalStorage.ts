import { useState } from 'react'

export default function useLocalStorage<T>(
  key: string,
  defaultValue?: T,
): [T | null, (value: T | null) => void, () => void] {
  const getValue = () => {
    const storage = localStorage.getItem(key)
    if (!storage) return defaultValue || null
    return JSON.parse(storage) as T
  }

  const [value, setValue] = useState<T | null>(getValue)

  const removeValue = () => {
    localStorage.removeItem(key)
    setValue(null)
  }

  const saveValue = (value: T | null) => {
    if (!value) removeValue()
    localStorage.setItem(key, JSON.stringify(value))
    setValue(value)
  }

  return [value, saveValue, removeValue]
}
