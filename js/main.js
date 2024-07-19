import {generateThumbnails} from './picture.js';
import {getPictures} from './generateRandom.js';

getPictures();

generateThumbnails(getPictures());
