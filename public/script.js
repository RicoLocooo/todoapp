// Globale Variablen

let allList = [];

// Event listener für den Add Button
let addButton = document.querySelector("#add-button");
addButton.addEventListener("click", addToList);
// Event Listener für aktivieren der Checkboxen in der Liste

// Speichert Text Input in dem All-Array
function addToList() {
  let ariaLabel = document.getElementById("input-text").value;
  if (ariaLabel.length > 5) {
    allList.push(ariaLabel);
    createElementInList(ariaLabel);
  }
}

function createElementInList(todo) {
  // Bereich selektieren
  let list = document.querySelector("#list");
  // neues Listenelement erzeugen
  let newItem = document.createElement("li");
  newItem.innerText = todo;
  // neue Checkbox erzeugen
  let checkBox = document.createElement("input");
  checkBox.setAttribute("class", "form-check-input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("id", "checkbox");
  // beide Childs zum #list Element hinzufügen
  newItem.appendChild(checkBox);
  list.appendChild(newItem);
}
