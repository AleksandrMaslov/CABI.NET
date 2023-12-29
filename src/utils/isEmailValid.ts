const emailRegEx =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const isEmailValid = (value: string) => {
  return emailRegEx.test(value)
}

export default isEmailValid
