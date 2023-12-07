import { advantagesData } from 'src/data'
import { IAdvantage } from 'src/models'

export default class AdvantagesService {
  private static items = advantagesData

  public static getAll(): IAdvantage[] {
    return AdvantagesService.items
  }
}
