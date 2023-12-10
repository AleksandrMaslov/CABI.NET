import { spacesData } from 'src/data'
import { IGroupedSpace, IMarkerData } from 'src/models'

export default class SpaceService {
  private static items: IGroupedSpace[] = spacesData

  public static getMarkersData(): IMarkerData[] {
    return SpaceService.items.map(({ name, coords }: IGroupedSpace) => ({
      key: name,
      tooltip: name,
      coords: this.scaleCoordsToWidth(coords, 1040),
    }))
  }

  public static getCommercial(): IGroupedSpace[] {
    return SpaceService.items
      .filter(({ group }) => group !== 'public')
      .sort(({ name: nameA }, { name: nameB }) => nameA.localeCompare(nameB))
  }

  private static scaleCoordsToWidth(
    coords: [string, string],
    width: number = 1360,
    basis: number = 1360,
  ): [string, string] {
    const k = width / basis
    const [x, y] = coords
    return [SpaceService.scale(x, k), SpaceService.scale(y, k)]
  }

  private static scale = (coord: string, k: number) => {
    return `${+coord.split('rem')[0] * k}rem`
  }
}
