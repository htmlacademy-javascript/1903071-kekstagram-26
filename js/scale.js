const minusButtonElement = document.querySelector('.scale__control--smaller');
const plusButtonElement = document.querySelector('.scale__control--bigger');
const scaleInputElement = document.querySelector('.scale__control--value');
const imgPrewewElement = document.querySelector('.img-upload__preview img');


scaleInputElement.value = '100%';


const scaleMin = () => {
  let scale = parseInt(scaleInputElement.value, 10);
  if (scale > 25) {
    scale -= 25;
    scaleInputElement.value = `${scale}%`;
    imgPrewewElement.style = `transform: scale(${scale * 0.01})`;
  }
};


const scaleMax = () => {
  let scale = parseInt(scaleInputElement.value, 10);
  if (scale < 100) {
    scale += 25;
    scaleInputElement.value = `${scale}%`;
    imgPrewewElement.style = `transform: scale(${scale * 0.01})`;
  }
};

const addScaleHandler = () => {
  minusButtonElement.addEventListener('click', scaleMin);
  plusButtonElement.addEventListener('click', scaleMax);
};
addScaleHandler();

export {imgPrewewElement};
