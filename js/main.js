import {renderPhotos} from './users-photo.js';
import './big-photo.js';
import './user-form.js';
import './validation-form.js';
import './scale.js';
import './effects.js';
import {getData} from './api.js';
import './messages.js';
import {setFilters} from './filter.js';
import './update-photo.js';

getData((photos) => {
  renderPhotos(photos);
  setFilters(photos);
});
