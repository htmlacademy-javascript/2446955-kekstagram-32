import {renderGallery} from './gallery.js';
import {getData, sendData} from './api.js';
import {onFormSubmit, hideModal} from './form.js';
import { showAlert, debounce } from './generateRandom.js';
import {showErrorMessage, showSuccessMessage} from './message.js';
import { init as initFilter, getFilteredPictures } from './filter.js';

onFormSubmit (async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  const debouncedRenderGallery = debounce(renderGallery);
  initFilter(data, debouncedRenderGallery);
  renderGallery(getFilteredPictures);
  renderGallery(data);
} catch {
  showAlert();
}
