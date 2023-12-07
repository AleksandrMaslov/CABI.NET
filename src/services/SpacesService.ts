import { spacesData } from 'src/data'
import { IGroupedSpace, IMarkerData } from 'src/models'

export default class SpaceService {
  private static items: IGroupedSpace[] = spacesData

  public static getMarkersData(): IMarkerData[] {
    return SpaceService.items.map(({ name, coords }: IGroupedSpace) => ({
      key: name,
      tooltip: name,
      coords,
    }))
  }
}
