// from data.js
var tableData = data;

// Use D3 to create the table body
var tbody = d3.select("tbody");

for (var i = 0; i < tableData.length; i++) {
  // console.log(tableData[i]);
  var UFOSighting = tableData[i]; // each dictionary one at a time

  // build a row element (<tr>) and reference it
  var row = tbody.append("tr");

  // add cells (<td>) to the row (with their respective values)
  // Date	City	State	Country	Shape	Duration	Comments
  row.append("td").text(UFOSighting['datetime']);
  row.append("td").text(UFOSighting['city']);
  row.append("td").text(UFOSighting['state']);
  row.append("td").text(UFOSighting['country']);
  row.append("td").text(UFOSighting['shape']);
  row.append("td").text(UFOSighting['durationMinutes']);
  row.append("td").text(UFOSighting['comments']);

}

 /*            BUTTON HANDLING SECTION             */

var button = d3.select("#filter-btn");
console.log('Here is the button:', button);

button.on("click", function() {
  // Prevents the page from refreshing
  d3.event.preventDefault();

  console.log('HEY THE BUTTON CLICK HANDLER WORKS!');

   // Select the input element (date time)
   var inputElement = d3.select("#datetime");
   console.log('Input Element:', inputElement);

   // Get value
   var dateInput = inputElement.property('value');
   console.log('Date Input:', dateInput);

  // Filter by date input
  // filter 'iterates' over a list of items, and performs a check on each item
  // example: greater_than_five_list = array.filter(function(value){ return value >= 5 })

  var filtered_dates = tableData.filter(
    function(obj){ 
      // return obj['datetime'] === dateInput && obj['state'] == 'ca' // all in one
      return obj['datetime'] === dateInput
    }
  );

  console.log('filtered_dates:', filtered_dates);

  // remove the data from tbody
  tbody.html('');

  for (var i = 0; i < filtered_dates.length; i++) {
    // console.log(tableData[i]);
    var UFOSighting = filtered_dates[i]; // each dictionary one at a time
  
    // build a row element (<tr>) and reference it
    var row = tbody.append("tr");
  
    // add cells (<td>) to the row (with their respective values)
    // Date	City	State	Country	Shape	Duration	Comments
    row.append("td").text(UFOSighting['datetime']);
    row.append("td").text(UFOSighting['city']);
    row.append("td").text(UFOSighting['state']);
    row.append("td").text(UFOSighting['country']);
    row.append("td").text(UFOSighting['shape']);
    row.append("td").text(UFOSighting['durationMinutes']);
    row.append("td").text(UFOSighting['comments']);
  
  }

})