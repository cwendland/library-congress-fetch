var resultTextEl = document.querySelector("#result-text");
var resultContentEl = document.querySelector("#result-content");
var searchFormEl = document.querySelector("#search-form");

function getParams() {
    // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
    // var searchParamsArr = document.location.search.split("&");

    // Get the query and format values
    // var query = searchParamsArr[0].split("=").pop();
    // var format = searchParamsArr[1].split("=").pop();

    // searchApi(query, format);
}

function printResults(resultObj) {
    // console.log(resultObj);

    // todo make resultTextEl = search input value

    // todo set up `<div>` to hold resultContentEl
    var cardBody = $("<div>").addClass("card-body");
    var cardHeader = $("<h5>").text("title of article").addClass("card-title");
    var cardDate = $("<p>").text("date of article").addClass("card-text");
    var cardSummary = $("<p>").text("summary of article").addClass("card-text");
    var cardButton = $("<a>").text("link to article").addClass("btn btn-primary");

    cardBody.append(cardHeader, cardDate, cardSummary, cardButton)
    $(resultContentEl).addClass("card");
    $(resultContentEl).append(cardBody);


    
}

function searchApi(query, format) {
    var locQueryUrl =
        "https://cors-anywhere.herokuapp.com/www.loc.gov/search/?fo=json";
    // todo add parameters 
    
    // todo fetch call 
    // printResults();
}

function handleSearchFormSubmit(event) {
    event.preventDefault();
}

// searchFormEl.addEventListener("submit", handleSearchFormSubmit);

// getParams();
printResults();
