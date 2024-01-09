import {
  lecture_lira,
  meeting_andromeda,
  meeting_orion,
  office_alkor,
  office_kapella,
  office_meridiana,
  office_mira,
  office_persei,
  office_sirius,
  office_vega,
  workspace_kasiopea,
} from 'src/assets/spaces'
import { IGroupedSpace } from 'src/models'

const OPTIONS = {
  roundTheClock: 'Круглосуточный доступ',
  internetSpeed: 'Высокоскоростной интернет',
  legalAddress: 'Предоставление юридического адреса',
  freeMeeting: 'Бесплатная переговодная 2 часа в неделю',
  printerScaner: 'Принтер / сканер',
  dailyCleaning: 'Ежедневная уборка',
  meetingService: 'Обслуживание проведения переговоров',
  teaCoffeeCookies: 'Чай, кофе, печенье',
  equippedKitchen: 'Оборудованная кухня',
  restWithTennis: 'Зона отдыха с настольным теннисом',
  restZone: 'Зона отдыха',
}

const SALES = {
  residents:
    '* Действует система скидок для резидентов. Более подробную информацию уточняйте у менеджеров или в личном кабинете.',
  conditions:
    '* Сумма может варироваться в зависимости от условий аренды. Подробности уточняйте у менеджера по телефону или оставьте заявку ниже.',
}

const kitchen: IGroupedSpace = {
  name: 'Кухня',
  group: 'public',
  coords: ['26.5%', '74.6%'],

  img: '',
  area: '',
  workspaces: '',
  screen: false,
  ownMeeting: false,
  options: [],
  price: {
    short: '',
    medium: '',
    long: '',
  },
  sales: '',
}

const playroom: IGroupedSpace = {
  name: 'Детская комната',
  group: 'public',
  coords: ['89.8%', '53%'],

  img: '',
  area: '',
  workspaces: '',
  screen: false,
  ownMeeting: false,
  options: [],
  price: {
    short: '',
    medium: '',
    long: '',
  },
  sales: '',
}

const veranda: IGroupedSpace = {
  name: 'Веранда',
  group: 'public',
  coords: ['48.9%', '92%'],

  img: '',
  area: '',
  workspaces: '',
  screen: false,
  ownMeeting: false,
  options: [],
  price: {
    short: '',
    medium: '',
    long: '',
  },
  sales: '',
}

const vega: IGroupedSpace = {
  name: 'Вега',
  group: 'offices',
  coords: ['78.2%', '19%'],

  img: office_vega,
  area: '18,0 м2',
  workspaces: '7',
  screen: false,
  ownMeeting: false,
  options: [
    OPTIONS.roundTheClock,
    OPTIONS.internetSpeed,
    OPTIONS.legalAddress,
    OPTIONS.freeMeeting,
    OPTIONS.printerScaner,
    OPTIONS.dailyCleaning,
  ],
  price: {
    short: '38 000 ₽/мес',
    medium: '105 000 ₽/квартал*',
    long: '495 000 ₽/год*',
  },
  sales: SALES.residents,
}

const persei: IGroupedSpace = {
  name: 'Персей',
  group: 'offices',
  coords: ['72.2%', '67.6%'],

  img: office_persei,
  area: '26,8 м2',
  workspaces: '4',
  screen: false,
  ownMeeting: true,
  options: [
    OPTIONS.roundTheClock,
    OPTIONS.internetSpeed,
    OPTIONS.legalAddress,
    OPTIONS.freeMeeting,
    OPTIONS.printerScaner,
    OPTIONS.dailyCleaning,
  ],
  price: {
    short: '90 000 ₽/мес',
    medium: '260 000 ₽/квартал*',
    long: '1 000 000 ₽/год*',
  },
  sales: SALES.residents,
}

const kapella: IGroupedSpace = {
  name: 'Капелла',
  group: 'offices',
  coords: ['89%', '18%'],

  img: office_kapella,
  area: '47,0 м2',
  workspaces: '5-6',
  screen: false,
  ownMeeting: false,
  options: [
    OPTIONS.roundTheClock,
    OPTIONS.internetSpeed,
    OPTIONS.legalAddress,
    OPTIONS.freeMeeting,
    OPTIONS.printerScaner,
    OPTIONS.dailyCleaning,
  ],
  price: {
    short: '38 000 ₽/мес',
    medium: '105 000 ₽/квартал*',
    long: '495 000 ₽/год*',
  },
  sales: SALES.residents,
}

const sirius: IGroupedSpace = {
  name: 'Сириус',
  group: 'offices',
  coords: ['68.4%', '18%'],

  img: office_sirius,
  area: '18,7 м2',
  workspaces: '5-6',
  screen: false,
  ownMeeting: false,
  options: [
    OPTIONS.roundTheClock,
    OPTIONS.internetSpeed,
    OPTIONS.legalAddress,
    OPTIONS.freeMeeting,
    OPTIONS.printerScaner,
    OPTIONS.dailyCleaning,
  ],
  price: {
    short: '70 000 ₽/мес',
    medium: '260 000 ₽/квартал*',
    long: '1 000 000 ₽/год*',
  },
  sales: SALES.residents,
}

const mira: IGroupedSpace = {
  name: 'Мира',
  group: 'offices',
  coords: ['16.7%', '69.9%'],

  img: office_mira,
  area: '7,3 м2',
  workspaces: '3',
  screen: false,
  ownMeeting: false,
  options: [
    OPTIONS.roundTheClock,
    OPTIONS.internetSpeed,
    OPTIONS.legalAddress,
    OPTIONS.freeMeeting,
    OPTIONS.printerScaner,
    OPTIONS.dailyCleaning,
  ],
  price: {
    short: '35 000 ₽/мес',
    medium: '105 000 ₽/квартал*',
    long: '395 000 ₽/год*',
  },
  sales: SALES.residents,
}

const alkor: IGroupedSpace = {
  name: 'Алькор',
  group: 'offices',
  coords: ['8.2%', '67.5%'],

  img: office_alkor,
  area: '12,0 м2',
  workspaces: '6',
  screen: false,
  ownMeeting: false,
  options: [
    OPTIONS.roundTheClock,
    OPTIONS.internetSpeed,
    OPTIONS.legalAddress,
    OPTIONS.freeMeeting,
    OPTIONS.printerScaner,
    OPTIONS.dailyCleaning,
  ],
  price: {
    short: '55 000 ₽/мес',
    medium: '150 000 ₽/квартал*',
    long: '580 000 ₽/год*',
  },
  sales: SALES.residents,
}

const meridiana: IGroupedSpace = {
  name: 'Меридиана',
  group: 'offices',
  coords: ['14.9%', '51%'],

  img: office_meridiana,
  area: '17,7 м2',
  workspaces: '5-6',
  screen: false,
  ownMeeting: false,
  options: [
    OPTIONS.roundTheClock,
    OPTIONS.internetSpeed,
    OPTIONS.legalAddress,
    OPTIONS.freeMeeting,
    OPTIONS.printerScaner,
    OPTIONS.dailyCleaning,
  ],
  price: {
    short: '65 000 ₽/мес',
    medium: '180 000 ₽/квартал*',
    long: '600 000 ₽/год*',
  },
  sales: SALES.residents,
}

const andromeda: IGroupedSpace = {
  name: 'Андромеда',
  group: 'meetingrooms',
  coords: ['31.1%', '19.2%'],

  img: meeting_andromeda,
  area: '17,2 м2',
  workspaces: '10',
  screen: true,
  ownMeeting: false,
  options: [
    OPTIONS.roundTheClock,
    OPTIONS.internetSpeed,
    OPTIONS.freeMeeting,
    OPTIONS.meetingService,
    OPTIONS.dailyCleaning,
  ],
  price: {
    short: '3 000 ₽/час',
    medium: '7 000 ₽/3 часа',
    long: '14 000 ₽/5 часов*',
  },
  sales: SALES.conditions,
}

const orion: IGroupedSpace = {
  name: 'Орион',
  group: 'meetingrooms',
  coords: ['8.75%', '26.9%'],

  img: meeting_orion,
  area: '10,8 м2',
  workspaces: '6',
  screen: true,
  ownMeeting: false,
  options: [
    OPTIONS.roundTheClock,
    OPTIONS.internetSpeed,
    OPTIONS.freeMeeting,
    OPTIONS.meetingService,
    OPTIONS.dailyCleaning,
  ],
  price: {
    short: '3 000 ₽/час',
    medium: '7 000 ₽/3 часа',
    long: '14 000 ₽/5 часов*',
  },
  sales: SALES.conditions,
}

const kassiopeia: IGroupedSpace = {
  name: 'Кассиопея',
  group: 'workspaces',
  coords: ['50%', '19.5%'],

  img: workspace_kasiopea,
  area: '50,0 м2',
  workspaces: '20',
  screen: false,
  ownMeeting: false,
  options: [
    OPTIONS.internetSpeed,
    OPTIONS.teaCoffeeCookies,
    OPTIONS.equippedKitchen,
    OPTIONS.restWithTennis,
    OPTIONS.printerScaner,
    OPTIONS.dailyCleaning,
  ],
  price: {
    short: '950 ₽/день',
    medium: '7 000 ₽/месяц',
    long: '',
  },
  sales: SALES.residents,
}

const lira: IGroupedSpace = {
  name: 'Лира',
  group: 'lectures',
  coords: ['86.4%', '68.6%'],

  img: lecture_lira,
  area: '50,0 м2',
  workspaces: '20',
  screen: false,
  ownMeeting: false,
  options: [
    OPTIONS.internetSpeed,
    OPTIONS.teaCoffeeCookies,
    OPTIONS.equippedKitchen,
    OPTIONS.restZone,
    OPTIONS.printerScaner,
    OPTIONS.dailyCleaning,
  ],
  price: {
    short: '3 000 ₽/час',
    medium: '(не менее 2-x часов)',
    long: '',
  },
  sales: SALES.residents,
}

export const dummySpace = vega

export const spaces: IGroupedSpace[] = [
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
  offices = 'ОФИСЫ',
  meetingrooms = 'ПЕРЕГОВОРНЫЕ',
  workspaces = 'РАБОЧИЕ МЕСТА В ОПЕНСПЕЙСАХ',
  lectures = 'ЛЕКТОРИИ',
  public = 'ОБЩЕСТВЕННЫЕ',
}

export const tabs = Object.values(CategoriesEnum).filter(
  label => label !== CategoriesEnum.public,
)
