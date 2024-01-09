import { dummyUser } from 'src/data'
import { IAuthData, ILoginData, IUser } from 'src/models'
import { delay } from 'src/utils'

const authErrorMsg = 'Ошибка данных авторизации.'

// TODO: Commented POST requests
// TODO: GET method

export default class AuthServiceDummy {
  public static async login(data: ILoginData): Promise<IUser | undefined> {
    // eslint-disable-next-line no-console
    console.log('Login Data:', data)
    if (!data) throw new Error(authErrorMsg)

    // const response = await axios.post<IUser>(URL, data)
    // if(response.status >= 400) return undefined
    // return response.data

    await delay(1500)
    return dummyUser
  }

  public static async authorize(data: IAuthData): Promise<IUser | undefined> {
    // eslint-disable-next-line no-console
    console.log('Auth Data:', data)
    if (!data) throw new Error(authErrorMsg)

    // const response = await axios.post<IUser>(URL, data)
    // if(response.status >= 400) return undefined
    // return response.data

    await delay(1500)
    return dummyUser
  }
}
