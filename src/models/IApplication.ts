import { IObject } from '.'

export default interface IApplication extends IObject {
  username: string
  tel: string
  email?: string
  comments?: string
}
