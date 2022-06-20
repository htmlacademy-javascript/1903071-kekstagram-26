const messagesInComments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const namesInComments = [
  'Артем',
  'Ольга',
  'Путин Х.',
  'Алексей',
  'Елизавета',
  'Иосиф',
  'Адольф'
];


const photosDescriptionsCount = 25;

const getRandomNumber = function (min, max) {
  const random = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(random);
};

const getRandomArrayElement = (elements) =>
  elements[getRandomNumber(0, elements.length - 1)];

const createComments = () => ({
  id: getRandomNumber(1, 999),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomArrayElement(messagesInComments),
  name: getRandomArrayElement(namesInComments)
});

const randomComments = Array.from({length: 2}, createComments);


const createPhotoDescription = () => ({
  id: getRandomNumber(1, 25),
  url: `photos/${getRandomNumber(1, 25)}.jpg`,
  description: 'Описание фотографии',
  likes: getRandomNumber(15, 200),
  comments: randomComments
});

const photosDescriptions = Array.from({length: photosDescriptionsCount}, createPhotoDescription);


// Написал сам

const checkCommentLength = function (line, maxLength) {
  if (line.length <= maxLength) {
    return true;
  } else {
    return false;
  }
};
checkCommentLength('asdsad', 5);

