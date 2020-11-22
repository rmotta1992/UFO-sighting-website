// from data.js
var tableData = data;

// YOUR CODE HERE!
// reference the table body
var tbody = d3.select("tbody");

// Console.log the data to check it pulls correctly 
console.log(tableData);

// // Step 1: Loop Through `data` and console.log each weather report object
// data.forEach(function(ufoSighting) {
//    console.log(ufoSighting);
// });

// update cell text with data from file 
tableData.forEach(function(ufoSighting) {
  //console.log(ufoSighting);
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(function([key, value]) {
    //console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});

  var button = d3.select("#filter-btn");

  // Select the form
  var form = d3.select("#form");
  
  // Create event handlers for clicking the button or pressing the enter key
  button.on("click", runEnter);
  form.on("submit",runEnter);
  
  // Create the function to run for both events
  function runEnter() {
  
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // Print the value to the console
    console.log(inputValue);
  
    // filter data by user input 
    var newTalbe = []
    function selectDate(date) {
        return date.datetime === inputValue;
    }
    var userDate = tableData.filter(selectDate);
  
    // Test
    console.log(userDate);
   
    // if tableData.datetime === inputValue:  
    //     newTalbe.append(userDate)
    var tbody2 = d3.select("tbody")

    tbody.html("");

    userDate.forEach(function(selectDate) {
        //console.log(ufoSighting);
        var row = tbody.append("tr");
        Object.entries(selectDate).forEach(function([key, value]) {
          //console.log(key, value);
          var cell = row.append("td");
          cell.text(value);
        });
      });
}


  