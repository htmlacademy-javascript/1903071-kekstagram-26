import {renderPhotos} from './usersPhoto.js';
import {getRandomArrayElement, debounce} from './util.js';

const filtersElement = document.querySelector('.img-filters');
const defaultFilterElement = document.querySelector('#filter-default');
const randomFilterElement = document.querySelector('#filter-random');
const discussedFilterElement = document.querySelector('#filter-discussed');
const filtersButtonsElements = document.querySelectorAll('.img-filters__button');


const comparePhotos = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const getFilteredArrPhotos = (photos, currentFilter) => {
  let filteredArrPhotos = [];
  if (currentFilter === defaultFilterElement) {
    defaultFilterElement.classList.add('img-filters__button--active');
    filteredArrPhotos = photos.slice();
  }
  if (currentFilter === randomFilterElement) {
    randomFilterElement.classList.add('img-filters__button--active');
    for (let i = 0; i < 10; i++) {
      filteredArrPhotos.push(getRandomArrayElement(photos));
    }
  }
  if (currentFilter === discussedFilterElement) {
    discussedFilterElement.classList.add('img-filters__button--active');
    filteredArrPhotos = photos.slice().sort(comparePhotos);
  }
  return filteredArrPhotos;
};

const setFilters = (photos) => {
  filtersElement.classList.remove('img-filters--inactive');

  filtersElement.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('img-filters__button--active')) {
      return;
    }

    filtersButtonsElements.forEach((element) => {
      if(element.classList.contains('img-filters__button--active')) {
        element.classList.remove('img-filters__button--active');
      }
    });

    const photosElements = document.querySelectorAll('.picture');
    photosElements.forEach((element) => element.remove());

    const filteredPhotos = getFilteredArrPhotos(photos, evt.target);
    debounce(() => renderPhotos(filteredPhotos), 500)();
  });
};

export {setFilters};
