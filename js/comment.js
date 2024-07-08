import {getRandomInteger} from '../js/generateRandom.js';
import {message} from '../js/main.js';

const getRandomArrayElement = (items) =>
  items[getRandomInteger(0, items.length - 1)];

const createIdGenerator = () => {
  let numberId = 0;
  return () => {
    numberId += 1;
    return numberId;
  };
};

const generateRandomId = createIdGenerator();

const createMessage = () => Array.from(
  {length: getRandomInteger(1, 2)},
  () => getRandomArrayElement(message),
).join('.');

export {generateRandomId};
export {createMessage};
