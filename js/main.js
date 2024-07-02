/* eslint-disable no-console */
// eslint-disable-next-line no-useless-concat
const description = 'А вот это снова я!';

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

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

const generatorPhotoId = createRandomIdFromRangeGenerator(1, 25);
const generatorUrl = createRandomIdFromRangeGenerator(1, 25);
const numberOfLikes = createRandomIdFromRangeGenerator(15, 200);
const numberOfComments = createRandomIdFromRangeGenerator(0, 30);
const id = `id: ${ generatorPhotoId()}`;
const photoLink = `photos/${ generatorUrl() }.jpg`;
const likes = `likes: ${ numberOfLikes()}`;
const comments = `comments: ${ numberOfComments()}`;

const commentator = () => {
  const commentId = createRandomIdFromRangeGenerator(0, 1000);
  const avatar = createRandomIdFromRangeGenerator(1, 6);
  const message = 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.';

  return {
    id: commentId(),
    avatar: `img/avatar-${ avatar() }.svg`,
    message: message,
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  };
};

console.log(description);
console.log(id);
console.log(photoLink);
console.log(likes);
console.log(comments);
console.log(commentator());
