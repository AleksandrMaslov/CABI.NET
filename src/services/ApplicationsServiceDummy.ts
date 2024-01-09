import { IApplicationData } from 'src/models'
import { delay } from 'src/utils'

// TODO: Commented POST requests

export default class ApplicationsServiceDummy {
  public static async send(data: IApplicationData) {
    // eslint-disable-next-line no-console
    console.log('Application Data:', data)

    // request (post: application data) -> response
    // throw on error

    await delay(1500)
    return
  }
}
