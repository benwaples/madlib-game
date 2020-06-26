// import functions and grab DOM elements
const input1 = document.getElementById('ingWord-1');
//console.log(input1);
// initialize state
const result = document.getElementById('results');
// set event listeners to update state and DOM 

const button = document.getElementById('submitButton');
//console.log(button);

button.addEventListener('click', () => {
  //console.log('yes');
  const userInput = input1.value;
  result.textContent = userInput;
  //console.log(userInput);
});