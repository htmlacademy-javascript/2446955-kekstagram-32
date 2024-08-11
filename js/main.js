import {renderGallery} from './gallery.js';
import {getData, sendData} from './api.js';
import {onFormSubmit, hideModal} from './form.js';
import { showAlert } from './generateRandom.js';
import {showErrorMessage, showSuccessMessage} from './message.js';

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
  renderGallery(data);
} catch {
  showAlert();
}
