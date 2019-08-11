import peintball from '../images/paintball.svg';
import masks from '../images/masks.svg';
import team from '../images/team.svg';

import hideAndSeekJpg from '../images/game.jpg';
import hideAndSeekWebP from '../images/game.webp';
import quadroJpg from '../images/quadro.jpg';
import quadroWebP from '../images/quadro.webp';
import peintBallJpg from '../images/index.jpg';
import peintBallWebP from '../images/index.webp';
import straikBallJpg from '../images/straikball.jpg';
import straikBallWebP from '../images/straikball.webp';

export const ADVANTAGES_DATA = [
  {
    id: 1,
    imgSrc: peintball,
    bgImg: 'paintball',
    title: 'Пейнтбольные турниры',
    description: 'В нашем клубе большое внимание уделяется безопасности игры(подробный инструктаж, отличная экипировка, качественное судейство).',
  },
  {
    id: 2,
    imgSrc: masks,
    bgImg: 'mask',
    title: 'Cценарные игры',
    description: 'В нашем клубе большое внимание уделяется безопасности игры(подробный инструктаж, отличная экипировка, качественное судейство).',
  },
  {
    id: 3,
    imgSrc: team,
    bgImg: 'team',
    title: 'Корпоративы и тимбилдинги',
    description: 'В нашем клубе большое внимание уделяется безопасности игры(подробный инструктаж, отличная экипировка, качественное судейство).',
  },
];

export const ADVANTAGES_PLACE = [
  {
    id: 1,
    title: 'Площадка 3200 кв.м',
    description: 'Застекленная, освещенная, со спец. декорациями',
  },
  {
    id: 2,
    title: 'Лаунж зона',
    description: 'Раздевалка, туалет, камера хранения, кухня и бар',
  },
  {
    id: 3,
    title: 'Охраняемая парковка',
    description: 'Для авто, мото, вело транспорта',
  },
  {
    id: 4,
    title: 'Фото-видео',
    description: 'Незабываемые селфи, друзья обзавидуются',
  },
];

export const CARDS_DATA = [
  {
    id: 1,
    title: 'Хоррор-квест “ПРЯТКИ”',
    description: 'Залез — нашёл — украл — принёс, всё просто, не так ли ….?',
    imgBg: 'strike',
    posterUrlJpg: hideAndSeekJpg,
    posterUrlWebp: hideAndSeekWebP,
    tag: '18+',
  },
  {
    id: 2,
    title: 'Пейнтбол',
    description: 'Пейнтбол — игра для всех и каждого! Мы организовываем пейнтбольные турниры и сценарные игры',
    imgBg: 'man',
    posterUrlJpg: peintBallJpg,
    posterUrlWebp: peintBallWebP,
    tag: 'для новичков',
  },
  {
    id: 3,
    title: 'Квадроциклы и баги',
    description: 'Квадроциклы и Багги легки в управлении, имеют достаточную проходимость, а предоставляемая экипировка, сделает Вашу прогулку не только увлекательной, но и безопасной.',
    imgBg: 'kvadro',
    posterUrlJpg: quadroJpg,
    posterUrlWebp: quadroWebP,
  },
  {
    id: 4,
    title: 'Страйкбол',
    description: 'Игра рассчитана как на новичков, так и на профи! Только для тех, кому 16+',
    imgBg: 'strike',
    posterUrlJpg: straikBallJpg,
    posterUrlWebp: straikBallWebP,
    tag: 'TOP',
  },
];

export const WEEK_DAY_SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const CALENDAR_ORDER_LIST = [
  {
    id: 1,
    available: true,
    time: '22:00',
    day: null,
  },
  {
    id: 2,
    available: true,
    time: '00:00',
    day1: null,
  },
  {
    id: 3,
    available: false,
    time: '02:00',
    day1: null,
  },
  {
    id: 4,
    available: true,
    time: '04:00',
    day1: null,
  },
];
