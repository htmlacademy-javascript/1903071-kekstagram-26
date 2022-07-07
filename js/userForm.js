import {isEscapeKey} from './util.js';

//const formElement = document.querySelector('.img-upload__form');
const uploadFileInputElement = document.querySelector('#upload-file');
const imgUploadOverlayElement = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const buttonClose = document.querySelector('#upload-cancel');


const onImgUploadOverlayEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    imgUploadOverlayElement.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

const openImgUploadOverlay = () => {
  imgUploadOverlayElement.classList.remove('hidden');
  body.classList.add('modal-open');
};

uploadFileInputElement.addEventListener('change', () => {
  openImgUploadOverlay();
  document.addEventListener('keydown', onImgUploadOverlayEscKeydown);
});

const closeImgUploadOverlay = () => {
  imgUploadOverlayElement.classList.add('hidden');
  body.classList.remove('modal-open');

  uploadFileInputElement.value = '';
  document.removeEventListener('keydown', onImgUploadOverlayEscKeydown);
};

buttonClose.addEventListener('click', () => {
  closeImgUploadOverlay();
});


