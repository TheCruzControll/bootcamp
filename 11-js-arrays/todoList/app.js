var task = prompt("What would you like to do?");
var list = [];

while (task !== "quit") {
    if (task === "new") {
        newTodo();
    } else if (task === "list") {
        listTodo();
    } else if (task === "delete") {
        deleteTodo();
    }
    var task = prompt("What would you like to do?");
}

function newTodo() {
    var addition = prompt("Enter a new todo");
    list.push(addition);
    console.log(addition + " added to the list");
}

function listTodo() {
    console.log("**********");
    list.forEach(function(todo) {
        console.log("" + list.indexOf(todo) + ": " + todo);
    });
    console.log("**********");
}

function deleteTodo() {
    var deleted = prompt("Enter Index of todo to delete");
    console.log(list[deleted] + " removed");
    list.splice(deleted, 1);
}
