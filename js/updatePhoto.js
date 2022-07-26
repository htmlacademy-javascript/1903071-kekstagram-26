import {uploadFileInputElement} from './userForm.js';
import {imgPrewewElement} from './scale.js';

const fileTipes = ['gif', 'jpg', 'jpeg', 'png'];

uploadFileInputElement.addEventListener('change', () => {
  const file = uploadFileInputElement.files[0];
  const fileName = file.name.toLowerCase();
  const matches = fileTipes.some((it) => fileName.endsWith(it));
  if (matches) {
    imgPrewewElement.src = URL.createObjectURL(file);
  }
});
