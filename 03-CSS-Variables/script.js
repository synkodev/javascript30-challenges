/*
  Step-by-step resolution of the challenge:
  1 - Query the DOM Elements that will listen to the event (inputs); ✅
  2 - Add the event listener to each one of them when the value changes; ✅
  3 - Based on the input value, change the variables in the CSS. ✅
*/

const inputs = document.querySelectorAll('input');

const changeVariable = (event) => {
  // Evaluates if sizing is a property. If it is, returns the value, if not, puts '' instead
  const suffix = event.target.dataset.sizing || '';
  document.body.style.setProperty(`--${event.target.id}`, event.target.value + suffix);
}

inputs.forEach(input => input.addEventListener('input', changeVariable));
