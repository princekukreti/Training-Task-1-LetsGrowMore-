var selectRow = null;

function submitform(e) {
    event.preventDefault();
    var FormData = readFormData();
    if (selectRow === null) {
        insertNewRecord(FormData);
    } else {

    }

}

function readFormData() {
    var FormData = {};
    FormData["FullName"] = document.getElementById("FullName").value;
    FormData["email"] = document.getElementById("email").value;
    FormData["website"] = document.getElementById("website").value;
    FormData["number"] = document.getElementById("number").value;

    return FormData;
}


function insertNewRecord(data) {
    var tables = document.getElementById("outputlist").getElementsByTagName('tbody')[0];
    var row = tables.insertRow(tables.length);
    var cell0 = row.insertCell(0);
    cell0.innerHTML = data.FullName;
    var cell1 = row.insertCell(1);
    cell1.innerHTML = data.email;
    var cell2 = row.insertCell(2);
    cell2.innerHTML = data.website;
    var cell3 = row.insertCell(3);
    cell3.innerHTML = data.number;


}

function resetform() {
    document.getElementById('FullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('website').value = '';
    document.getElementById('number').value = '';

}