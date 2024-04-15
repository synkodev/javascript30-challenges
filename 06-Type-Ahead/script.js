const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// First we'll declare a variable to store all the places from the endpoint
const places = [];

// Saving the result of the remote call into places
fetch(endpoint)
  .then(response => response.ok && response.json())
  .then(data => places.push(...data))
  .catch(error => console.log(error));
/* ------------------------------------------------------------- */

// Save the DOM elements we might need in variables
const inputField = document.querySelector('.search');
const resultsList = document.querySelector('.suggestions');

// Function to match the input value with the places we fetched
const findMatches = (wordToMatch) => {
  const regex = new RegExp(wordToMatch, 'gi');
  const filteredMatches = places.filter(place => place.city.match(regex) || place.state.match(regex));
  return filteredMatches;
}


// Function to display results
// It will be called in the event listener in every input made by the user
const displayResults = (event) => {
  const inputMatches = findMatches(event.target.value);
  const regex = new RegExp(event.target.value, 'gi'); // global, case insensitive
  const results = inputMatches.map(match => {
    // .toLowerCase() added to avoid messing up the formatting of the results
    const cityHighlight = match.city.replace(regex, `<span class='hl'>${event.target.value.toLowerCase()}</span>`);
    const stateHighlight = match.state.replace(regex, `<span class='hl'>${event.target.value.toLowerCase()}</span>`);
    return `
      <li>
        <span class='name'>${cityHighlight}, ${stateHighlight}</span>
        <span class='population'>${match.population}<span>
      </li>`
  }).join('');
  resultsList.innerHTML = results;
}

// adds 'input' event listener and associates it with displayResults handler
inputField.addEventListener('input', displayResults);
