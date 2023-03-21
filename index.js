const addTask = document.getElementById("add-task");
const taskWrapper = document.getElementById("task-wrapper");
const inputTask = document.getElementById("input-task");

addTask.addEventListener("click", function(){

    let task = document.createElement("div");
    task.classList.add("task");

    let li = document.createElement("li");
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value === ""){
        alert("Please enter a task");
    }else{
        taskWrapper.appendChild(task);
    }

})