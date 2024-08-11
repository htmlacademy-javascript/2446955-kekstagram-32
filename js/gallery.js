import {renderThumbnails} from './picture';
import {showBigPicture} from './bigSize';

const container = document.querySelector('.pictures');

let pictures = [];

const onContainClick = (evt) => {
  const thumbNail = evt.target.closest('[data-thumbnail-id]');
  if (!thumbNail) {
    return;
  }

  evt.preventDefault();
  const picture = pictures.find(
    (item) => item.id === +thumbNail.dataset.thumbnailId
  );
  showBigPicture(picture);
};

const renderGallery = (currentPictures) => {
  pictures = currentPictures;
  renderThumbnails (pictures, container);
  container.addEventListener('click', onContainClick);
};

export {renderGallery};
