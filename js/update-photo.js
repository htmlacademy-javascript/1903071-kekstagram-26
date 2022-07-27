import {uploadFileInputElement} from './user-form.js';
import {imgPrewewElement} from './scale.js';

const FILE_TIPES = ['gif', 'jpg', 'jpeg', 'png'];

uploadFileInputElement.addEventListener('change', () => {
  const file = uploadFileInputElement.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TIPES.some((it) => fileName.endsWith(it));
  if (matches) {
    imgPrewewElement.src = URL.createObjectURL(file);
  }
});
