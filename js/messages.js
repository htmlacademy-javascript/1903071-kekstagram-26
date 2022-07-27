import {isEscapeKey} from './util.js';
import {imgUploadOverlayElement} from './user-form.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessageElement = successTemplate.cloneNode(true);
const successButton = successMessageElement.querySelector('.success__button');

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessageElement = errorTemplate.cloneNode(true);
const errorButton = errorMessageElement.querySelector('.error__button');

const onDocumentEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
    closeErrorMessage();
  }
};

const onOverlaySuccessMessage = (evt) => {
  if(evt.target === successMessageElement) {
    closeSuccessMessage();
  }
};

const openSuccessMessage = () => {
  document.body.append(successMessageElement);
  successButton.addEventListener('click', closeSuccessMessage);
  document.addEventListener('keydown', onDocumentEscKeydown);
  successMessageElement.addEventListener('click', onOverlaySuccessMessage);
};

function closeSuccessMessage() {
  successMessageElement.remove();
  document.removeEventListener('keydown', onDocumentEscKeydown);
}

const onOverlayErrorMessage = (evt) => {
  if(evt.target === errorMessageElement) {
    closeErrorMessage();
  }
};

const openErrorMessage = () => {
  document.body.append(errorMessageElement);
  errorButton.addEventListener('click', closeErrorMessage);
  document.addEventListener('keydown', onDocumentEscKeydown);
  errorMessageElement.addEventListener('click', onOverlayErrorMessage);
  imgUploadOverlayElement.classList.add('hidden');
  document.body.classList.add('modal-open');
};

function closeErrorMessage() {
  errorMessageElement.remove();
  document.removeEventListener('keydown', onDocumentEscKeydown);
  imgUploadOverlayElement.classList.remove('hidden');
  document.body.classList.remove('modal-open');
}

export {openSuccessMessage, openErrorMessage};
