//reaching to the list
var list = document.querySelector("table");

var new_note = document.querySelector("#note");
var add = document.querySelector("#add");

add.addEventListener("click", function() {
    var tr = document.createElement("tr");
    tr.textContent = note.value;
    list.appendChild(tr);
    note.value = "";
});