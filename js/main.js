import {getRandomInteger} from '../js/generateRandom.js';
import {generateRandomId} from './comment.js';
import {getRandomArrayElement} from '../js/comment.js';
import {createMessage} from '../js/comment.js';
/* eslint-disable no-console */
// eslint-disable-next-line no-useless-concat
const descriptions = [
  'А вот это снова я!',
  'Море сегодня тёплое',
  'Вот вам урожай на оценку',
  'Сегодня гуляла по ТЦ и встретила давнюю подругу'
];
const message = [
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
export {message};
const NAMES = [
  'Иван',
  'Александр',
  'Дмитрий',
  'Павел',
  'Юлия',
  'Мария',
  'Алёна',
  'Марта',
  'Валерий',
  'Ольга',
  'Георгий',
  'Лидия'
];

const photoId = 25;

const createComment = () => ({
  id: generateRandomId(),
  avatar: `img/avatar-${ getRandomInteger(1, 6) }.svg`,
  message: createMessage,
  name: getRandomArrayElement(NAMES)
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${ index }.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomInteger(15, 200),
  comments: Array.from(
    {length: getRandomInteger(0, 30)},
    createComment
  )
});

const getPictures = () => Array.from(
  {length: photoId},
  (_, index) => createPicture(index + 1)
);

getPictures();

console.log(getPictures());
