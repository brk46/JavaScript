var tableData = data;

var tbody = d3.select("tbody");
var errorMessage = d3.select("#error-message");

tableData.forEach(function (ufo) {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function ([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

var filterButton = d3.select("#filter-btn");
filterButton.on("click", function () {
    d3.event.preventDefault();

    var filterDate = d3.select("#datetime");
    var inputDate = filterDate.property("value");
    var filteredDate = tableData.filter(tableData => tableData.datetime === inputDate);
    var n = filteredDate.length;

    tbody.text(" ")
    errorMessage.text(" ")

    if (inputDate === "") {
        errorMessage.text("Error: No date entered")
    }
    else if (n === 0) {
        errorMessage.text("Error: No observations for this date")
    }
    else {
        filteredDate.forEach(function (filterUfo) {
            var row = tbody.append("tr");
            Object.entries(filterUfo).forEach(function ([key, value]) {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }
});

var resetButton = d3.select("#reset-btn");
resetButton.on("click", function () {
    d3.event.preventDefault();

    tbody.text("")
    errorMessage.text(" ")

    tableData.forEach(function (ufo) {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function ([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});
