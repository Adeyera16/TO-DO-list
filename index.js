const addTask = document.getElementById('add-task');
const taskWrapper = document.getElementById('task-wrapper');
const inputTask = document.getElementById('input-task');

addTask.addEventListener('click', function(){
    if(inputTask.value === ""){
        alert("Please enter a task");
    } else {
        let paragraph = document.createElement('p');
        paragraph.classList.add("paragraph-style");
        paragraph.innerText = inputTask.value;
        inputTask.value = "";
        paragraph.addEventListener("click", function(){
            paragraph.style.textDecoration = "line-through";
        });
        paragraph.addEventListener('dblclick', function(){
            taskWrapper.removeChild(paragraph);
        });
        taskWrapper.appendChild(paragraph);
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(paragraph.innerText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});