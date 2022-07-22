import {isEscapeKey} from './util.js';
import {inputHashtagElement, commentElement, formElement, pristine} from './validationForm.js';
import {resetEffects} from './effects.js';
import {scaleInputElement, imgPrewewElement} from './scale.js';

const uploadFileInputElement = document.querySelector('#upload-file');
const imgUploadOverlayElement = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const buttonClose = document.querySelector('#upload-cancel');

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessageElement = successTemplate.cloneNode(true);
const successButton = successMessageElement.querySelector('.success__button');

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessageElement = errorTemplate.cloneNode(true);
const errorButton = errorMessageElement.querySelector('.error__button');


const onImgUploadOverlayEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    imgUploadOverlayElement.classList.add('hidden');
    body.classList.remove('modal-open');
    formElement.reset();
  }
};

const onInputCancelEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
  }
};

inputHashtagElement.addEventListener('keydown', onInputCancelEscKeydown);
commentElement.addEventListener('keydown', onInputCancelEscKeydown);


const openImgUploadOverlay = () => {
  imgUploadOverlayElement.classList.remove('hidden');
  body.classList.add('modal-open');

  scaleInputElement.value = '100%';
  imgPrewewElement.style = 'transform: scale(1)';
};

uploadFileInputElement.addEventListener('change', () => {
  openImgUploadOverlay();
  document.addEventListener('keydown', onImgUploadOverlayEscKeydown);
});

const closeImgUploadOverlay = () => {
  imgUploadOverlayElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onImgUploadOverlayEscKeydown);

  formElement.reset();
  resetEffects();
  pristine.reset();
};

buttonClose.addEventListener('click', closeImgUploadOverlay);


// Cообщение об успешной отправке

const onDocumentEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
    closeErrorMessage();
    closeImgUploadOverlay();
  }
};

const onNotSuccessMessageElement = (evt) => {
  if(evt.target === successMessageElement) {
    closeSuccessMessage();
  }
};

const openSuccessMessage = () => {
  document.body.append(successMessageElement);
  successButton.addEventListener('click', closeSuccessMessage);
  document.addEventListener('keydown', onDocumentEscKeydown);
  successMessageElement.addEventListener('click', onNotSuccessMessageElement);
};

function closeSuccessMessage() {
  successMessageElement.remove();
  document.removeEventListener('keydown', onDocumentEscKeydown);
}


// Сообщение об ошибке отправки

const onNotErrorMessageElement = (evt) => {
  if(evt.target === errorMessageElement) {
    closeErrorMessage();
  }
};

const openErrorMessage = () => {
  document.body.append(errorMessageElement);
  errorButton.addEventListener('click', closeErrorMessage);
  document.addEventListener('keydown', onDocumentEscKeydown);
  errorMessageElement.addEventListener('click', onNotErrorMessageElement);
  imgUploadOverlayElement.classList.add('hidden');
  document.body.classList.add('modal-open');
};

function closeErrorMessage() {
  errorMessageElement.remove();
  document.removeEventListener('keydown', onDocumentEscKeydown);
  imgUploadOverlayElement.classList.remove('hidden');
  document.body.classList.remove('modal-open');
}

export {openImgUploadOverlay, closeImgUploadOverlay, openSuccessMessage, openErrorMessage};
