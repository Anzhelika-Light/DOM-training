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
//   target.value = target.value ** 2;
// };

// inputEl.forEach(el => el.addEventListener('blur', onInputElBlur));

// Task 5.2.1
// const outputEl = document.querySelector('.js-output');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = () => {
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

// // const createParagraph = content => {
// //     const pEl = document.createElement('p');
// //     pEl.style.backgroundColor = getRandomHexColor();
// //     pEl.textContent = content;
// // return pEl;
// // }

// const createParagraph = content =>
//   `<p style='background-color: ${getRandomHexColor()}'>${content}</p>`;

// const markup = numbers.map(el => createParagraph(el)).join('');
// containerEl.insertAdjacentHTML('afterbegin', markup);

// // const createParagraphes = arr => {
// //   const items = [];
// //   for (let i = 0; i < arr.length; i += 1) {
// //     const color = getRandomHexColor();
// //     const item = document.createElement('p');
// //     item.style.backgroundColor = color;
// //     item.classList.add('output', 'js-output');
// //     item.textContent = arr[i];
// //     items.push(item);
// //   }
// //   containerEl.append(...items);
// // const markup = arr.map(el => `<p class='js-output'>${el}</p>`).join('');
// // return markup;
// // };

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

// const isLeapYear = year => {
//   const date = new Date(year, 2, 0);
//   return date.getDate() === 29;
// };

// const onBtnElClick = () => {
//   const year = inputEl.value;

//   if (isLeapYear(year)) {
//     outputLeapEl.classList.add('active');
//     outputNotLeapEl.classList.remove('active');
//   } else {
//     outputNotLeapEl.classList.add('active');
//     outputLeapEl.classList.remove('active');
//   }
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
// const selectEl = document.querySelector('#select');

// const onBtnElClick = () => {
//   const arr = inputEl.value.split(',').map(el => el);
//   console.log(arr.includes(selectEl.value));
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

//   +target.value % 2 ? (target.style.borderColor = 'red') : (target.style.borderColor = 'green'); // BigInt
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

// // Task 5.9.5 ???????
// const textareaEl = document.querySelector('.js-text');
// const listEl = document.querySelector('.js-list');

// const onTextareaChange = event => {
//   const { target } = event;
//   const regexp = /[\.!?]/;
//   const arr = target.value.split(regexp).filter(el => el !== ''); //Почему без фильтра последний элемент массива ''?
//   console.log(arr);
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

// const createMarkup = array =>
//   array
//     .map(
//       el => `
//     <li class='js-list__item'>${el}</li>
//     `
//     )
//     .join('');

// const onBtnElClick = () => {
//   listEl.insertAdjacentHTML('afterbegin', createMarkup(arr));
// };

// btnEl.addEventListener('click', onBtnElClick);

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

// Task 6.1.4 !!!!
// const listEl = document.querySelector('.js-list');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = () => {
//   const markup = `<li class='js-list__item'>${listEl.children.length + 1}</li>`;
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
// const listItemEls = document.querySelectorAll('.js-list__item');
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

// const table = {
//   cols: 5,
//   rows: 10,
// };
// const btnEl = document.querySelector('.js-btn');
// const containerEl = document.querySelector('.js-container');

// const buildTable = (parent, { cols, rows }) => {
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
//   buildTable(containerEl, table);
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

// Task 6.3.2!!!!
// const listEl = document.querySelector('.js-list');

// const onListItemElClick = event => {
//   const { target } = event;
//   if (target.getAttribute('clickable')) {
//     return;
//   }
//   const num = [...listEl.children].indexOf(target) + 1;

//   const numEl = document.createElement('span');
//   numEl.classList.add('js-num');
//   numEl.textContent = num;
//   target.append('-', numEl);
//   target.setAttribute('clickable', true);
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

// Task 6.3.5 !!!!! // input + проверка количества символов / change
// const inputEl = document.querySelector('.js-input');
// const outputEl = document.querySelector('.js-output');

// const onInputElInput = event => {
//   const { target } = event;
//   if (target.value.length < 10) {
//     outputEl.textContent = '';
//     return;
//   }
//   if (target.value.length > 10) {
//     console.log(target.value);
//     target.value = target.value.slice(0, 10);
//     return;
//   }
//   const nowDate = new Date();
//   const inputDate = new Date(inputEl.value);

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

// Task 6.4.2
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

// Task 6.4.4
// const inputEl = document.querySelector('.js-input');
// const listEl = document.querySelector('.js-list');
// const spanEl = document.querySelector('.js-year');

// const onInputElChange = event => {
//   const year = inputEl.value;
//   spanEl.innerHTML = year;

//   let res = [];
//   for (let month = 0; month < 12; month += 1) {
//     let date = new Date(year, month, 13);
//     if (date.getDay() === 5) res.push(date);
//   }

//   const markup = res.map(el => `<li>${el}</li>`).join('');

//   listEl.insertAdjacentHTML('beforeend', markup);
// };

// inputEl.addEventListener('change', onInputElChange);

// Task 6.5.1
// const inputEl = document.querySelector('.js-input');
// const outputEl = document.querySelector('.js-output');

// const onInputElChange = event => {
//   const { target } = event;
//   const nowDate = new Date();
//   const birthDate = new Date(target.value);

//   const age = ((nowDate.getTime() - birthDate.getTime()) / (1000 * 3600 * 24 * 365)).toFixed();
//   outputEl.textContent = age;
// };

// inputEl.addEventListener('change', onInputElChange);

// Task 6.5.2
// const inputEl = document.querySelector('.js-input');
// const outputEl = document.querySelector('.js-output');

// const onInputElInput = event => {
//   const { target } = event;
//   const res = target.value
//     .split(',')
//     .filter(el => el !== '')
//     .reduce((sum, el) => sum + parseInt(el), 0);
//   outputEl.textContent = res;
// };

// inputEl.addEventListener('input', onInputElInput);

// // Task 6.5.3!!!!!
// const btnEl = document.querySelector('.js-btn');
// const outputEl = document.querySelector('.js-output');

// // const markup = () => `<input class='input js-input' type='text'/>`;

// // const onBtnElClick = event => {
// //   btnEl.insertAdjacentHTML('afterend', markup());
// // };
// const inputList = [];

// const onBtnElClick = event => {
//   const inputEl = document.createElement('input');
//   inputEl.classList.add('input', 'js-input');
//   inputEl.type = 'text';
//   inputEl.addEventListener('input', onInputElInput);
//   btnEl.after(inputEl);
//   inputList.push(inputEl); // все созданные инпуты
// };

// const onInputElInput = event => {
//   // const inputEls = document.querySelectorAll('.js-input');
//   const values = inputList.map(el => Number(el.value));
//   const total = values.reduce((sum, el) => sum + el, 0);
//   outputEl.textContent = total;
//   console.log(event.target.value);
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.5.4 !!!
// const containerEl = document.querySelector('.js-container');
// const inputEls = document.querySelectorAll('.js-input');
// const btnEl = document.querySelector('.js-btn');
// const spanEl = document.querySelector('.js-btn-total');

// const onBtnElClick = () => {
//   const res = [...inputEls]
//     .filter(el => el.value !== '')
//     .map(el => el.value)
//     .reduce((sum, el) => sum + parseInt(el), 0);
//   console.log(res);
//   spanEl.textContent = res;
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.5.5!!!!!!!
// const containerEl = document.querySelector('.js-container');
// const firstInputEl = document.querySelector('.js-first-input');
// const secondInputEl = document.querySelectorAll('.js-input');
// const btnEl = document.querySelector('.js-btn');
// const outputEl = document.querySelector('.js-output');

// const onBtnElClick = () => {
//   const firstInputValuesArr = firstInputEl.value.trim().split(',');
//   const secondInputValuesArr = [...secondInputEl].map(el => el.value.trim().split(','));
//   const res = firstInputValuesArr.filter(el =>
//     secondInputValuesArr.every(item => item.includes(el))
//   );
//   outputEl.innerHTML = res;
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.6.1
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const inputEl = document.querySelector('.js-input');
// const btnEl = document.querySelector('.js-btn');
// const outputEl = document.querySelector('.js-output');

// const onBtnElClick = () => {
//   const idx = +inputEl.value;
//   const res = arr[idx];
//   outputEl.textContent = res;
//   inputEl.value = '';
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.6.2
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

// const btnEl = document.querySelector('.js-btn');
// const textEl = document.querySelector('.js-text');

// const randomColor = arr => {
//   const idx = Math.floor(Math.random() * arr.length);
//   return arr[idx];
// };

// const onBtnElClick = event => {
//   textEl.style.backgroundColor = randomColor(colors);
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.6.3
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

// const tbodyEl = document.querySelector('.js-tbody');

// const randomColor = arr => {
//   const idx = Math.floor(Math.random() * arr.length);
//   return arr[idx];
// };

// const onTBodyElClick = event => {
//   const { target } = event;
//   target.style.backgroundColor = randomColor(colors);
// };

// tbodyEl.addEventListener('click', onTBodyElClick);

// // Task 6.6.4 !!!!!!!!!!!
// const textEl = document.querySelector('.js-text');
// const outputEl = document.querySelector('.js-output');
// const arr = [];

// const onKeydown = event => {
//   console.log(event.key);
//   if (event.key === 'Shift' || event.key === 'Enter') {
//     arr.push(event.key);
//   }
//   if (arr.length === 2) {
//     outputEl.textContent = textEl.value;
//   }
// };
// const onKeyUp = event => {
//   if (event.key === 'Shift' || event.key === 'Enter') {
//     const index = arr.indexOf(event.key);
//     arr.splice(index, 1);
//   }
// };

// document.addEventListener('keydown', onKeydown);
// document.addEventListener('keyup', onKeyUp);

// Task 6.7.1???????????????????
// const listEl = document.querySelector('.js-list');

// const nowDate = new Date();
// const nowYear = nowDate.getFullYear();

// // прибавить к дате определенное количество дней в JavaScript
// const date = new Date(nowYear, 0, 1);
// date.setDate(6 - date.getDay()); // Получила первую субботу
// listEl.insertAdjacentHTML(
//   'beforeend',
//   `<li class='js-list__item'>${date.toLocaleDateString()}</li>`
// );
// date.setDate(date.getDate() + 1);

// Task 6.7.2
// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// const outputEl = document.querySelector('.js-output');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = () => {
//   const nowDate = new Date();
//   const nowYear = nowDate.getFullYear();
//   const nowMonth = nowDate.getMonth();
//   const lastDay = days[new Date(nowYear, nowMonth + 1, 0).getDay()];

//   outputEl.textContent = lastDay;
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.7.3 !!!!!!!!!!!!!!!!!!!

// const btnEl = document.querySelector('.js-btn');
// const selectEl = document.querySelector('#js-select');

// const nowDate = new Date();
// const nowYear = nowDate.getFullYear();
// const nowMonth = nowDate.getMonth();
// const numOfDayInCurrentMonth = new Date(nowYear, nowMonth + 1, 0).getDate();
// const datesArr = Array(numOfDayInCurrentMonth)
//   .fill(0)
//   .map((_, idx) => idx + 1);

// const createSelectOption = content => `<option value="${content}">${content}</option>`;

// const onBtnElClick = () => {
//   const markup = datesArr.map(createSelectOption).join('');

//   console.log(markup);
//   selectEl.insertAdjacentHTML('afterbegin', markup);
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.7.4
// const inputEl = document.querySelector('.js-input');
// const outputEl = document.querySelector('.js-output');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = event => {
//   const num = parseInt(inputEl.value);
//   if (num <= 0) {
//     outputEl.textContent = 'Number must be greater than zero';
//     return;
//   }
//   const str = [...Array(num)].map(el => (el = 0)).join('');
//   outputEl.textContent = str;
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.8.1 !!!!!!!!!!!!
// const tableEl = document.querySelector('.js-tbody');

// let pressedKey = null;

// document.addEventListener('keydown', e => {
//   if (e.key === 'Shift' || e.key === 'Control') {
//     pressedKey = e.key;
//   }
// });

// document.addEventListener('keyup', e => {
//   if (e.key === 'Shift' || e.key === 'Control') {
//     pressedKey = null;
//   }
// });

// const ontdElClick = event => {
//   const { target } = event;
//   if (target.nodeName !== 'TD' || !pressedKey) {
//     return;
//   }
//   if (pressedKey === 'Shift') {
//     target.classList.toggle('red');
//     target.classList.remove('green');
//   }
//   if (pressedKey === 'Control') {
//     target.classList.toggle('green');
//     target.classList.remove('red');
//   }
// };

// tableEl.addEventListener('click', ontdElClick);

// Task 6.8.2
// const btnEl = document.querySelector('.js-btn');
// const blockEl = document.querySelector('.js-block');

// const onBtnElClick = () => {
//   let n = +btnEl.getAttribute('data-counter');
//   if (n % 2 === 1) {
//     blockEl.classList.add('active');
//   } else {
//     blockEl.classList.remove('active');
//   }

//   n += 1;
//   btnEl.setAttribute('data-counter', n);
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.9.1
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

// const btnEl = document.querySelector('.js-btn');
// const blockEl = document.querySelector('.js-block');

// let idx = +btnEl.getAttribute('data-color');

// const onBtnElClick = () => {
//   if (idx === colors.length) {
//     idx = 0;
//   }
//   blockEl.style.backgroundColor = colors[idx];
//   idx += 1;
//   btnEl.setAttribute('data-color', idx);
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.9.2 !!!!!!!!!!!!!!
// const firstInputEl = document.querySelector('.js-first-input');
// const secondInputEl = document.querySelector('.js-second-input');
// const outputEl = document.querySelector('.js-output');

// const onSecondInputElChange = event => {
//   const firstDate = new Date(firstInputEl.value);
//   const secondDate = new Date(secondInputEl.value);
//   const diff = (firstDate - secondDate) / (1000 * 3600 * 24);
//   outputEl.textContent = Math.abs(diff);
// };

// secondInputEl.addEventListener('change', onSecondInputElChange);

// Task 6.9.3 !!!!!!!!!!!!!!!!!!!!
// const listEl = document.querySelector('.js-list');
// let counter = +listEl.dataset.counter;

// const onListItemElClick = event => {
//   const { target } = event;
//   if (target.nodeName !== 'LI') {
//     return;
//   }

//   const { clicked } = target.dataset;
//   if (!clicked) {
//     target.dataset.clicked = '1';
//     return target.insertAdjacentHTML('beforeend', `<span class='js-clicked'> - click # 1</span>`);
//   }
//   const newValue = Number(clicked) + 1;
//   target.dataset.clicked = newValue;
//   const spanEl = target.querySelector('.js-clicked');
//   spanEl.textContent = ` - click # ${newValue}`;
// };

// listEl.addEventListener('click', onListItemElClick);

// Task 6.9.4
// const listEl = document.querySelector('.js-list');

// const createMarkup = num => {
//   return ` <li class="js-list__item">item-${num}</li>`;
// };

// const onListItemElClick = event => {
//   const listItem = createMarkup(listEl.children.length + 1);
//   listEl.insertAdjacentHTML('beforeend', listItem);
// };

// listEl.addEventListener('click', onListItemElClick);

// Task 6.10.1 !!!!!!!!!!!!!!!!!!
// const inputEl = document.querySelector('.js-input');
// const btnEl = document.querySelector('.js-btn');
// const listEl = document.querySelector('.js-list');

// const createMarkup = content => {
//   return ` <li class="js-list__item">${content}</li>`;
// };

// const onBtnElClick = () => {
//   const content = inputEl.value;
//   if (content === '') {
//     console.log('Enter something.');
//     return;
//   }

//   const prevLength = !listEl.lastElementChild ? 0 : listEl.lastElementChild.textContent.length;

//   if (content.length <= prevLength) {
//     console.log('Not enough symbols.');
//     inputEl.value = '';
//     return;
//   }
//   const listItem = createMarkup(content);
//   listEl.insertAdjacentHTML('beforeend', listItem);
//   inputEl.value = '';
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.10.2?????????????
// const btnEl = document.querySelector('.js-btn');
// const tbodyEl = document.querySelector('.js-tbody');
// const trEls = document.querySelectorAll('.js-tr');

// const onBtnElClick = () => {
//   const trArr = [...trEls];
//   console.log(trArr);
//   const res = trArr.map((el, idx) =>
//     idx % 2 ? el.setAttribute('data-idx', 'odd') : el.setAttribute('data-idx', 'even')
//   );
//   //   const result = res.map(el => el.dataset.idx === 'odd' ? el.children)
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 6.10.3????????????????????
// const containerEl = document.querySelector('.js-container');

// Task 6.10.4
// const textareaEl = document.querySelector('.js-text');
// const inputEl = document.querySelector('.js-input');
// const btnEl = document.querySelector('.js-btn');
// const outputEl = document.querySelector('.js-output');

// const onBtnElClick = () => {
//   const target = inputEl.value;
//   const str = textareaEl.value;

//   let pos = 0;
//   let count = 0;

//   while (true) { // Объясни условие
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos === -1) break;

//     count += 1;
//     pos = foundPos + 1;
//   }
//   outputEl.textContent = count;
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 7.1.1 !!!!!!!!!!!!!!!!!
// const arr = [2, 1, 5, 7, 2, 8, 5, 3, 0];

// const listEl = document.querySelector('.js-list');
// const btnEl = document.querySelector('.js-btn');

// const createMarkup = array => {
//   const markup = array
//     .map(
//       el => `
//     <li class="js-list__item">${el}</li>
//     `
//     )
//     .join('');
//   listEl.insertAdjacentHTML('beforeend', markup);
// };

// createMarkup(arr);

// const getAllIdx = (arr, value) =>
//   arr.reduce((acc, item, idx) => (item === value ? [...acc, idx] : acc), []);

// const removeElsByIdx = (els, idxArr) =>
//   els.forEach((element, idx) => {
//     if (idxArr.includes(idx)) element.remove();
//   });

// const onBtnElClick = () => {
//   const elements = [...listEl.children];
//   if (elements.length) return;

//   const values = [...listEl.children].map(el => +el.textContent);
//   const max = Math.max(...values);
//   const idx = getAllIdx(values, max);
//   removeElsByIdx([...listEl.children], idx);
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 7.1.2
// const btnEl = document.querySelector('.js-btn');
// const textEl = document.querySelector('.js-text');

// const onBtnElClick = () => {
//   const arr = textEl.textContent.split(' ').filter(el => el !== '');
//   const markup = arr.map(el => `<span>${el}</span>`).join('');
//   textEl.innerHTML = markup;
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 7.1.3
// const btnEl = document.querySelector('.js-btn');
// const textEl = document.querySelector('.js-text');

// const onBtnElClick = () => {
//   const regex = /[^a-z]\/[^a-z]/gi;
//   const markup = textEl.textContent
//     .split(' ')
//     .filter(el => el !== '')
//     .map(el => (el.match(regex) ? `<span>${el}</span>` : el))
//     .join(' ');
//   textEl.innerHTML = markup;
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 7.1.4
// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// const inputEl = document.querySelector('.js-input');
// const tableBodyEl = document.querySelector('.js-tbody');

// const createMarkup = date => {
//   return `
// <tr class="js-tr">
//     <th class="js-td td">${date}</th>
//     <th class="js-td td">${days[date.getDay()]}</th>
// </tr>
//     `;
// };

// const onInputElChange = event => {
//   const { target } = event;
//   const date = new Date(target.value);
//   tableBodyEl.insertAdjacentHTML('beforeend', createMarkup(date));
//   target.value = '';
// };

// inputEl.addEventListener('change', onInputElChange);

// Task 7.1.5?????????
// const createArr = n => {
//   const result = [];
//   const arr = [...Array(n)].map((_, idx) => idx + 1);

//   while (n > 0) {
//     result.push(arr);
//     n -= 1;
//   }
//   return result;
// };
// console.log(createArr(3));

// Task 7.2.1?????????????? Как убрать класс active?
// const numbers = [2, 4, 1, 5, 7, 3, 8, 3, 0, 2];

// const listEl = document.querySelector('.js-list');
// const inputEl = document.querySelector('.js-input');
// const btnEl = document.querySelector('.js-btn');

// const createListItem = arr => {
//   const markup = arr
//     .map(
//       el => `
//       <li class='js-list__item'><span class='js-list__value'>${el}</span></li>
//       `
//     )
//     .join('');
//   listEl.insertAdjacentHTML('beforeend', markup);
// };

// createListItem(numbers);

// const valueEl = document.querySelectorAll('.js-list__value');

// // let prevActiveElement = [];

// const onBtnElClick = () => {
//   const value = inputEl.value;
//   if (value === '') {
//     console.log('Enter a number.');
//     return;
//   }

//   let activeElIdx = [];
//   const activeElement = [...valueEl].map((element, idx) => {
//     if (element.textContent === value) {
//       activeElIdx.push(idx);
//       element.parentElement.classList.add('active');
//     }
//   });

// //   prevActiveElement = prevActiveElement.push([...valueEl][activeElIdx]);
// //   console.log(prevActiveElement);

//   if (prevActiveElement !== null) {
//     prevActiveElement.parentElement.classList.remove('active');
//   }
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 7.2.2 ????? Как сделать, чтобы перезаписывалось содержимое? innerHTML не подходит
// const listEl = document.querySelector('.js-list');
// const inputEl = document.querySelector('.js-input');

// const createMarkup = date => {
//   return `
//     <li class='js-list__item'>${date}</li>
//     `;
// };

// const onInputElChange = () => {
//   const year = inputEl.value;
//   for (let month = 0; month < 12; month += 1) {
//     const date = new Date(year, month, 13);
//     if (date.getDay() === 5) {
//       listEl.insertAdjacentHTML('beforeend', createMarkup(date));
//     }
//   }
// };

// inputEl.addEventListener('change', onInputElChange);

// Task 7.2.3???????????
// const fieldsetEl = document.querySelector('#js-language');
// const outputEl = document.querySelector('.js-output');

// const onFieldsetElClick = event => {
//   const { target } = event;

//   if (target.nodeName !== 'INPUT' || target.nodeName !== 'LABEL') {
//     return;
//   }
//   console.log(target.textContent);
//   outputEl.textContent = target;
// };

// fieldsetEl.addEventListener('click', onFieldsetElClick);

// Task 7.2.4
// const createArr = n => {
//   const res = [];
//   const arr = [];
//   while (arr.length !== n) {
//     arr.push('x');
//     res.push([...arr]);
//   }
//   return res;
// };

// console.log(createArr(7));

// Task 7.2.5
// const textEls = document.querySelectorAll('.js-text');

// const res = [...textEls].map(el => el.textContent);
// console.log(res);

// Task 7.3.1???????????????
// const textEl = document.querySelector('.js-text');
// const btnEl = document.querySelector('.js-btn');

// const onBtnElClick = () => {
//   const text = textEl.textContent;
//   console.log(text);
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 7.3.2
// const getArr = (min, max, n) => {
//   const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);
//   const arr = [];

//   if (max - min < n) {
//     console.log('Impossible to push only unique numbers to the array.');
//     return arr;
//   }
//   while (arr.length !== n) {
//     let num = getRandomNum(min, max);
//     if (!arr.includes(num)) {
//       arr.push(num);
//     }
//   }
//   return arr;
// };

// console.log(getArr(3, 10, 5));

// Task 7.3.3
// const containerEl = document.querySelector('.js-container');

// let data = [
//   {
//     text: '111',
//     href: '1.html',
//   },
//   {
//     text: '222',
//     href: '2.html',
//   },
//   {
//     text: '333',
//     href: '3.html',
//   },
// ];

// const createMarkup = content => {
//   const markup = content
//     .map(
//       el => `
//   <a href=${el.href}>${el.text}</a>
//   `
//     )
//     .join('');
//   return markup;
// };

// containerEl.innerHTML = createMarkup(data);

// Task 7.4.1???????
// const listEl = document.querySelector('.js-list');

// const currentDate = new Date();
// const lastDayOfCurrentMonth = new Date(
//   currentDate.getFullYear(),
//   currentDate.getMonth() + 1,
//   0
// ).getDate();

// const arr = [];
// for (let i = 1; i <= lastDayOfCurrentMonth; i += 1) {
//   arr.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
// }

// // Сп.1 Как вставить в ДОМ-дерево?
// const createLiElement = date => {
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = date;
//   listItemEl.classList.add('js-list__item');
//   if (date.getDay() === 6 || date.getDay() === 0) listItemEl.classList.add('active');
//   if (date === currentDate) listItemEl.classList.add('current');
//   return listItemEl;
// };

// console.log(createLiElement(new Date()));

// const createMarkup = arr => {
//   const markup = arr.map(date => createLiElement(date)).join('');
//   console.log(markup);
//   listEl.append(markup);
// };

// createMarkup(arr);

// // Сп.2 Как еще и текущий день отметить другим цветом?
// // const createMarkup = arr => {
// //   const markup = arr
// //     .map(date =>
// //       date.getDay() === 6 || date.getDay() === 0
// //         ? `
// // <li class='js-list__item active'>${date}</li>
// // `
// //         : `
// // <li class='js-list__item'>${date}</li>
// // `
// //     )
// //     .join('');

// //   listEl.insertAdjacentHTML('beforeend', markup);
// // };

// // createMarkup(arr);

// Task 7.4.2
// const textEl = document.querySelector('.js-text');

// const wrapInSpan = () => {
//   const arr = textEl.textContent.split(' ').filter(el => el !== '');
//   const markup = arr.map(el => `<span class='js-target'>${el} </span>`).join('');
//   textEl.innerHTML = markup;
// };

// wrapInSpan();

// let prevTarget = null;

// const onWordClick = event => {
//   const { target } = event;
//   if (target === prevTarget) {
//     target.classList.toggle('active');
//     return;
//   }

//   if (prevTarget !== null) {
//     prevTarget.classList.remove('active');
//   }
//   target.classList.add('active');

//   prevTarget = target;
// };

// textEl.addEventListener('click', onWordClick);

// Task 7.4.3
// const inputEl = document.querySelector('.js-input');
// const btnEl = document.querySelector('.js-btn');
// const outputEl = document.querySelector('.js-output');

// const onBtnElClick = event => {
//   const value = inputEl.value;
//   const arr = value.split('');
//   const firstHalfSum = [...arr]
//     .splice(0, arr.length / 2)
//     .reduce((sum, el) => sum + parseInt(el), 0);
//   const secondHalfSum = [...arr]
//     .splice(arr.length / 2, arr.length / 2)
//     .reduce((sum, el) => sum + parseInt(el), 0);
//   if (firstHalfSum === secondHalfSum) {
//     outputEl.textContent = 'Lucky ticket!';
//   } else {
//     outputEl.textContent = 'Try next time.';
//   }
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 7.4.4
// const inputEl = document.querySelector('.js-input');

// const onInputElInput = event => {
//   const { target } = event;
//   if (target.value.length === 10) {
//     target.setAttribute('disabled', true);
//   }
// };

// inputEl.addEventListener('input', onInputElInput);

// Task 7.4.5????? Куда вписать setInterval?
// const inputEl = document.querySelector('.js-input');
// const btnEl = document.querySelector('.js-btn');
// const outputEl = document.querySelector('.js-output');

// const onBtnElClick = () => {
//   let num = +inputEl.value;

//   while (num >= 0) {
//     outputEl.textContent = num;
//     console.log(num);
//     num -= 1;
//   }
// };

// btnEl.addEventListener('click', onBtnElClick);

// Task 7.4.6
// const createArr = n => {
//   const res = [];
//   const arr = [];
//   while (arr.length !== n) {
//     arr.push(arr.length + 1);
//     res.push([...arr]);
//   }
//   return res;
// };

// console.log(createArr(7));

// Task 7.5.1?????????????????

// Task 7.5.2???????? Як обрати правильний div?
// const commonContEl = document.querySelector('.js-common-container');

// const onBtnElClick = event => {
//   const { target } = event;
//   if (target.nodeName !== 'BUTTON') {
//     return;
//   }
// };

// commonContEl.addEventListener('click', onBtnElClick);

// Task 7.5.3
// Task 7.5.4

// Task 7.6.1
// Task 7.6.2
// Task 7.6.3
// Task 7.6.4

// Task 7.7.1
// Task 7.7.2
// Task 7.7.3

// Task 7.8.1
// Task 7.8.2
// Task 7.8.3
// Task 7.8.4

// Task 7.9.1
// Task 7.9.2
// Task 7.9.3
// Task 7.9.4

// Task 7.10.1
// Task 7.10.2
// Task 7.10.3
// Task 7.10.4
