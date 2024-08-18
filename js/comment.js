import {getRandomInteger} from './generateRandom.js';
import {MESSAGE} from './generateRandom.js';
import { getRandomArrayElement } from './generateRandom.js';

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

export {generateRandomId};
export {createMessage};
