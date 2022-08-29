var resultTextEl = document.querySelector("#result-text");
var resultContentEl = document.querySelector("#result-content");
var searchFormEl = document.querySelector("#search-form");

function getParams() {
    // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
    var searchParamsArr = document.location.search.split("&");

    // Get the query and format values
    var query = searchParamsArr[0].split("=").pop();
    var format = searchParamsArr[1].split("=").pop();

    searchApi(query, format);
}

function printResults(resultObj) {
    // console.log(resultObj);

    // todo make resultTextEl = search input value

    // todo make a loop for the results : 
    // todo : instead of placeholder text, use data from searchAPI and index
    var cardBody = $("<div>").addClass("card-body");
    var cardHeader = $("<h5>").text("title of article").addClass("card-title text-dark");
    var cardDate = $("<p>").text("date of article").addClass("card-text text-dark");
    var cardSummary = $("<p>").text("summary of article").addClass("card-text text-dark");
    var cardButton = $("<a>").text("link to article").addClass("btn btn-primary");

    cardBody.append(cardHeader, cardDate, cardSummary, cardButton)
    $(resultContentEl).addClass("card");
    $(resultContentEl).append(cardBody);


    
}

function searchApi(query, format) {
    var locQueryUrl =
        "https://cors-anywhere.herokuapp.com/www.loc.gov/search/?fo=json";

//************************** TODO ADD PARAMETERS *****************************//

//Defining async function//
async function getapi(locQueryUrl) {
    
    //Storing response//
    const response = await fetch(locQueryUrl);
    
    //Storing data in form of JSON//
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
//****************************** TODO FETCH CALL ******************************//

// Calling that async function
getapi(locQueryUrl);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let data = 
        `<tr>
          <th>maps</th>
          <th>audio</th>
          <th>photos</th>
          <th>manuscripts</th>
          <th>newspapers</th>
          <th>film-and-videos</th>
          <th>notated-music</th>
          <th>websites</th>
         </tr>`;
    
    //Loop to access all rows 
    for (let r of data.list) {
        tab += `<tr> 
    <td>${r.maps} </td>
    <td>${r.audio}</td>
    <td>${r.photos}</td> 
    <td>${r.manuscripts}</td>
    <td>${r.newspapers} </td>
    <td>${r.film-and-videos}</td>
    <td>${r.notated-music}</td>
    <td>${r.websites}</td>         
</tr>`;
    }
    //Setting innerHTML as tab variable//
    document.getElementById("#search-input").innerHTML = tab;
    document.getElementById("#format-input").innerHTML = tab;
    
}

    
    
    



    // printResults();
}

function handleSearchFormSubmit(event) {
    event.preventDefault();
}

searchFormEl.addEventListener("submit", handleSearchFormSubmit);

getParams();
// printResults();
