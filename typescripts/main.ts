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

let myItem = new ToDoItem("graduate");