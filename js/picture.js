const thumbNailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = ({comments, description, likes, url, id}) => {
  const thumbNail = thumbNailTemplate.cloneNode(true);

  thumbNail.querySelector('.picture__img').src = url;
  thumbNail.querySelector('.picture__img').alt = description;
  thumbNail.querySelector('.picture__likes').textContent = likes;
  thumbNail.querySelector('.picture__comments').textContent = comments.length;
  thumbNail.dataset.thumbnailId = id;

  return thumbNail;
};

const renderThumbnails = (pictures, container) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  container.append(fragment);
};

export {renderThumbnails};
