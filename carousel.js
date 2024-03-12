document.addEventListener("DOMContentLoaded", function () {
    // Select all table rows except the first one (skipping the header row)
    var tableRows = document.querySelectorAll('.table2 tr:not(:first-child)');

    // Iterate through each table row
    tableRows.forEach(function (row) {
        // Select the second <td> element within the row (where the name is)
        var nameCell = row.querySelector('td:nth-child(2)');

        // Retrieve the text content of the name cell
        var name = nameCell.textContent.trim();

        // Log the name to the console (you can replace this with any action you want to perform with the name)
        console.log(name);
    });
});
