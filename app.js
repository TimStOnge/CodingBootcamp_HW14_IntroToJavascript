// APP FOR UFO SIGHTINGS TABLE
// Tim St. Onge
// -------------------


// Pull in data from the data.js and write to tableData alias.
var tableData = data;

// Store the table body element under "tbody"
var tbody = d3.select("tbody");

// For every UFO report (object) in the UFO dataset...
tableData.forEach(function(ufoReport) {

    // Append a row to the table body for every UFO report
    var row = tbody.append("tr");
 
    // For each pair of keys and values in each UFO report...
    Object.entries(ufoReport).forEach(function([key, value]) {
        
        // Append a data column (cell) to the row and enter the corresponding value in each cell.
        var cell = tbody.append("td");
        cell.text(value);
    });
  });

/* Select the "filter-btn" id and store under alias filterButton. This element is a button on the 
page that can be clicked.*/
var filterButton = d3.select("#filter-btn");

// Define all of the actions that occur when the filterButton is clicked:
filterButton.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Clear out all of the contents of the data table body.
  d3.select("tbody").html("");

  // Save the form entry box under the "inputElement" variable.
  var inputElement = d3.select(".form-control");

  // Get the value that is entered into the entry box.
  var inputValue = inputElement.property("value");

  // Filter out the data that have the "datetime" attribute matching the date entered into the entry form.
  var filteredData = tableData.filter(sighting => sighting.datetime == inputValue);

  // For each UFO report within the filtered UFO sightingdata...
  filteredData.forEach(function(filter_report) {
    
    // Append a new row to the table body for each UFO report in the filtered UFO data.
    var row = tbody.append("tr");
        
        // For each key/value in each UFO report:
        Object.entries(filter_report).forEach(function([key, value]) {
            
            // Add a new column (cell) to each body table row and enter in the corresponding value.
            var cell2 = tbody.append("td");
            cell2.text(value);
        
        });
    });
});