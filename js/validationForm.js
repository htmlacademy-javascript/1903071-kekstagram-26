import {checkCommentLength } from './util.js';
import {sendData} from './api.js';
import {openSuccessMessage, openErrorMessage} from './messages.js';

const formElement = document.querySelector('#upload-select-image');
const inputHashtagElement = document.querySelector('.text__hashtags');
const commentElement = document.querySelector('.text__description');

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__text-error',
});

const splitString = (value) => value.toLowerCase().split(' ');

const validateAmountHashtags = (value) => splitString(value).length <= 5;

pristine.addValidator(inputHashtagElement, validateAmountHashtags, 'Не более 5 хештегов');


const validateHashtag = (value) => {
  const re = /^#[A-Za-z0-9А-Яа-яЁё]{1,19}$/;
  const arr = value.split(' ');
  for (const element of arr) {
    if (!re.test(element) && element !== '') {
      return false;
    }
  } return true;
};

pristine.addValidator(inputHashtagElement, validateHashtag, 'Хештег должен начинаться с #, строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации, емодзи.');


const testUnique = (value) => {
  const n = value.length;
  for (let i = 0; i < n-1; i++) {
    for (let j = i+1; j < n; j++) {
      if (value[ i ] === value[j]) {
        return false;
      }
    }
  }
  return true;
};

pristine.addValidator(inputHashtagElement, (value) => testUnique(splitString(value)), 'Один и тот же хэш-тег не может быть использован дважды');

pristine.addValidator(commentElement, (value) => checkCommentLength(value, 140), 'Не более 140 символов');

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    sendData(
      openSuccessMessage,
      openErrorMessage,
      new FormData(evt.target),
    );
  }
});

export {inputHashtagElement, commentElement, formElement, pristine};
