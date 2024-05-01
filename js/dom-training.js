// // Task 5.1.1
// const firstInputEl = document.querySelector('.js-first-input');
// const secondInputEl = document.querySelector('.js-second-input');
// const outputEl = document.querySelector('.js-output');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = event => {
//   const sum = (parseFloat(firstInputEl.value) + parseFloat(secondInputEl.value)).toFixed(2);
//   console.log(sum);
//   outputEl.insertAdjacentHTML('afterbegin', `Result: ${sum}`);
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.1.2
// const btnEl = document.querySelector('.js-btn');
// const valueEl = document.querySelector('.js-value');

// const onBtnElClick = event => {
//   const squaredValue = Math.pow(+valueEl.textContent, 2);
//   valueEl.textContent = squaredValue;
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.1.3
// const values = [0, 1, 2, 3, 4, 5];

// const containerEl = document.querySelector('.container');
// const resultEl = document.querySelector('.js-result');
// const btnEl = document.querySelector('.js-btn');

// const markup = values.map(el => `<p class="js-value">${el}</p>`).join('');
// containerEl.innerHTML = markup;

// const onBtnElClick = event => {
//   const valueElements = [...document.querySelectorAll('.js-value')];
//   const result = valueElements.reduce((sum, el) => sum + parseInt(el.textContent), 0);
//   resultEl.textContent = result;
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.1.4
// const setRandomColor = () => {
//   const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//   return randomColor;
// };

// const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const containerEl = document.querySelector('.container');

// const markup = values.map(el => `<p class="value js-value">${el}</p>`).join('');
// containerEl.innerHTML = markup;
// const valueElements = [...document.querySelectorAll('.js-value')];
// valueElements.map(el => (el.style.backgroundColor = setRandomColor()));

// const onValueElClick = event => {
//   const { target } = event;

//   if (target.nodeName !== 'P') {
//     return;
//   }
//   target.textContent = Math.pow(+target.textContent, 2);
// };

// containerEl.addEventListener('click', onValueElClick);

// Task 5.1.5
// const inputEl = document.querySelectorAll('.js-input');

// const onInputElBlur = event => {
//   const { target } = event;
//   target.value = Math.pow(target.value, 2);
// };

// inputEl.forEach(el => el.addEventListener('blur', onInputElBlur));

// Task 5.2.1
// const outputEl = document.querySelector('.js-output');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = event => {
//   const result = (100 * (100 + 1)) / 2;
//   outputEl.textContent = result;
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.2.2
// См. Task 5.1.1

// Task 5.2.3
// const resultEl = document.querySelector('.js-result');
// const textEl = document.querySelectorAll('.js-text');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = () => {
//   const result = textEl.length;
//   resultEl.innerHTML = `В тексті ${result} абзаців.`;
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.2.4
// const inputEl = document.querySelector('.js-input');
// const btnEl = document.querySelector('.js-btn');
// const outputEl = document.querySelector('.js-output');

// const onBtnElClick = event => {
//   const result = inputEl.value.length;
//   outputEl.textContent = result;
// };

// Task 5.3.1
// const inputEl = document.querySelector('.js-input');
// const btnEl = document.querySelector('.js-btn');
// const outputEl = document.querySelector('.js-output');

// const factorial = n => {
//   let result = 1;
//   while (n) {
//     result *= n--;
//   }
//   return result;
// };

// // function factorial(n) {
// //     return (n != 1) ? n * factorial(n - 1) : 1;
// //   }

// const onBtnElClick = () => {
//   outputEl.textContent = factorial(inputEl.value);
//   inputEl.value = '';
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.3.2
// const firstInputEl = document.querySelector('.js-first-input');
// const secondInputEl = document.querySelector('.js-second-input');
// const outputEl = document.querySelector('.js-output');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = () => {
//   const result =
//     firstInputEl.value > secondInputEl.value ? firstInputEl.value : secondInputEl.value;
//   console.log(typeof secondInputEl.value);
//   outputEl.textContent = result;
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.3.3
// const inputEl = document.querySelector('.js-input');
// const outputEl = document.querySelector('.js-output');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = () => {
//   const digitsArr = inputEl.value.split('');
//   const result = digitsArr.reduce((sum, el) => sum + Number(el), 0);
//   outputEl.textContent = result;
//   inputEl.value = '';
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.3.4
// const inputEl = document.querySelector('.js-input');
// const outputEl = document.querySelector('.js-output');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = () => {
//   const result = inputEl.value.split('').reverse().join('');
//   outputEl.textContent = result;
//   inputEl.value = '';
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.3.5
// const createParagraphes = n => {
//   const arr = [...Array(n)].map((_, i) => i + 1);
//   const markup = arr.map(el => `<p class="js-output">${el}</p>`).join('');
//   return markup;
// };

// const containerEl = document.querySelector('.js-container');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = () => {
//   containerEl.innerHTML = createParagraphes(10);
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.3.6
// См. Task 5.3.1

// Task 5.4.1
// const numbers = [1, 4, 2, 6, 4, 8, 11, 9, 0];

// const containerEl = document.querySelector('.js-container');

// const createParagraphes = arr => {
//   const items = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     const color = getRandomHexColor();
//     const item = document.createElement('p');
//     item.style.backgroundColor = color;
//     item.classList.add('output', 'js-output');
//     item.textContent = arr[i];
//     items.push(item);
//   }
//   containerEl.append(...items);
//   // const markup = arr.map(el => `<p class='js-output'>${el}</p>`).join('');
//   // return markup;
// };

// const getRandomHexColor = () => {
//   const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//   return randomColor;
// };

// function factorial(n) {
//   return n != 1 ? n * factorial(n - 1) : 1;
// }

// createParagraphes(numbers);

// const onOutputElClick = event => {
//   const { target } = event;
//   if (target.nodeName !== 'P') {
//     return;
//   }
//   target.textContent = factorial(+target.textContent);
// };

// containerEl.addEventListener('click', onOutputElClick);

// Task 5.4.2
// const btnEl = document.querySelector('.js-btn');
// const linksEls = document.querySelectorAll('.js-link');

// const onBtnElClick = event => {
//   const hrefArr = [];
//   linksEls.forEach(el => hrefArr.push(el.href));
//   console.log(hrefArr);
//   return hrefArr;
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.4.3

// Task 5.4.4
// const monthsArr = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];

// const nowYearEl = document.querySelector('.js-now-year');
// const nowMonthEl = document.querySelector('.js-now-month');
// const nowDayEl = document.querySelector('.js-now-day');

// const nowDate = new Date();
// nowYearEl.textContent = nowDate.getFullYear();
// nowMonthEl.textContent = monthsArr[nowDate.getMonth()];
// nowDayEl.textContent = nowDate.getDate();

// Task 5.4.5

// Task 5.5.1
// const monthsArr = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];

// const inputEl = document.querySelector('.js-input');
// const btnEl = document.querySelector('.js-btn');
// const yearEl = document.querySelector('.js-output-year');
// const monthEl = document.querySelector('.js-output-month');
// const dayEl = document.querySelector('.js-output-day');

// const onBtnElClick = event => {
//   const date = new Date(inputEl.value);
//   yearEl.textContent = date.getFullYear();
//   monthEl.textContent = monthsArr[date.getMonth()];
//   dayEl.textContent = date.getDate();
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.5.2
// const firstInputEl = document.querySelector('.js-first-input');
// const secondInputEl = document.querySelector('.js-second-input');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = event => {
//   const a = +firstInputEl.value;
//   const b = +secondInputEl.value;

//   const [min, max] = a < b ? [a, b] : [b, a];
//   const arr = [...Array(max - min + 1)].map((_, i) => i + min);
//   const finalArr = a < b ? [...arr] : [...arr.reverse()];
//   console.log(finalArr);
//   return finalArr;
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.5.3
// const inputEl = document.querySelector('.js-input');
// const outputEl = document.querySelector('.js-output');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = event => {
//   const lastSymbol = inputEl.value.trim().at(-1);
//   outputEl.textContent = lastSymbol;
//   inputEl.value = '';
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.5.4
// const outputEl = document.querySelector('.js-output');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = event => {
//   let value = +outputEl.textContent;
//   outputEl.textContent = value + 1;
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.5.5
// const textareaEl = document.querySelector('.js-text');
// const outputEl = document.querySelector('.js-output');

// const onTextareaElBlur = event => {
//   const { target } = event;
//   outputEl.textContent = target.value.split(' ').filter(el => el !== '').length;
//   target.value = '';
// };

// textareaEl.addEventListener('blur', onTextareaElBlur);

// Task 5.6.1
// const inputEl = document.querySelector('.js-input');
// const outputLeapEl = document.querySelector('.js-output-leap');
// const outputNotLeapEl = document.querySelector('.js-output-not-leap');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = event => {
//   const year = inputEl.value;
//   const date = new Date(year, 2, 0);
//   const result = date.getDate() === 29;
//   if (result) {
//     outputLeapEl.classList.add('active');
//     outputNotLeapEl.classList.remove('active');
//   } else {
//     outputNotLeapEl.classList.add('active');
//     outputLeapEl.classList.remove('active');
//   }
//   inputEl.value = '';
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.6.2
// const inputEl = document.querySelector('.js-input');
// const btnEl = document.querySelector('.js-btn');

// const getRandomNum = () => {
//   const randomNum = Math.floor(Math.random() * 100);
//   return randomNum;
// };

// const onBtnElClick = event => {
//   inputEl.value = getRandomNum(100);
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.6.3

// Task 5.6.4
// const btnEl = document.querySelector('.js-btn');
// const containerEl = document.querySelector('.js-container');

// const onBtnElClick = event => {
//   containerEl.style.height = `${containerEl.clientHeight * 2}px`;
//   containerEl.style.width = `${containerEl.clientWidth * 2}px`;
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.6.5
// const containerEl = document.querySelector('.js-container');
// const outputEl = document.querySelector('.js-output');

// const onLinkElClick = event => {
//   const { target } = event;
//   if (target.nodeName !== 'A') {
//     return;
//   }
//   outputEl.textContent = event.target.href;
//   // const outputEl = document.createElement('p');
//   // outputEl.style.position = 'absolute';
//   // outputEl.textContent = event.target.href;

//   // containerEl.insertAdjacentHTML('beforebegin', outputEl);
// };

// containerEl.addEventListener('mouseover', onLinkElClick);

// Task 5.7.1
// const numbers = [2, 4, 1, 5, 7, 8, 0, 4, 3];
// const listEl = document.querySelector('.js-list');
// const inputEl = document.querySelector('.js-input');
// const btnEl = document.querySelector('.js-btn');

// const markup = numbers
//   .map(
//     el => `
// <li class='js-list__item'>${el}</li>
// `
//   )
//   .join('');

// listEl.innerHTML = markup;

// const onBtnElClick = event => {
//   const itemsEls = listEl.querySelectorAll('.js-list__item');
//   const result = [...itemsEls].reduce((sum, el) => sum + parseInt(el.textContent), 0);
//   inputEl.value = result;
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.7.2
// const numbers = [2, 4, 1, 5, 7, 8, 0, 4, 3];
// const listEl = document.querySelector('.js-list');
// const btnEl = document.querySelector('.js-btn');

// const markup = numbers
//   .map(
//     el => `
// <li class='js-list__item'>${el}</li>
// `
//   )
//   .join('');

// listEl.innerHTML = markup;

// const onBtnElClick = event => {
//   const itemsEls = listEl.querySelectorAll('.js-list__item');
//   itemsEls.forEach(el => (el.textContent = parseInt(el.textContent) + 1));
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.7.3
// const inputEl = document.querySelector('.js-input');
// const outputEl = document.querySelector('.js-output');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = event => {
//   const number = inputEl.value;
//   if (number <= 0) {
//     outputEl.textContent = 'введіть натуральне число.';
//     inputEl.value = '';
//     return;
//   }
//   const arr = [];
//   for (let i = 1; i <= Math.floor(number / 2); i += 1) {
//     if (!(number % i)) {
//       arr.push(i);
//     }
//   }
//   arr.push(number);
//   outputEl.textContent = [...arr];
//   inputEl.value = '';
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.7.4
// const paragraphs = [
//   `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio amet quaerat minima reprehenderit
// illum debitis rem? Architecto aut rerum officiis, earum repudiandae atque. Dicta!`,
//   `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio amet quaerat minima reprehenderit
// illum debitis rem? Architect, earum repudiandae atque. Dicta nesciunt,
// minima vitae deserunt architecto inventore!`,
//   `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio amet quaerat minima reprehenderit
// illum debitis rem? Architecto aut rerum officiis, earum repudiandae atque. Dicta nesciunt,
// minima vitae deserunt architecto inventore!rchitecto aut rerum officiis, earum repudiandae atque. Dicta nesciunt,
// minima vitae deserunt architecto inventore!rchitecto aut rerum officiis, earum repudiandae atque. Dicta nesciunt,
// minima vitae deserunt architecto inventore!`,
//   `Lorem elit. Odio amet quaerat minima reprehenderit
// illum debitis rem? Architecto aut rerum officiis, earum repudiandae atque. Dicta nesciunt,
// minima vitae deserunt architecto inventore!`,
//   `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio amet quaerat minima reprehenderit
// illum debitis rem? Architecto, earum repudiandae atque. Dicta nesciunt,
// minima vitae deserunt architecto inventore!`,
//   `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio amet quaerat minima reprehenderit
// illum debitis rem? Architecto aut rerum officiis, earum repudiandae atque. Dicta nesciunt,
// minima vitae deserunt architecto inventore!`,
// ];

// const markup = [...paragraphs]
//   .map(
//     el => `
// <p class='js-text'>${el}</p>
// `
//   )
//   .join('');

// const containerEl = document.querySelector('.js-container');

// containerEl.innerHTML = markup;

// let prevTargetItem = null;

// const onTextElClick = event => {
//   const { target } = event;

//   if (target.nodeName !== 'P') {
//     return;
//   }

//   if (target === prevTargetItem) {
//     target.classList.toggle('flipped');
//     return;
//   }

//   if (prevTargetItem !== null) {
//     prevTargetItem.classList.remove('flipped');
//   }
//   target.classList.add('flipped');
//   prevTargetItem = target;
// };

// containerEl.addEventListener('click', onTextElClick);

// Task 5.7.5
// const inputEl = document.querySelector('.js-input');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = () => {
//   const number = +inputEl.value;
//   const secondThreeLetters = number % 1000;
//   const firstThreeLetters = (number - secondThreeLetters) / 1000;

//   const firstThreeLettersSum = String(firstThreeLetters)
//     .split('')
//     .reduce((sum, el) => sum + Number(el), 0);

//   const secondThreeLettersSum = String(secondThreeLetters)
//     .split('')
//     .reduce((sum, el) => sum + Number(el), 0);
//   console.log(firstThreeLettersSum === secondThreeLettersSum);
//   inputEl.value = '';
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.8.1 //FOCUSIN / FOCUSOUT
// const containerEl = document.querySelector('.js-container');

// const onInputElBlur = event => {
//   const { target } = event;
//   if (target.nodeName !== 'INPUT') {
//     return;
//   }
//   if (target.value !== '') {
//     target.value = Math.pow(+target.value, 2);
//   }
// };

// containerEl.addEventListener('focusout', onInputElBlur);

// Task 5.8.2

// Task 5.8.3

// Task 5.8.4
// const firstInputEl = document.querySelector('.js-first-input');
// const secondInputEl = document.querySelector('.js-second-input');
// const btnEl = document.querySelector('.js-btn');

// const findDividers = num => {
//   const dividersArr = [];
//   for (let i = 1; i <= Math.floor(num / 2); i += 1) {
//     if (!(num % i)) {
//       dividersArr.push(i);
//     }
//   }
//   dividersArr.push(num);
//   return dividersArr;
// };

// const onBtnElClick = () => {
//   const firstNum = +firstInputEl.value;
//   const secondNum = +secondInputEl.value;
//   if (firstNum <= 0 || secondNum <= 0) {
//     console.log('Enter only natural numbers.');
//   }
//   const firstNumDividersArr = findDividers(firstNum);
//   const secondNumDividersArr = findDividers(secondNum);
//   const commonDividersArr = [...firstNumDividersArr, ...secondNumDividersArr].filter(
//     (el, index, arr) => arr.indexOf(el) !== index
//   );
//   console.log(`Common dividers of ${firstNum} and ${secondNum} are:`, commonDividersArr);
//   firstInputEl.value = '';
//   secondInputEl.value = '';
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.8.5
// const inputEl = document.querySelector('.js-input');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = event => {
//   const arr = inputEl.value.split(',').map(el => Number(el));
//   console.log(arr.includes(13));
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.8.6
// См. 5.7.5

// Task 5.9.1
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const inputEl = document.querySelector('.js-input');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = event => {
//   inputEl.value = [...arr];
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.9.2
// См. 5.7.4

// Task 5.9.3
// const inputEl = document.querySelector('.js-input');

// const onTextFieldInput = event => {
//   const { target } = event;

//   +target.value % 2 ? (target.style.borderColor = 'red') : (target.style.borderColor = 'green');
// };

// inputEl.addEventListener('input', onTextFieldInput);

// Task 5.9.4
// const inputEl = document.querySelector('.js-input');

// const onInputBlur = event => {
//   const { target } = event;
//   const valueInNewFormat = target.value.split('-').reverse().join('.');
//   target.value = valueInNewFormat;
// };

// inputEl.addEventListener('focusout', onInputBlur);

// Task 5.9.5
// const textareaEl = document.querySelector('.js-text');
// const listEl = document.querySelector('.js-list');

// const onTextareaChange = event => {
//   const { target } = event;
//   const regexp = /[\.!?]/;
//   const arr = target.value.split(regexp).filter(el => el !== ''); //Почему без фильтра последний элемент массива ''?
//   const markup = arr
//     .map(
//       el => `
//   <li class='list__item js-list__item'>${el}</li>
//   `
//     )
//     .join('');
//   listEl.insertAdjacentHTML('beforeend', markup);
//   console.log(arr);
// };

// textareaEl.addEventListener('change', onTextareaChange);

// Task 5.10.1
// См. 5.9.3

// Task 5.10.2
// const arr = [2, 4, 5, 2, 7];

// const getRandomNum = (min, max) => {
//   return Math.floor(Math.random() * (max - min) + min);
// };

// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = event => {
//   const randomNum = getRandomNum(20, 100);
//   arr.push(randomNum);
//   console.log(arr);
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.10.3
// const colors = [
//   'rgb(127, 255, 212)',
//   'rgb(255, 150, 13)',
//   'rgb(130, 200, 255)',
//   'rgb(125, 125, 125)',
//   'rgb(150, 179, 240)',
//   'rgb(150, 179, 10)',
//   'rgb(200, 179, 30)',
//   'rgb(100, 150, 200)',
//   'rgb(190, 170, 250)',
//   'rgb(240, 199, 250)',
//   'rgb(200, 255, 220)',
//   'rgb(190, 179, 230)',
// ];

// const containerEl = document.querySelector('.js-container');

// const getRandomColor = arr => {
//   return Math.floor(Math.random() * arr.length);
// };

// const onTextClick = event => {
//   const { target } = event;
//   if (target.nodeName !== 'P') {
//     return;
//   }
//   target.style.backgroundColor = colors[getRandomColor(colors)];
// };

// containerEl.addEventListener('click', onTextClick);

// Task 5.10.4
// const arr = [23, 45, 36, 58, 2, 78, 2, 456, 358, 35, 25];

// const btnEl = document.querySelector('.js-btn');
// const outputEl = document.querySelector('.js-output');

// const onBtnElClick = event => {
//   const result = arr.filter(el => el % 2 === 0);
//   outputEl.textContent = result;
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.10.5
// const btnEl = document.querySelector('.js-btn');
// const outputEl = document.querySelector('.js-output');

// const onBtnElClick = event => {
//   const nowDate = new Date();
//   const newYearDate = new Date(nowDate.getFullYear(), 11, 31);
//   const daysLeft = Number(((newYearDate - nowDate) / (1000 * 3600 * 24)).toFixed());
//   outputEl.textContent = daysLeft;
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 5.10.6

// Task 6.1.1
// const arr = [
//   `Українське село. До криниці підійшов чоловік і схилився, щоб випити води. Підбіг дід і застерігає:
// — Чоловіче, не пий! Москалі воду отруїли!
// — Что ти гаваріш?
// — Я говорю: пий мєдлено, вода холодна, горло застудиш.`,
//   `Гуцул іде по полонині і веде за руку хлопчика-негра. Другий гуцул:
//   — Іване, а хто то?
//   — Онук.
//   — Марійчин хлопець?
//   — Марійчин!
//   — А Марійка де?
//   — Вчиться в місті.
//   — А чого воно таке чорне?
//   — Зате гарантія, що не москаль!`,
//   `- Вуйку Стефане, вуйку Стефане! Що то ви робите?! Навіщо ви берізку рубаєте? Така струнка, молоденька, так око зеленими листочками милувала, а ви її геть!
//   - Ой, сусіде, й не кажіть, в самого серце кров'ю обливається, але мушу те зробити - прийдуть москалі, побачать берізку і скажуть: "Родіна"...`,
// ];

// const listEl = document.querySelector('.js-list');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = array => {
//   const markup = array
//     .map(
//       el => `
//     <li class='js-list__item'>${el}</li>
//     `
//     )
//     .join('');

//   listEl.insertAdjacentHTML('afterbegin', markup);
// };

// btnEl.addEventListener('click', () => onBtnElClick(arr));

// Task 6.1.2
// const listEl = document.querySelector('.js-list');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = n => {
//   const markup = [...Array(n)].map((_, idx) => `<li>${idx + 1}</li>`).join('');
//   listEl.insertAdjacentHTML('beforeend', markup);
// };

// btnEl.addEventListener('click', () => onBtnElClick(13));

// Task 6.1.3
// const listEl = document.querySelector('.js-list');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = () => {
//   const markup = `<li>!</li>`;
//   listEl.insertAdjacentHTML('beforeend', markup);
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.1.4 ?????????????????
// const listEl = document.querySelector('.js-list');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = event => {
//   const markup = `<li class='js-list__item'>1</li>`;
//   listEl.insertAdjacentHTML('beforeend', markup);
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.1.5
// const listEl = document.querySelector('.js-list');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = () => {
//   listEl.lastElementChild.remove();
//   };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.1.6
// // const listItemEls = document.querySelectorAll('.js-list__item');
// const listItemEls = document.getElementsByClassName('js-list__item');
// const btnEl = document.querySelector('.js-btn');

// const randomIdx = arr => {
//   return Math.floor(Math.random() * arr.length);
// };

// const onBtnElClick = () => {
//   listItemEls[randomIdx([...listItemEls])].remove();
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.2.1

// // const table = {
// //   cols: 5,
// //   rows: 10,
// // };
// const btnEl = document.querySelector('.js-btn');
// const containerEl = document.querySelector('.js-container');

// const buildTable = (parent, cols, rows) => {
//   const table = document.createElement('table');
//   table.classList.add('table');

//   for (let i = 1; i <= rows; i += 1) {
//     let tr = document.createElement('tr');

//     for (let j = 1; j <= cols; j += 1) {
//       let td = document.createElement('td');
//       td.classList.add('td');

//       tr.append(td);
//     }
//     table.append(tr);
//   }
//   parent.append(table);
// };

// const onBtnElClick = () => {
//   buildTable(containerEl, 10, 20);
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.2.2 ??????????????????

// const btnEl = document.querySelector('.js-btn');
// const containerEl = document.querySelector('.js-container');

// let tdCount = 0;
// let arr = [];

// const buildTable = (parent, cols, rows) => {
//   const table = document.createElement('table');
//   table.classList.add('table');

//   for (let i = 1; i <= rows; i += 1) {
//     let tr = document.createElement('tr');

//     for (let j = 1; j <= cols; j += 1) {
//       let td = document.createElement('td');
//       tdCount += 1;

//       td.classList.add('td');

//       arr = [...Array(tdCount)].map((_, idx) => (td.textContent = idx + 1));
//       console.log(arr); // Как сделать, чтобы не создавать массив заново на каждой итерации

//       tr.append(td);
//     }

//     table.append(tr);
//   }

//   parent.append(table);
// };

// const onBtnElClick = () => {
//   buildTable(containerEl, 3, 5);
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.2.3
// const btnEl = document.querySelector('.js-btn');
// const containerEl = document.querySelector('.js-container');

// const buildTable = (parent, cols, rows) => {
//   const table = document.createElement('table');
//   table.classList.add('table');

//   for (let i = 1; i <= rows; i += 1) {
//     let tr = document.createElement('tr');

//     for (let j = 1; j <= cols; j += 1) {
//       let td = document.createElement('td');
//       td.classList.add('td');
//       td.textContent = `${i} ${j}`;

//       tr.append(td);
//     }
//     table.append(tr);
//   }
//   parent.append(table);
// };

// const onBtnElClick = () => {
//   buildTable(containerEl, 3, 5);
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.2.4
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const btnEl = document.querySelector('.js-btn');
// const containerEl = document.querySelector('.js-container');

// const buildTable = (parent, array) => {
//   const table = document.createElement('table');
//   table.classList.add('table');

//   const rows = array.length;
//   const cols = array.flat().length / arr.length;

//   for (let i = 1; i <= rows; i += 1) {
//     let tr = document.createElement('tr');

//     for (let j = 1; j <= cols; j += 1) {
//       let td = document.createElement('td');
//       td.classList.add('td');
//       td.textContent = `${array[i - 1][j - 1]}`;

//       tr.append(td);
//     }
//     table.append(tr);
//   }
//   parent.append(table);
// };

// const onBtnElClick = () => {
//   buildTable(containerEl, arr);
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.3.1
// const textEl = document.querySelector('.js-text');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = event => {
//   let n = +btnEl.getAttribute('data-counter');
//   if (!(n % 2)) {
//     textEl.classList.add('green');
//   } else {
//     textEl.classList.remove('green');
//     textEl.classList.add('red');
//   }

//   n++;
//   btnEl.setAttribute('data-counter', n);
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.3.2???????????????? Как сделать, чтобы номер добавлялся только 1 раз?
// const listEl = document.querySelector('.js-list');

// const onListItemElClick = event => {
//   const { target } = event;

//   const num = [...listEl.children].indexOf(target) + 1;

//   const numEl = document.createElement('span');
//   numEl.classList.add('js-num');
//   numEl.textContent = num;
//   target.append('-', numEl);
// };

// listEl.addEventListener('click', onListItemElClick);

// Task 6.3.3
// const listEl = document.querySelector('.js-list');

// const onListItemElClick = event => {
//   const { target } = event;
//   if (event.ctrlKey) {
//     target.remove();
//   }
// };

// listEl.addEventListener('click', onListItemElClick);

// Task 6.3.4
// const numEl = document.querySelector('.js-num');
// const btnEl = document.querySelector('.js-btn');

// let startNum = +numEl.textContent;

// const increment = () => {
//   startNum += 1;
//   numEl.textContent = startNum;
// };

// const onBtnElClick = event => {
//   setInterval(() => increment(), 1000);
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.3.5 ??????????????????/
// const inputEl = document.querySelector('.js-input');
// const outputEl = document.querySelector('.js-output');

// const onInputElInput = event => {
//   const nowDate = new Date();
//   const inputDate = new Date(inputEl.value); // Почему Invalid Date?
//   console.log(inputDate);
//   if (nowDate - inputDate > 0) {
//     outputEl.textContent = 'Yes';
//   } else outputEl.textContent = 'No';
// };

// inputEl.addEventListener('input', onInputElInput);

// Task 6.4.1
// const listEl = document.querySelector('.js-list');

// const onListItemClick = event => {
//   const { target } = event;
//   target.remove();
// };

// listEl.addEventListener('click', onListItemClick);

// Task 6.4.2 ????? target / inputEl?
// const listEl = document.querySelector('.js-list');
// const inputEl = document.querySelector('.js-input');

// const onInputElBlur = event => {
//   const { target } = event;
//   const inputValue = target.value;
//   listEl.insertAdjacentHTML('beforeend', `<li>${inputValue}</li>`);
//   target.value = '';
// };

// inputEl.addEventListener('focusout', onInputElBlur);

// Task 6.4.3
// const btnEl = document.querySelector('.js-btn');
// const tableEl = document.querySelector('.js-table');

// const inputEls = document.querySelectorAll('.js-input');

// const createMarkup = () => {
//   const markup = [...inputEls]
//     .map(
//       el => `
//   <td class="td js-td">${el.value}</td>
// `
//     )
//     .join('');

//   return markup;
// };

// const onBtnElClick = event => {
//   tableEl.insertAdjacentHTML('beforeend', createMarkup());
//   inputEls.forEach(el => (el.value = ''));
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.4.4?????????????????????????
const inputEl = document.querySelector('.js-input');
const listEl = document.querySelector('.js-list');
const spanEl = document.querySelector('.js-year');

const onInputElChange = event => {
  const year = inputEl.value;
  spanEl.innerHTML = year;

  const nowYearFirstDay = new Date(year, 0, 1);
  const nowYearLastDay = new Date(year, 11, 31);

  for (let i = nowYearFirstDay; i <= nowYearLastDay; i += 1000 * 3600 * 24) {
    if (i.getDay() === 5 && i.getDate() === 13) {
      console.log(i);
      listEl.insertAdjacentHTML('beforeend', `<li>${i}</li>`);
    }
  }
};

inputEl.addEventListener('change', onInputElChange);

// Task 6.5.1
// Task 6.5.2
// Task 6.5.3
// Task 6.5.4
// Task 6.5.5

// Task 6.6.1
// Task 6.6.2
// Task 6.6.3
// Task 6.6.4

// Task 6.7.1
// Task 6.7.2
// Task 6.7.3
// Task 6.7.4

// Task 6.8.1
// Task 6.8.2

// Task 6.9.1
// Task 6.9.2
// Task 6.9.3
// Task 6.9.4

// Task 6.10.1
// Task 6.10.2
// Task 6.10.3
// Task 6.10.4
