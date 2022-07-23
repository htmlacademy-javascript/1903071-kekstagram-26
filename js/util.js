const getRandomNumber = function (min, max) {
  const random = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(random);
};


const getRandomArrayElement = function(elements) {
  return elements[getRandomNumber(0, elements.length - 1)];
};


const checkCommentLength = (line, maxLength) => line.length <= maxLength;


function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

export {getRandomNumber, getRandomArrayElement, isEscapeKey, checkCommentLength, showAlert};
