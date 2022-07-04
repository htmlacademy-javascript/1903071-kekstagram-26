const bigPicture = document.querySelector('.big-picture');
const bigPicturePhoto = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const buttonClose = document.querySelector('.big-picture__cancel');
const socialCaption = document.querySelector('.social__caption');
const commentsContainer = document.querySelector('.social__comments');


const bigPictureOpen = function () {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
};

const bigPictureClose  = function () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};


const showBigPicture = function (photo) {
  bigPictureOpen();
  bigPicturePhoto.src = photo.url;
  likesCount.textContent = photo.likes;
  commentCount.textContent = photo.comments.lenght;
  socialCaption.textContent = 'Описание';
  commentsContainer.innerHTML = '';

  photo.comments.forEach((comment) => {
    const commentsListItem = document.createElement('li');
    commentsListItem.classList.add('social__comment');

    const commentsListItemImage = document.createElement('img');
    commentsListItemImage.classList.add('social__picture');
    commentsListItemImage.src = comment.avatar;
    commentsListItemImage.alt = comment.name;
    commentsListItemImage.width = 35;
    commentsListItemImage.height = 35;
    commentsListItem.append(commentsListItemImage);

    const commentsListItemDescription = document.createElement('p');
    commentsListItemDescription.classList.add('social__text');
    commentsListItemDescription.textContent = comment.message;
    commentsListItem.append(commentsListItemDescription);
    commentsContainer.append(commentsListItem);
  });

  buttonClose.addEventListener('click', bigPictureClose);

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      bigPictureClose();
    }
  });

  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};

export {showBigPicture};
