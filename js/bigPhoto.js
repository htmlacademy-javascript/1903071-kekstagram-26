const bigPicture = document.querySelector('.big-picture');
const bigPicturePhoto = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const commentCount = document.querySelector('.comments-count');
const body = document.querySelector('body');
//const buttonClose = document.querySelector('big-picture__cancel');
const socialCaption = document.querySelector('.social__caption');


const bigPictureOpen = function () {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
};

const bigPictureClose = function () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const showBigPicture = function (photo) {
  bigPicturePhoto.src = photo.url;
  likesCount.textContent = photo.likes;
  commentCount.textContent = photo.comments.lenght;
  socialCaption.textContent = photo.description;

  bigPictureOpen();
  bigPictureClose();
};

export {showBigPicture};
