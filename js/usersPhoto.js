import {showBigPicture} from './bigPhoto.js';


const picturesElements = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const renderPhotos = (pictureItems) => {
  const picturesFragment = document.createDocumentFragment();

  pictureItems.forEach(({url, likes, comments, description}) => {
    const pictureItem = pictureTemplate.cloneNode(true);
    pictureItem.querySelector('.picture__img').src = url;
    pictureItem.querySelector('.picture__likes').textContent = likes;
    pictureItem.querySelector('.picture__comments').textContent = comments.length;
    picturesFragment.append(pictureItem);

    pictureItem.addEventListener('click', () => {
      showBigPicture({url, likes, comments, description});
    });
  });
  picturesElements.append(picturesFragment);
};

export {renderPhotos};
