import { useState } from 'react'

type TUseToggle = (defaultValue?: boolean) => [boolean, () => void]

const useToggle: TUseToggle = (defaultValue = false) => {
  const [value, setValue] = useState<boolean>(defaultValue)

  const toggle = () => {
    setValue(!value)
  }

  return [value, toggle]
}

export default useToggle
