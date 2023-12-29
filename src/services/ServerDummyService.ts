import { delay } from 'src/utils'

export default class ServerDummyService {
  public static sendApplicationData() {
    return delay(1500)
  }
}
