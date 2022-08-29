var searchFormEl = document.querySelector('#search-form');


function handleSearchFormSubmit(event) {
  event.preventDefault();

//  Code to get values
  // todo define searchInputVal = #search-input
  // todo define formatInputVal =  #format-input


  var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
