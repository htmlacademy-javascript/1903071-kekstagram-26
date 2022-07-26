import {renderPhotos} from './usersPhoto.js';
import './bigPhoto.js';
import './userForm.js';
import './validationForm.js';
import './scale.js';
import './effects.js';
import {getData} from './api.js';
import './messages.js';
import {setFilters} from './filter.js';
import './updatePhoto.js';

getData((photos) => {
  renderPhotos(photos);
  setFilters(photos);
});
