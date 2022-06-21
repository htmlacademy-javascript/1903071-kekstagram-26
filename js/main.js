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
const randomCommentsCount = 3;
const randomMessagesCount = 2;

const getRandomNumber = function (min, max) {
  const random = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(random);
};

const getRandomArrayElement = function(elements) {
  return elements[getRandomNumber(0, elements.length - 1)];
};

const createMessage = function () {
  const randomMessages = [];
  for (let i = 0; i < randomMessagesCount; i++) {
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
  for (let i = 1; i <= randomCommentsCount; i++) {
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
createPhotoDescription();

// Написал сам

const checkCommentLength = function (line, maxLength) {
  if (line.length <= maxLength) {
    return true;
  } else {
    return false;
  }
};
checkCommentLength('asdsad', 5);

