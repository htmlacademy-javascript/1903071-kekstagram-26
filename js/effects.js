import {imgPrewewElement} from './scale.js';

const sliderElement = document.querySelector('.effect-level__slider');
const inputEffectsValueElement = document.querySelector('.effect-level__value');
const formElement = document.querySelector('.img-upload__form');


const effects = [
  {
    name: 'none',
    min: 0,
    max: 0,
    step: 0,
    style: 'none',
    unit: '',
  },

  {
    name: 'chrome',
    min: 0,
    max: 1,
    step: 0.1,
    style: 'grayscale',
    unit: '',
  },

  {
    name: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    style: 'sepia',
    unit: '',
  },

  {
    name: 'marvin',
    min: 0,
    max: 100,
    step: 1,
    style: 'invert',
    unit: '%',
  },

  {
    name: 'phobos',
    min: 0,
    max: 3,
    step: 0.1,
    style: 'blur',
    unit: 'px',
  },

  {
    name: 'heat',
    min: 1,
    max: 3,
    step: 0.1,
    style: 'brightness',
    unit: '',
  },
];

sliderElement.classList.add('hidden');

const defaultEffect = effects[0];

let chosenEffect = defaultEffect;

const isDefault = () => chosenEffect === defaultEffect;

const updateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    start: chosenEffect.max,
    step: chosenEffect.step,
  });

  if (isDefault()) {
    sliderElement.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if (evt.target.classList.contains('effects__radio')) {
    chosenEffect = effects.find((effect) => effect.name === evt.target.value);
    updateSlider();
  }
};

const onSliderUpdate = () => {
  imgPrewewElement.style.filter = 'none';
  imgPrewewElement.className = '';
  inputEffectsValueElement.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  imgPrewewElement.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  imgPrewewElement.classList.add(`effects__preview--${chosenEffect.name}`);
  inputEffectsValueElement.value = sliderValue;
};


const resetEffects = () => {
  chosenEffect = defaultEffect;
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: defaultEffect.min,
    max: defaultEffect.max,
  },
  start: defaultEffect.max,
  step: defaultEffect.step,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

formElement.addEventListener('change', onFormChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export {resetEffects};
