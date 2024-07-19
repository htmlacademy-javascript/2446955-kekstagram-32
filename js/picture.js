const thumbNailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = (picture) => {
  const thumbNail = thumbNailTemplate.cloneNode(true);

  thumbNail.querySelector('.picture__img').src = picture.url;
  thumbNail.querySelector('.picture__img').alt = picture.description;
  thumbNail.querySelector('.picture__likes').textContent = picture.likes;
  thumbNail.querySelector('.picture__comments').textContent = picture.comments.length;

  return thumbNail;
};

const generateThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const thumbNail = createThumbnail(picture);
    fragment.append(thumbNail);
  });
  container.append(fragment);

};

export {generateThumbnails};
