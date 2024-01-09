import { IGroupedSpace, IMarkerData } from 'src/models'

const getSpaceMarkerData = (space: IGroupedSpace): IMarkerData => {
  return {
    tooltip: space.name,
    coords: space.coords,
  }
}

export default getSpaceMarkerData
