import {createPhotoDescription} from './data.js';
import {showBigPicture} from './bigPhoto.js';


const picturesElements = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureItems = createPhotoDescription();
const picturesFragment = document.createDocumentFragment();

/*pictures.addEventListener('click', (evt) => {
  console.log(evt.target.nodeName);
  if (evt.target.nodeName === 'IMG') {
    console.log('тест');
    //showBigPicture();
  }
});*/

pictureItems.forEach(({url, likes, comments}) => {
  const pictureItem = pictureTemplate.cloneNode(true);
  pictureItem.querySelector('.picture__img').src = url;
  pictureItem.querySelector('.picture__likes').textContent = likes;
  pictureItem.querySelector('.picture__comments').textContent = comments.length;
  picturesFragment.append(pictureItem);

  pictureItem.addEventListener('click', () => {
    showBigPicture({url, likes, comments});
  });
});

picturesElements.append(picturesFragment);

