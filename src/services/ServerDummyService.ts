import { IApplicationData, IAuthData, ILoginData, IUser } from 'src/models'
import { delay } from 'src/utils'

//Service should be replaced with real server requests

export default class ServerDummyService {
  public static async sendApplicationData(data: IApplicationData) {
    // eslint-disable-next-line no-console
    console.log('Application Data:', data)

    // request (post: application data) -> response
    // throw on error

    await delay(1500)
    return
  }

  public static async login(data: ILoginData): Promise<IUser | undefined> {
    // eslint-disable-next-line no-console
    console.log('Login Data:', data)

    // request (post: login data) -> response
    // throw on error

    // return IUser on success
    // return undefined on failure

    await delay(1500)
    return {
      login: 'guest@mail.com',
      name: 'Dear Guest',
      avatar: '',
      token: 'dummy_token',
    }
  }

  public static async auth(data: IAuthData): Promise<IUser | undefined> {
    // eslint-disable-next-line no-console
    console.log('Auth Data:', data)

    // request (post: auth data) -> response
    // throw on error

    // return IUser on success
    // return undefined on failure

    await delay(1500)
    return {
      login: 'guest@mail.com',
      name: 'Dear Guest',
      avatar: '',
      token: 'dummy_token',
    }
  }
}
