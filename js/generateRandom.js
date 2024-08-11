import {generateRandomId} from './comment.js';
import {createMessage} from './comment.js';

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getUniqueRandomInteger = (min, max) => {
  const uniqueValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    const rangeOfValues = max - min + 1;
    if (uniqueValues.length >= rangeOfValues) {
      throw new Error(`Перебраны все числа из диапазона от ${min} до ${max}`);
    }
    while(uniqueValues.includes(currentValue)) {
      currentValue = getRandomInteger (min, max);
    }
    uniqueValues.push(currentValue);
    return currentValue;
  };
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const DESCRIPTIONS = [
  'А вот это снова я!',
  'Море сегодня тёплое',
  'Вот вам урожай на оценку',
  'Сегодня гуляла по ТЦ и встретила давнюю подругу'
];
const MESSAGE = [
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
export {MESSAGE};
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
  description: getRandomArrayElement(DESCRIPTIONS),
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

const ALERT_SHOW_TIME = 5000;

const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

const showAlert = () => {
  const dataErrorElement = dataErrorTemplate.cloneNode(true);
  document.body.append(dataErrorElement);

  setTimeout(() => {
    dataErrorElement.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomInteger, getRandomArrayElement, getUniqueRandomInteger, getPictures, showAlert};
