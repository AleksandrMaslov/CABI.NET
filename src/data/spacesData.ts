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

const vega: IGroupedSpace = {
  name: 'Вега',
  group: 'offices',
  coords: ['105.7rem', '19rem'],

  img: 'https://placehold.jp/600x600.png',
  area: '26,8 м2',
  workspaces: '5-6',
  screen: false,
  ownMeeting: false,
  options: [OPTIONS.dailyCleaning],
  price: {
    monthly: 0,
    quarterly: 0,
    yearly: 0,
  },
}

const persei: IGroupedSpace = {
  name: 'Персей',
  group: 'offices',
  coords: ['97.5rem', '72rem'],

  img: 'https://placehold.jp/600x600.png',
  area: '##,# м2',
  workspaces: '#',
  screen: false,
  ownMeeting: false,
  options: [],
  price: {
    monthly: 0,
    quarterly: 0,
    yearly: 0,
  },
}

const kapella: IGroupedSpace = {
  name: 'Капелла',
  group: 'offices',
  coords: ['120.5rem', '20rem'],

  img: 'https://placehold.jp/600x600.png',
  area: '##,# м2',
  workspaces: '#',
  screen: false,
  ownMeeting: false,
  options: [],
  price: {
    monthly: 0,
    quarterly: 0,
    yearly: 0,
  },
}

const sirius: IGroupedSpace = {
  name: 'Сириус',
  group: 'offices',
  coords: ['92rem', '17rem'],

  img: 'https://placehold.jp/600x600.png',
  area: '##,# м2',
  workspaces: '#',
  screen: false,
  ownMeeting: false,
  options: [],
  price: {
    monthly: 0,
    quarterly: 0,
    yearly: 0,
  },
}

const mira: IGroupedSpace = {
  name: 'Мира',
  group: 'offices',
  coords: ['23rem', '68.6rem'],

  img: 'https://placehold.jp/600x600.png',
  area: '##,# м2',
  workspaces: '#',
  screen: false,
  ownMeeting: false,
  options: [],
  price: {
    monthly: 0,
    quarterly: 0,
    yearly: 0,
  },
}

const alkor: IGroupedSpace = {
  name: 'Алькор',
  group: 'offices',
  coords: ['11rem', '68rem'],

  img: 'https://placehold.jp/600x600.png',
  area: '##,# м2',
  workspaces: '#',
  screen: false,
  ownMeeting: false,
  options: [],
  price: {
    monthly: 0,
    quarterly: 0,
    yearly: 0,
  },
}

const meridiana: IGroupedSpace = {
  name: 'Меридиана',
  group: 'offices',
  coords: ['20rem', '50rem'],

  img: 'https://placehold.jp/600x600.png',
  area: '##,# м2',
  workspaces: '#',
  screen: false,
  ownMeeting: false,
  options: [],
  price: {
    monthly: 0,
    quarterly: 0,
    yearly: 0,
  },
}

const andromeda: IGroupedSpace = {
  name: 'Андромеда',
  group: 'meetingrooms',
  coords: ['42rem', '19rem'],

  img: 'https://placehold.jp/600x600.png',
  area: '##,# м2',
  workspaces: '#',
  screen: false,
  ownMeeting: false,
  options: [],
  price: {
    monthly: 0,
    quarterly: 0,
    yearly: 0,
  },
}

const orion: IGroupedSpace = {
  name: 'Орион',
  group: 'meetingrooms',
  coords: ['11.8rem', '26.5rem'],

  img: 'https://placehold.jp/600x600.png',
  area: '##,# м2',
  workspaces: '#',
  screen: false,
  ownMeeting: false,
  options: [],
  price: {
    monthly: 0,
    quarterly: 0,
    yearly: 0,
  },
}

const kassiopeia: IGroupedSpace = {
  name: 'Кассиопея',
  group: 'workspaces',
  coords: ['67rem', '16.5rem'],

  img: 'https://placehold.jp/600x600.png',
  area: '##,# м2',
  workspaces: '#',
  screen: false,
  ownMeeting: false,
  options: [],
  price: {
    monthly: 0,
    quarterly: 0,
    yearly: 0,
  },
}

const lira: IGroupedSpace = {
  name: 'Лира',
  group: 'lectures',
  coords: ['117rem', '68rem'],

  img: 'https://placehold.jp/600x600.png',
  area: '##,# м2',
  workspaces: '#',
  screen: false,
  ownMeeting: false,
  options: [],
  price: {
    monthly: 0,
    quarterly: 0,
    yearly: 0,
  },
}

export const spacesData: IGroupedSpace[] = [
  kassiopeia,
  lira,
  andromeda,
  orion,
  mira,
  alkor,
  meridiana,
  kapella,
  sirius,
  persei,
  vega,
  kitchen,
  playroom,
  veranda,
]

export enum CategoriesEnum {
  public = 'ОБЩЕСТВЕННЫЕ',
  offices = 'ОФИСЫ',
  meetingrooms = 'ПЕРЕГОВОРНЫЕ',
  workspaces = 'РАБОЧИЕ МЕСТА В ОПЕНСПЕЙСАХ',
  lectures = 'ЛЕКТОРИИ',
}

export const tabs = Object.values(CategoriesEnum).filter(
  label => label !== CategoriesEnum.public,
)
