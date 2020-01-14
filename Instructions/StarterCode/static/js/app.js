// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get references to the elements of the DOM
var tbody = d3.select("tbody")
function buildTable(data){
    tbody.html("");
    data.forEach((dataRow) => {
        var row =tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
        var cell = row.append("td");
            cell.text(val);
    });
});
}

//build table
buildTable(tableData)

//Filterdata
function filterData() {
    var date = d3.select("#datetime").property("value");
    console.log(date)
    let filteredData = tableData;
    console.log(filteredData)
    if (date){
        filteredData = filteredData.filter(row => row.datetime=== date);
        console.log(filteredData)
    }
    buildTable(filteredData)
}
d3.selectAll("#filter-btn").on("click",filterData)