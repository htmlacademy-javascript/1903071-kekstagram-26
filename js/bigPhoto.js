import {isEscapeKey} from './util.js';
import {AMOUNT_UPLOAD_COMMENTS} from './variables.js';

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

const bigPictureOpen = () => {
  bigPictureElement.classList.remove('hidden');
  body.classList.add('modal-open');
};

const bigPictureClose = (generateComments) => {
  bigPictureElement.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onBigPictureEscKeydown);
  commentsLoaderElement.removeEventListener('click', generateComments);
};

const renderComment = (comment) => {
  const commentsListItemTemplate = commentsListItemElement.cloneNode(true);
  const img = commentsListItemTemplate.querySelector('img');

  img.src = comment.avatar;
  img.alt = comment.name;
  commentsListItemTemplate.querySelector('p').textContent = comment.message;
  commentsContainerElement.append(commentsListItemTemplate);
};

const showBigPicture = (photo) => {
  bigPictureOpen();
  bigPicturePhotoElement.src = photo.url;
  likesCountElement.textContent = photo.likes;
  commentCountElement.textContent = photo.comments.length;
  socialCaptionElement.textContent = photo.description;
  commentsContainerElement.innerHTML = '';

  const comments = photo.comments;
  let start = 0;
  let end = AMOUNT_UPLOAD_COMMENTS;
  comments.slice(start, end).forEach(renderComment);

  if (comments.length <= AMOUNT_UPLOAD_COMMENTS) {
    commentsLoaderElement.classList.add('hidden');
    loadCommentCountElement.textContent = `${comments.length  } из ${  comments.length} комментариев`;
  } else {
    loadCommentCountElement.textContent = `${end  } из ${  comments.length} комментариев`;
    commentsLoaderElement.classList.remove('hidden');
  }

  const generateComments = () => {
    comments.slice(start += AMOUNT_UPLOAD_COMMENTS, end += AMOUNT_UPLOAD_COMMENTS).forEach(renderComment);
    if (end >= comments.length) {
      commentsLoaderElement.classList.add('hidden');
      end = comments.length;
    }
    loadCommentCountElement.textContent = `${end  } из ${  comments.length} комментариев`;
  };

  commentsLoaderElement.addEventListener('click', generateComments);

  buttonCloseElement.addEventListener('click', () => bigPictureClose(generateComments));

  document.addEventListener('keydown', onBigPictureEscKeydown);
};

export {showBigPicture};
