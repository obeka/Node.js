const hbs = require('handlebars');

const subjects = [
  'shark',
  'popcorn',
  'poison',
  'fork',
  'cherry',
  'toothbrush',
  'cannon',
];

const punchlines = [
  'watch movie with',
  'spread some love',
  'put on cake',
  'clean toilets',
  'go to the moon',
  'achieve world piece',
  'help people learn programing',
];
const getRandomWord = () => {
  const ranNum = Math.floor(Math.random() * 7);
  return ranNum;
}


const drawCard = () => {
  const subjectRan = subjects[getRandomWord()];
  const punchlineRan = punchlines[getRandomWord()];
  const cardData = {
    subject : subjectRan,
    punchline : punchlineRan
  }
  return cardData
}

const card = "{{subject}} is greater to {{punchline}}";
const template = hbs.compile(card);
const data = drawCard();
const result = template(data);

console.log(result)