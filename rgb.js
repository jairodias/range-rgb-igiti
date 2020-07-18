let inputRed = document.querySelector('#input-red');
let inputBlue = document.querySelector('#input-blue');
let inputGreen = document.querySelector('#input-green');

let rangeRed = document.querySelector('#range-red');
let rangeBlue = document.querySelector('#range-blue');
let rangeGreen = document.querySelector('#range-green');

let quadroRange = document.querySelector('.quadro-range');

let red = 0;
let blue = 0;
let green = 0;

rangeRed.addEventListener('change', (event) => {
  red = event.target.value;
  inputRed.disabled = true;
  inputRed.value = red;
  renderColor(red, blue, green);
});

rangeBlue.addEventListener('change', (event) => {
  blue = event.target.value;
  inputBlue.value = blue;
  inputBlue.disabled = true;
  renderColor(red, blue, green);
});

rangeGreen.addEventListener('change', (event) => {
  green = event.target.value;
  inputGreen.value = green;
  inputGreen.disabled = true;
  renderColor(red, blue, green);
});

function renderColor(r, g, b) {
  quadroRange.style.borderColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}
