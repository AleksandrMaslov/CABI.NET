import { IObject } from '.'

export default interface IUser extends IObject {
  name: string
  avatar: string
  token: string
}
