import { IApplicationData, IAuthData, ILoginData, IUser } from 'src/models'
import { delay } from 'src/utils'

const authErrorMsg = 'Ошибка данных авторизации.'

const dummyUser: IUser = {
  login: 'guest@mail.com',
  name: 'Dear Guest',
  avatar: '',
  token: 'dummy_token',
}

// TODO: Commented POST requests
// TODO: GET method

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
    if (!data) throw new Error(authErrorMsg)

    // request (post: login data) -> response
    // throw on error

    // return IUser on success
    // return undefined on failure

    await delay(1500)
    return dummyUser
  }

  public static async authorize(data: IAuthData): Promise<IUser | undefined> {
    // eslint-disable-next-line no-console
    console.log('Auth Data:', data)
    if (!data) throw new Error(authErrorMsg)

    // request (post: auth data) -> response
    // throw on error

    // return IUser on success
    // return undefined on failure

    await delay(1500)
    return dummyUser
  }
}
