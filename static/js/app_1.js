// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
// Data-Driven Documents (D3 for short) is a JavaScript library that adds interactive functionality, 
// such as when users click a button to filter a table. 
// It works by "listening" for events, such as a button click, then reacts according to the code we've created.
var tbody = d3.select("tbody");

function buildTable(data) {
	// Clear any previous filtering
	tbody.html("")

	// For loop (on array only, since forEach works on arrays only)
	// dataRow will represent each row of the data as we iterate through the array
	data.forEach((dataRow) => {
		// Loop through each field in the dataRow and add
    	// each value as a table cell (td)
		let row = tbody.append("tr") // <tr> tags are used for each row in a table
		Object.values(dataRow).forEach((val) => {
			let cell = row.append("td");
			cell.text(val); // Add each value from the object to a cell
		});
	});
}

function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  };

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);