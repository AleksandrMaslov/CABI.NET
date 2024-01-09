import { spaces } from 'src/data'
import { IGroupedSpace } from 'src/models'
import { delay } from 'src/utils'

export default class SpacesServiceDummy {
  private static items: IGroupedSpace[] = spaces

  public static async getAll(): Promise<IGroupedSpace[]> {
    const spaces = SpacesServiceDummy.items
    await delay(1500)
    return spaces.sort(({ name: nameA }, { name: nameB }) =>
      nameA.localeCompare(nameB),
    )
  }

  public static async getCommercial(): Promise<IGroupedSpace[]> {
    const spaces = await SpacesServiceDummy.getAll()
    return spaces.filter(({ group }) => group !== 'public')
  }
}
