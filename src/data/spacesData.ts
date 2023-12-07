import { IGroupedSpace } from 'src/models'

const OPTIONS = {
  roundTheClock: 'Круглосуточный доступ',
  internetSpeed: 'Высокоскоростной интернет',
  legalAddress: 'Предоставление юридического адреса',
  freeMeeting: 'Бесплатная переговодная 2 часа в неделю',
  printerScaner: 'Принтер / сканер',
  dailyCleaning: 'Ежедневная уборка',
}

const kitchen: IGroupedSpace = {
  name: 'Кухня',
  group: 'public',
  coords: ['38rem', '73.5rem'],

  img: '',
  area: '',
  workspaces: '',
  screen: false,
  ownMeeting: false,
  options: [],
  price: {
    monthly: 0,
    quarterly: 0,
    yearly: 0,
  },
}

const playroom: IGroupedSpace = {
  name: 'Детская комната',
  group: 'public',
  coords: ['121.5rem', '52rem'],

  img: '',
  area: '',
  workspaces: '',
  screen: false,
  ownMeeting: false,
  options: [],
  price: {
    monthly: 0,
    quarterly: 0,
    yearly: 0,
  },
}

const veranda: IGroupedSpace = {
  name: 'Веранда',
  group: 'public',
  coords: ['66.2rem', '90rem'],

  img: '',
  area: '',
  workspaces: '',
  screen: false,
  ownMeeting: false,
  options: [],
  price: {
    monthly: 0,
    quarterly: 0,
    yearly: 0,
  },
}

export const space: IGroupedSpace = {
  name: 'Енисей',
  group: 'public',
  coords: ['0rem', '0rem'],

  img: 'https://placehold.jp/600x600.png',
  area: '##,# м2',
  workspaces: '###',
  screen: true,
  ownMeeting: false,
  options: [OPTIONS.dailyCleaning],
  price: {
    monthly: 0,
    quarterly: 0,
    yearly: 0,
  },
}

const spacesData: IGroupedSpace[] = [kitchen, playroom, veranda]

export default spacesData
