import { spaces } from 'src/data'
import { IGroupedSpace } from 'src/models'
import { delay } from 'src/utils'

const spacesRequestErrorMsg = 'Ошибка запроса данных о помещниях.'

export default class SpacesServiceDummy {
  private static items: IGroupedSpace[] = spaces

  public static async getAll(): Promise<IGroupedSpace[]> {
    try {
      // const { data } = await axios.get<IGroupedSpace[]>(URL)

      const data = SpacesServiceDummy.items
      const sorted = data.sort(({ name: A }, { name: B }) => A.localeCompare(B))
      await delay(1500)
      return sorted
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(spacesRequestErrorMsg)
      return []
    }
  }

  public static async getCommercial(): Promise<IGroupedSpace[]> {
    const spaces = await SpacesServiceDummy.getAll()
    const filtered = spaces.filter(({ group }) => group !== 'public')
    return filtered
  }
}
