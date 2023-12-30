import { useEffect, useState } from 'react'

import { isEmailValid, isTelValid } from 'src/utils'

enum ValidationErrorsEnum {
  'Empty' = 'Поле обязательно для заполнения',
  'Email' = 'Неверный формат адреса электронной почты',
  'Tel' = 'Неверный формат номера телефона',
  'MinLength' = 'Значение слишком короткое',
}

export interface IValidations {
  isEmpty?: boolean
  isEmail?: boolean
  isTel?: boolean
  minLength?: number
}

type TUseInputValidation = (
  validations: IValidations | undefined,
  value: string,
) => { isValid: boolean; errors: string[] }

const useInputValidation: TUseInputValidation = (validations, value) => {
  const [emptyError, setEmptyError] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')
  const [telError, setTelError] = useState<string>('')
  const [minLengthError, setMinLengthError] = useState<string>('')

  const errors = [emptyError, emailError, telError, minLengthError]
  const [isValid, setValid] = useState<boolean>(true)

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          if (value && !emptyError) break
          if (!value && emptyError) break
          value ? setEmptyError('') : setEmptyError(ValidationErrorsEnum.Empty)
          break

        case 'isEmail':
          if (!value) {
            if (!emailError) break
            setEmailError('')
            break
          }
          if (isEmailValid(value) && !emailError) break
          if (!isEmailValid(value) && emailError) break
          isEmailValid(value)
            ? setEmailError('')
            : setEmailError(ValidationErrorsEnum.Email)
          break

        case 'isTel':
          if (!value) {
            if (!telError) break
            setTelError('')
            break
          }
          if (isTelValid(value) && !telError) break
          if (!isTelValid(value) && telError) break
          isTelValid(value)
            ? setTelError('')
            : setTelError(ValidationErrorsEnum.Tel)
          break

        case 'minLength':
          value.length < +validations[validation]!
            ? setMinLengthError(ValidationErrorsEnum.MinLength)
            : setMinLengthError('')
          break
      }
    }
  }, [value])

  useEffect(() => {
    if (errors.some(e => e)) return setValid(false)
    setValid(true)
  }, [...errors])

  return { isValid, errors }
}

export default useInputValidation
