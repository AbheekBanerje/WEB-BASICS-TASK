var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Store data
var todos = [];
var editId = null;
// Target elements
var form = document.getElementById("form");
var input = document.getElementById("inputValue");
var listItems = document.getElementById("items");
// Add / Update Task
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var value = input.value.trim();
    if (value === "")
        return;
    if (editId) {
        // Update existing task
        todos = todos.map(function (todo) {
            return todo.id === editId ? __assign(__assign({}, todo), { task: value }) : todo;
        });
        editId = null;
    }
    else {
        // Add new task
        var newTask = {
            id: Date.now().toString(),
            task: value,
        };
        todos.push(newTask);
    }
    input.value = "";
    render();
});
// Render Tasks
function render() {
    listItems.innerHTML = "";
    todos.forEach(function (todo) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.textContent = todo.task;
        // Edit Button
        var editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";
        editBtn.addEventListener("click", function () {
            editTodo(todo.id);
        });
        // Delete Button
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", function () {
            deleteTodo(todo.id);
        });
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        listItems.appendChild(li);
    });
}
// Delete Task
function deleteTodo(id) {
    todos = todos.filter(function (todo) { return todo.id !== id; });
    render();
}
// Edit Task
function editTodo(id) {
    var selectedTodo = todos.find(function (todo) { return todo.id === id; });
    if (!selectedTodo)
        return;
    input.value = selectedTodo.task;
    editId = id;
}
