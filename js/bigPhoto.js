import {isEscapeKey} from './util.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPicturePhotoElement = document.querySelector('.big-picture__img img');
const likesCountElement = document.querySelector('.likes-count');
const loadCommentCountElement = document.querySelector('.social__comment-count');
const commentCountElement = document.querySelector('.comments-count');
const commentsLoaderElement = document.querySelector('.comments-loader');
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
  //document.removeEventListener('click', generateComments);
};

const generateComment = (comment) => {
  const commentsListItemTemplate = commentsListItemElement.cloneNode(true);
  const img = commentsListItemTemplate.querySelector('img');

  img.src = comment.avatar;
  img.alt = comment.name;
  commentsListItemTemplate.querySelector('p').textContent = comment.message;
  commentsContainerElement.append(commentsListItemTemplate);
};

const showBigPicture = function (photo) {
  bigPictureOpen();
  bigPicturePhotoElement.src = photo.url;
  likesCountElement.textContent = photo.likes;
  commentCountElement.textContent = photo.comments.length;
  socialCaptionElement.textContent = photo.description;
  commentsContainerElement.innerHTML = '';

  const comments = photo.comments;
  let start = 0;
  let end = 5;
  comments.slice(start, end).forEach(generateComment);

  commentsLoaderElement.classList.add('hidden');
  if (comments.length === 1) {
    loadCommentCountElement.textContent = `${comments.length} комментарий`;
  }
  if (comments.length === 2 || comments.length === 3 || comments.length === 4) {
    loadCommentCountElement.textContent = `${comments.length} комментария`;
  }
  if (comments.length === 5) {
    loadCommentCountElement.textContent = `${comments.length} комментариев`;
  }

  if (comments.length > end) {
    commentsLoaderElement.classList.remove('hidden');
  }

  function generateComments() {
    comments.slice(start += 5, end += 5).forEach(generateComment);
    if (end >= comments.length) {
      commentsLoaderElement.classList.add('hidden');
      end = comments.length;
    }
    loadCommentCountElement.textContent = `${end  } из ${  comments.length} комментариев`;
  }

  commentsLoaderElement.addEventListener('click', generateComments);

  buttonCloseElement.addEventListener('click', bigPictureClose);

  document.addEventListener('keydown', onBigPictureEscKeydown);
};

export {showBigPicture};
