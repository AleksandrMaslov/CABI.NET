import { IApplication, IUser } from 'src/models'
import { delay } from 'src/utils'

//Service should be replaced with real server requests

export default class ServerDummyService {
  public static async sendApplicationData(data: IApplication) {
    // eslint-disable-next-line no-console
    console.log('Application Data:', data)

    // request (post: application data) -> response
    // throw on error
    await delay(1500)
    return
  }

  public static async login(data: {
    login: string
    password: string
  }): Promise<IUser | null> {
    // eslint-disable-next-line no-console
    console.log('Login Data:', data)

    // request (post: login data) -> response
    // throw on error

    // return IUser on success
    // return null on failure

    await delay(1500)
    return {
      name: 'Dear Guest',
      avatar: '',
      token: 'dummy_token',
    }
  }
}
