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
var myItem = new ToDoItem("graduate");
