import { useState } from 'react'

type UseToggleType = (defaultValue?: boolean) => [boolean, () => void]

const useToggle: UseToggleType = (defaultValue = false) => {
  const [value, setValue] = useState<boolean>(defaultValue)

  const toggle = () => {
    setValue(!value)
  }

  return [value, toggle]
}

export default useToggle
