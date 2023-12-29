import { useState } from 'react'

import { IValidations } from './useInputValidation'

import { useInputValidation } from '.'

type TUseInput = (
  validations?: IValidations,
  initialValue?: string,
) => [
  {
    value: string
    setValue: (value: string) => void
    error: string
  },
  {
    isValid: boolean
    reset: () => void
  },
]

const useInput: TUseInput = (validations, initialValue = '') => {
  const [value, setValue] = useState(initialValue)

  const { isValid, errors } = useInputValidation(validations, value)

  const reset = () => setValue(initialValue)

  return [
    {
      value,
      setValue,
      error: errors.filter(e => e)[0],
    },
    {
      isValid,
      reset,
    },
  ]
}

export default useInput
