document.addEventListener("DOMContentLoaded", function () {
    // Select all table rows except the first one (skipping the header row)
    var tableRows = document.querySelectorAll('.table3 tr:not(:first-child)');

    // Iterate through each table row
    tableRows.forEach(function (row) {
        // Select the second <td> element within the row (where the name is)
        var nameCell = row.querySelector('td:nth-child(2)');
        nameCell.textContent = "bob"
        console.log()
        var statistic = row.querySelector('td:nth-child(3)');
        statistic.textContent = "1"
    });
});
