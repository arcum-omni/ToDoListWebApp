/**
 * Represents a single task on a to do list.
 */
class ToDoItem{
    //Fields
    title:string;
    deadline:Date;
    isComplete:boolean;

    //Constructor
    constructor(task:string){
        this.title = task;
    }
}


/* Write Test Code */

let myItem = new ToDoItem("Learn about cookies !@#$%=;");
myItem.isComplete = false;
// October 29th, 2019: Months starts at 0
myItem.deadline = new Date(2019, 9, 29);

// stringify converts any object into a JavaScrip Object Notation (JSON) string format
let strData = JSON.stringify(myItem);
console.log(strData);

// Setting cookie called 'toDoItems' that expires 90 days
Cookies.set("toDoItems", strData, {expires: 90});

/* End Test Code */


window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("form > input[type=button]");
    addBtn.onclick = main;
};


/**
 * 
 */
function main(){
    // get todo item from user
    let item:ToDoItem = getItem();

    // display new todo item on page
    displayToDoItem(item);

    // save todo item
}


/**
 * Move selected task to completed section of the page
 */
function markAsComplete(){
    let currItem = <HTMLDivElement>this;

    let completedItems = document.getElementById("completed");

    completedItems.appendChild(currItem);
}


/**
 * Displays ToDoItem on the page
 * @param item Item to be displayed
 */
function displayToDoItem(item:ToDoItem):void{
    let div = document.createElement("div");
    div.onclick = markAsComplete;

    div.innerHTML = '<input type ="checkbox">' + item.title;

    console.log(div);
    // display new div on page
    let displayDiv = document.getElementById("todo");
    displayDiv.appendChild(div);
}


/**
 * Gets todo item from the the user supplied input from the form
 */
function getItem():ToDoItem{
    // get all data from form and wrap in a data object
    // return ToDoItem
    
    // casting HTML Input Element of document then get the .value
    let title = (<HTMLInputElement>document.getElementById("title")).value;
    let item = new ToDoItem(title);

    let deadline = (<HTMLInputElement>document.getElementById("deadline")).value;
    item.deadline = new Date(deadline);

    item.isComplete = false;

    return item;
}
