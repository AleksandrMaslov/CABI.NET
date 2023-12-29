const telNoRegEx = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

const isTelValid = (value: string) => {
  return telNoRegEx.test(value)
}

export default isTelValid
