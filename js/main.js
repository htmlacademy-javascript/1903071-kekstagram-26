import {renderPhotos} from './usersPhoto.js';
import './bigPhoto.js';
import {closeImgUploadOverlay} from './userForm.js';
import {setsetUserFormSubmit} from './validationForm.js';
import './scale.js';
import './effects.js';
import {getData} from './api.js';


getData((photos) => {
  renderPhotos(photos);
});

setsetUserFormSubmit(closeImgUploadOverlay);
