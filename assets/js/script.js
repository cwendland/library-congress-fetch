var searchFormEl = document.querySelector('#search-form');
var selectEl = document.getElementById('format-input');
var inputEl = document.getElementById('search-input');


function handleSearchFormSubmit(event) {
  event.preventDefault();

//  Code to get values

  // todo define searchInputVal = #search-input
  var searchInputVal = document.querySelector("#search-input");
  // todo define formatInputVal =  #format-input
 var formatInputVal = document.querySelector("#format-input");


 


  var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
