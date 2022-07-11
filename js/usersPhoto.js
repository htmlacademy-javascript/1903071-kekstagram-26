import {createPhotoDescription} from './data.js';
import {showBigPicture} from './bigPhoto.js';


const picturesElements = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureItems = createPhotoDescription();
const picturesFragment = document.createDocumentFragment();

/*picturesElements.addEventListener('click', (evt) => {
  if (evt.target.tagName === 'IMG') {
    console.log(evt.target.id);
    showBigPicture(evt.target.id);
  }
});*/

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

