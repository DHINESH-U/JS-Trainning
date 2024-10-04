function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    
    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.onclick = function() {
        const newTaskText = prompt("Update your task:", taskItem.textContent);
        if (newTaskText !== null && newTaskText.trim() !== "") {
            taskItem.firstChild.nodeValue = newTaskText;
        }
    };


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
        taskItem.remove();
    };

    
    taskItem.appendChild(updateBtn);
    taskItem.appendChild(deleteBtn);

    
    document.getElementById("taskList").appendChild(taskItem);

    
    taskInput.value = "";
}
