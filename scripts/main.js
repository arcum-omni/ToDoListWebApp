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
/* Write Test Code */
var myItem = new ToDoItem("Learn about cookies !@#$%=;");
myItem.isComplete = false;
// October 29th, 2019: Months starts at 0
myItem.deadline = new Date(2019, 9, 29);
// stringify converts any object into a JavaScrip Object Notation (JSON) string format
var strData = JSON.stringify(myItem);
console.log(strData);
// Setting cookie called 'toDoItems' that expires 90 days
Cookies.set("toDoItems", strData, { expires: 90 });
/* End Test Code */
window.onload = function () {
    var addBtn = document.querySelector("form > input[type=button]");
    addBtn.onclick = main;
};
/**
 *
 */
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
