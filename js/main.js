// Взято с https://learn.javascript.ru/

const randomNumber = function (min, max) {
  const random = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(random);
};

randomNumber();


const checkCommentLength = function (line, maxLength) {
  if (line <= maxLength) {
    line = true;
    return checkCommentLength;
  }
};

checkCommentLength();

