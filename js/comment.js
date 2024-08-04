import {getRandomInteger} from './generateRandom.js';
import {MESSAGE} from './generateRandom.js';

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
  () => getRandomArrayElement(MESSAGE),
).join('.');

export {getRandomInteger};
export {generateRandomId};
export {createMessage};
export {getRandomArrayElement};
