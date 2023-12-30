import { IObject } from 'src/models'
import { delay } from 'src/utils'

export default class ServerDummyService {
  public static sendApplicationData(params?: IObject) {
    // eslint-disable-next-line no-console
    console.log('Данные отправлены:', params)
    return delay(1500)
  }
}
