interface TODO {
    id: string;
    task: string;
}

// Store data
let todos: TODO[] = [];
let editId: string | null = null;

// Target elements
let form = document.getElementById("form") as HTMLFormElement;
let input = document.getElementById("inputValue") as HTMLInputElement;
let listItems = document.getElementById("items") as HTMLUListElement;

// Add / Update Task
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let value = input.value.trim();
    if (value === "") return;

    if (editId) {
        // Update existing task
        todos = todos.map((todo) =>
            todo.id === editId ? { ...todo, task: value } : todo
        );
        editId = null;
    } else {
        // Add new task
        let newTask: TODO = {
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

    todos.forEach((todo) => {
        let li = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = todo.task;

        // Edit Button
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";

        editBtn.addEventListener("click", () => {
            editTodo(todo.id);
        });

        // Delete Button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", () => {
            deleteTodo(todo.id);
        });

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        listItems.appendChild(li);
    });
}

// Delete Task
function deleteTodo(id: string) {
    todos = todos.filter((todo) => todo.id !== id);
    render();
}

// Edit Task
function editTodo(id: string) {
    let selectedTodo = todos.find((todo) => todo.id === id);
    if (!selectedTodo) return;

    input.value = selectedTodo.task;
    editId = id;
}