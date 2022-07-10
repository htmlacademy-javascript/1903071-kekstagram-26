import {getRandomNumber, getRandomArrayElement} from './util.js';

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

const descriptions = [
  'Это мы на луне',
  'А тут мы в прекрасной России будущего',
  'Съездили на выходных в Антарктиду, покормили пингвинов',
  'Первый раз в жизни увидел ежа',
  'Это мой котя',
  'С днем рождения меня',
  'Фото номер 6',
  'Фото номер 7',
  'Всех с первомаем!',
];

const photosDescriptionsCount = 25;

const createMessage = function () {
  const randomMessages = [];
  for (let i = 0; i < getRandomNumber(1, 2); i++) {
    randomMessages.push(messagesInComments[getRandomNumber(0, messagesInComments.length - 1)]);
  }
  return randomMessages;
};

const createComments = () => ({
  id: getRandomNumber(1, 999),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(namesInComments)
});

const createRandomComments = function () {
  const randomComments = [];
  for (let i = 1; i <= getRandomNumber(1, 120); i++) {
    randomComments.push(createComments());
  }
  return randomComments;
};

const createPhotoDescription = () => {
  const photoDescriptions = [];
  for (let i = 1; i <= photosDescriptionsCount; i++) {
    photoDescriptions.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomArrayElement(descriptions),
      likes: getRandomNumber(15, 200),
      comments: createRandomComments()
    });
  }
  return photoDescriptions;
};


export {createPhotoDescription};
