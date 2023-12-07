import { ISpace } from 'cabinet_ui_kit'

export default interface IGroupedSpace extends ISpace {
  group: 'public' | 'offices' | 'meetingrooms' | 'workspaces' | 'lectures'
  coords: [string, string]
}
