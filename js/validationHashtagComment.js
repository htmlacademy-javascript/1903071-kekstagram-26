import {checkCommentLength} from './util.js';

const formElement = document.querySelector('#upload-select-image');
const inputHashtagElement = document.querySelector('.text__hashtags');
const commentElement = document.querySelector('.text__description');

const pristine = new Pristine(formElement);


const splitString = (value) => value.split(' ');

const validateAmountHashtags = (value) => splitString(value).length <= 3;
//const validateAmountHashtags = (value) => console.log(splitString(value));

pristine.addValidator(inputHashtagElement, validateAmountHashtags);


const validateHashtag = (value) => {
  const re = /^#[A-Za-z0-9А-Яа-яЁё]{1,19}$/;
  const arr = value.split(' ');
  for (const element of arr) {
    if (!re.test(element) && element !== '') {
      return false;
    }
  } return true;
};

pristine.addValidator(inputHashtagElement, validateHashtag);


pristine.addValidator(commentElement, (value) => checkCommentLength(value, 140));


formElement.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if(!isValid) {
    evt.preventDefault();
  }
});
