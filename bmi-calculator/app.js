
//===================================

let height = document.getElementById('height');
let weight = document.getElementById('weight');
let output = document.getElementById('output');
let outputRate = document.getElementById('output-rate');
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  let height = document.getElementById('height').value;
  let weight = document.getElementById('weight').value;

  let logic = (weight / (height * height)) * 703;

  let finalOutput = logic.toFixed(2);

  output.innerText = finalOutput;

  if (finalOutput === '' || finalOutput === null || finalOutput === undefined) {
    outputRate.innerText = '';
  } else if (finalOutput < 18.5) {
    outputRate.style.color = 'red';
    outputRate.innerText = 'Underweight';
  } else if (finalOutput < 25.0) {
    outputRate.style.color = 'black';
    outputRate.innerText = 'Normal';
  } else if (finalOutput < 29.0) {
    outputRate.style.color = 'yellow';
    outputRate.innerText = 'Overweight';
  } else if (finalOutput > 30.0) {
    outputRate.style.color = 'red';
    outputRate.innerText = 'Obese';
  }

  //Error checking
  if (height === '' || (height === null && weight === '') || weight === null) {
    output.innerText = 'Please input your weight and height';
    output.style.color = 'red';
  } else if (height === '' || height === null) {
    output.innerText = 'Please input your height';
    output.style.color = 'red';
  } else if (weight === '' || weight === null) {
    output.innerText = 'Please input your weight';
    output.style.color = 'red';
  } else {
    output.style.color = 'black';
  }
});

//===================================
