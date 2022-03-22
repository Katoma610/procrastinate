console.log('Заработало');
let phrases = [
  { text: 'полежать на диване', image: '../images/sofa.png' },
  { text: 'поиграть в компьютер', image: '../images/computer.png' },
  { text: 'пойти поспать', image: '../images/bed.png' },
  { text: 'посмотреть Ютуб', image: '../images/youtube.png' },
  { text: 'полистать Тик Ток', image: '../images/tiktok.png' },
  { text: 'прочитать про зарплаты в других странах и задуматься о переезде', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
  { text: 'почитать последние новости', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
  { text: 'послушать песни', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
  { text: 'начать смотреть сериал', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
  { text: 'проверить непрочитанные сообщения', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let logo = document.querySelector('.logo');
let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

let ri = getRandomElement(phrases);
phrase.textContent = ri.text;
image.src = ri.image;

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)
  

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  // выводите элементы массива в консоль, используя i
 // console.log(phrases[i]);
  smoothly(phrase, 'textContent', phrases[i].text); 
  smoothly(image, 'src', phrases[i].image); 
}


