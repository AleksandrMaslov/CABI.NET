import { IObject } from '.'

export default interface ILogin extends IObject {
  login: string
  password: string
}
