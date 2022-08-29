var searchFormEl = document.querySelector('#search-form');
var selectEl = document.getElementById('format-input');
var inputEl = document.getElementById('search-input');


function handleSearchFormSubmit(event) {
  event.preventDefault();

//  Code to get values
<<<<<<< HEAD

  // todo define searchInputVal = #search-input
  var searchInputVal = document.querySelector("#search-input");
  // todo define formatInputVal =  #format-input
 var formatInputVal = document.querySelector("#format-input");


 

=======
  if (!inputEl.value) {return 0;}
  var formatInputVal = selectEl.value;
  var searchInputVal = inputEl.value;

>>>>>>> a8779c774fc5cf54906191e72e7a73eff568bba1

  var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
