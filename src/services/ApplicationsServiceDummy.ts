import { IApplicationData } from 'src/models'
import { delay } from 'src/utils'

export default class ApplicationsServiceDummy {
  public static async send(application: IApplicationData) {
    // const response = await axios.post(URL, application)
    // if(response.status >= 400) throw new Error()

    // eslint-disable-next-line no-console
    console.log('Application Data:', application)
    await delay(1500)
    return
  }
}
