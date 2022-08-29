var searchFormEl = document.querySelector('#search-form');
var selectEl = document.getElementById('format-input');
var inputEl = document.getElementById('search-input');

function handleSearchFormSubmit(event) {
  event.preventDefault();

//  Code to get values
  if (!inputEl.value) {return 0;}
  var formatInputVal = selectEl.value;
  var searchInputVal = inputEl.value;


  var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
