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


export {getRandomNumber, getRandomArrayElement, isEscapeKey, checkCommentLength};
