// from data.js
var tableData = data;

// YOUR CODE HERE!
// reference the table body
var tbody = d3.select("tbody");

// Console.log the data to check it pulls correctly 
console.log(tableData);

// // Step 1: Loop Through `data` and console.log each weather report object
// data.forEach(function(ufoSighting) {
//   console.log(ufoSighting);
// });

// update cell text with data from file 
tableData.forEach(function(ufoSighting) {
  console.log(ufoSighting);
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});