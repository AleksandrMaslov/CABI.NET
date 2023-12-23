import { spacesData } from 'src/data'
import { IGroupedSpace, IMarkerData } from 'src/models'

export default class SpaceService {
  private static items: IGroupedSpace[] = spacesData

  public static getAll(): IGroupedSpace[] {
    return SpaceService.items.sort(({ name: nameA }, { name: nameB }) =>
      nameA.localeCompare(nameB),
    )
  }

  public static getCommercial(): IGroupedSpace[] {
    return SpaceService.items
      .filter(({ group }) => group !== 'public')
      .sort(({ name: nameA }, { name: nameB }) => nameA.localeCompare(nameB))
  }

  public static extractMarkersData(items: IGroupedSpace[]): IMarkerData[] {
    return items.map(({ name, coords }: IGroupedSpace) => ({
      key: name,
      tooltip: name,
      coords,
    }))
  }
}
