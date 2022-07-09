import {isEscapeKey} from './util.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPicturePhotoElement = document.querySelector('.big-picture__img img');
const likesCountElement = document.querySelector('.likes-count');
const commentCountElement = document.querySelector('.social__comment-count span');
//const commentsLoaderElement = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const buttonCloseElement = document.querySelector('.big-picture__cancel');
const socialCaptionElement = document.querySelector('.social__caption');
const commentsContainerElement = document.querySelector('.social__comments');
const commentsListItemElement = document.querySelector('.social__comment');


const onBigPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    bigPictureElement.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

const bigPictureOpen = function () {
  bigPictureElement.classList.remove('hidden');
  body.classList.add('modal-open');
};

const bigPictureClose  = function () {
  bigPictureElement.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onBigPictureEscKeydown);
};


const showBigPicture = function (photo) {
  bigPictureOpen();
  bigPicturePhotoElement.src = photo.url;
  likesCountElement.textContent = photo.likes;
  commentCountElement.textContent = photo.comments.lenght;
  socialCaptionElement.textContent = 'Описание';
  commentsContainerElement.innerHTML = '';


  photo.comments.forEach((comment) => {
    const commentsListItemTemplate = commentsListItemElement.cloneNode(true);
    const img = commentsListItemTemplate.querySelector('img');

    img.src = comment.avatar;
    img.alt = comment.name;
    commentsListItemTemplate.querySelector('p').textContent = comment.message;
    commentsContainerElement.append(commentsListItemTemplate);
  });

  buttonCloseElement.addEventListener('click', bigPictureClose);

  document.addEventListener('keydown', onBigPictureEscKeydown);
};

export {showBigPicture};
