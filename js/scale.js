import {SCALE_STEP, SCALE_MIN, SCALE_MAX} from './magic.js';

const minusButtonElement = document.querySelector('.scale__control--smaller');
const plusButtonElement = document.querySelector('.scale__control--bigger');
const scaleInputElement = document.querySelector('.scale__control--value');
const imgPrewewElement = document.querySelector('.img-upload__preview img');


const scaleMin = () => {
  let scale = parseInt(scaleInputElement.value, 10);
  if (scale > SCALE_MIN) {
    scale -= SCALE_STEP;
    scaleInputElement.value = `${scale}%`;
    imgPrewewElement.style = `transform: scale(${scale * 0.01})`;
  }
};


const scaleMax = () => {
  let scale = parseInt(scaleInputElement.value, 10);
  if (scale < SCALE_MAX) {
    scale += SCALE_STEP;
    scaleInputElement.value = `${scale}%`;
    imgPrewewElement.style = `transform: scale(${scale * 0.01})`;
  }
};


minusButtonElement.addEventListener('click', scaleMin);
plusButtonElement.addEventListener('click', scaleMax);


export {imgPrewewElement, scaleInputElement};
