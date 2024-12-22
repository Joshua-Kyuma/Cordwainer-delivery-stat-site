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
