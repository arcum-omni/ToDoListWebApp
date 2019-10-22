/**
 * Represents a single task on a to do list.
 */
var ToDoItem = /** @class */ (function () {
    //Constructor
    function ToDoItem(task) {
        this.title = task;
    }
    return ToDoItem;
}());
var myItem = new ToDoItem("Finish Class");
window.onload = function () {
    var addBtn = document.querySelector("form > input[type=button]");
    addBtn.onclick = main;
};
function main() {
    // get todo item from user
    var item = getItem();
    // display new todo item on page
    displayToDoItem(item);
    // save todo item
}
/**
 * Move selected task to completed section of the page
 */
function markAsComplete() {
    var currItem = this;
    var completedItems = document.getElementById("completed");
    completedItems.appendChild(currItem);
}
/**
 * Displays ToDoItem on the page
 * @param item Item to be displayed
 */
function displayToDoItem(item) {
    var div = document.createElement("div");
    div.onclick = markAsComplete;
    div.innerHTML = '<input type ="checkbox">' + item.title;
    console.log(div);
    // display new div on page
    var displayDiv = document.getElementById("todo");
    displayDiv.appendChild(div);
}
/**
 * Gets todo item from the the user supplied input from the form
 */
function getItem() {
    // get all data from form and wrap in a data object
    // return ToDoItem
    // casting HTML Input Element of document then get the .value
    var title = document.getElementById("title").value;
    var item = new ToDoItem(title);
    var deadline = document.getElementById("deadline").value;
    item.deadline = new Date(deadline);
    item.isComplete = false;
    return item;
}
