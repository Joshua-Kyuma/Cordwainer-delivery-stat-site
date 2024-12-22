// Function to automatically assign ID to each row
function addAutoIds() {
    var table = document.getElementById("dataTable");
    var rows = table.getElementsByTagName("tr");
    
    // Start loop from 1 because row 0 is the header
    for (var i = 1; i < rows.length; i++) {
        var cell = rows[i].getElementsByTagName("td")[0]; // Get the first cell in each row (ID cell)
        if (cell) {
            cell.textContent = i; // Set the ID value to the row number
        }
    }
}

// Function to filter table rows based on search input
function searchTable() {
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('dataTable');
    tr = table.getElementsByTagName('tr');
    
    // Loop through all table rows, except the header
    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = 'none'; // Hide row by default
        td = tr[i].getElementsByTagName('td');
        for (j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = ''; // Show row if a match is found
                    break; // Stop searching further columns once a match is found
                }
            }
        }
    }
}

// Call the addAutoIds function when the page loads
window.onload = function() {
    addAutoIds(); // Add IDs to the rows
}
