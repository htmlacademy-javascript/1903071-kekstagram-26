import {isEscapeKey} from './util.js';
import {inputHashtagElement, commentElement, formElement, pristine} from './validationForm.js';
import {resetEffects} from './effects.js';
import {scaleInputElement, imgPrewewElement} from './scale.js';
import {SCALE_MAX} from './magic.js';

const uploadFileInputElement = document.querySelector('#upload-file');
const imgUploadOverlayElement = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const buttonClose = document.querySelector('#upload-cancel');


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

  scaleInputElement.value = `${SCALE_MAX}%`;
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


export {openImgUploadOverlay, closeImgUploadOverlay, imgUploadOverlayElement};
