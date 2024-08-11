import {resetScale} from './scale.js';
import {
  init as initEffect,
  reset as resetEffect,
} from './effect.js';

const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const errorText = {
  INVALID_COUNT: `Максимум ${MAX_HASHTAG_COUNT} хэштегов`,
  NOT_UNIQUE: 'Хэштеги должны быть уникальными',
  INVALID_PATTERN: 'Неправильный хэштег'
};

const submitButtonText = {
  IDLE: 'Опубликовать',
  SUBMITTING: 'Отправляю...'
};

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const overlay = form.querySelector('.img-upload__overlay');
const cancelButton = form.querySelector('.img-upload__cancel');
const fileField = form.querySelector('.img-upload__input');
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');
const submitButton = form.querySelector('.img-upload__submit');

const pristine = new Pristine (form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error'
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideModal = () => {
  form.reset();
  resetScale();
  resetEffect();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const toggleSubmitButton = (isDisabled) => {
  submitButton.disabled = isDisabled;
  submitButton.textContent = isDisabled
    ? submitButtonText.SUBMITTING
    : submitButtonText.IDLE;
};

const isTextfieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

const normalizeTags = (tagString) => tagString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));

const hasValidTags = (value) => normalizeTags(value).every((tag) => VALID_SYMBOLS.test(tag));

const hasValidCount = (value) => normalizeTags(value).length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const isErrorMessageShown = () => Boolean(document.querySelector('.error'));

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !isTextfieldFocused() && !isErrorMessageShown) {
    evt.preventDefault();
    hideModal();
  }
}

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputchange = () => {
  showModal();
};

const onFormSubmit = (callback) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      toggleSubmitButton (true);
      await callback(new FormData(form));
      toggleSubmitButton();
    }
  });
};

pristine.addValidator (
  hashtagField,
  hasValidCount,
  errorText.INVALID_COUNT,
  3,
  true
);

pristine.addValidator (
  hashtagField,
  hasUniqueTags,
  errorText.NOT_UNIQUE,
  2,
  true
);

pristine.addValidator (
  hashtagField,
  hasValidTags,
  errorText.INVALID_PATTERN,
  1,
  true
);

fileField.addEventListener('change', onFileInputchange);
cancelButton.addEventListener('click', onCancelButtonClick);
initEffect();

export {onFormSubmit, hideModal};
