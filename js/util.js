const getRandomNumber = function (min, max) {
  const random = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(random);
};


const getRandomArrayElement = function(elements) {
  return elements[getRandomNumber(0, elements.length - 1)];
};


const checkCommentLength = function (line, maxLength) {
  if (line.length <= maxLength) {
    return true;
  } else {
    return false;
  }
};


function isEscapeKey(evt) {
  return evt.key === 'Escape';
}


export {getRandomNumber, getRandomArrayElement, isEscapeKey, checkCommentLength};
