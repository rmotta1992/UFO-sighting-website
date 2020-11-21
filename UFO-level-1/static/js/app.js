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

//var text = d3.select("#datetime");
//var output = d3.select(".output");

// function handleSubmit() {
//     // Prevent the page from refreshing
//     d3.event.preventDefault();
  
//     // Select the input value from the form
//     var date = d3.select("#datetime").node().value;
//     console.log(date);
  
//     // clear the input value
//     d3.select("#datetime").node().value = "";
//   // Build the plot with the new stock
//     buildPlot(date);
// }
// d3.select("#submit").on("click", handleSubmit);

// var input, filter, table, tr, td, i, txtValue;
//   input = document.getElementById("myInput");
//   //filter = input.value.toUpperCase();
//   table = document.getElementById("myTable");
//   tr = table.getElementsByTagName("tr");

//   // Loop through all table rows, and hide those who don't match the search query
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }


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
  
    // Set the span tag in the h1 element to the text
    // that was entered in the form
    //d3.select("h1>span").text(inputValue);
    //if inputValue === 'Date':
      //  console.log(1)
    //   function myFunction() {
    //     var input, filter, table, tr, td, i, txtValue;
    //     input = inputValue;
    //     filter = input.value.toUpperCase();
    //     table = document.getElementById("ufo-table");
    //     tr = table.getElementsByTagName("tr");
    //     for (i = 0; i < tr.length; i++) {
    //       td = tr[i].getElementsByTagName("td")[0];
    //       if (td) {
    //         txtValue = td.textContent || td.innerText;
    //         if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //           tr[i].style.display = "";
    //         } else {
    //           tr[i].style.display = "none";
    //         }
    //       }       
    //     }
    //   } 
    // function searchDate(newdate) {
    //     // return player.madeTeam == true;
    //     // A more concise way to express a boolean conditional
    //     return newdate.datetime;
    //   }
    //   var inputResults = data.filter(searchDate);
    // Create a custom filtering function
    var newTalbe = []
    function selectDate(date) {
        return date.datetime === inputValue;
    }
  
    // filter() uses the custom function as its argument
    var userDate = tableData.filter(selectDate);
  
    // Test
    newTalbe.append(userDate);
    
    // tableData.forEach(function(ufoSighting) {
    //     //console.log(ufoSighting);
    //     var row = tbody.append("tr");
    //     Object.entries(ufoSighting).forEach(function([key, value]) {
    //       //console.log(key, value);
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    //   });
}


