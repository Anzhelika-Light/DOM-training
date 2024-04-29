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
// Task 5.7.2
// Task 5.7.3
// Task 5.7.4
// Task 5.7.5
// Task 5.8.1
// Task 5.8.2
// Task 5.8.3
// Task 5.8.4
// Task 5.8.5
// Task 5.8.6
// Task 5.9.1
// Task 5.9.2
// Task 5.9.3
// Task 5.9.4
// Task 5.9.5
// Task 5.10.1
// Task 5.10.2
// Task 5.10.3
// Task 5.10.4
// Task 5.10.5
// Task 5.10.6
