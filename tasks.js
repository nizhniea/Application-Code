
const taskAreas = document.querySelectorAll(".tasks");

const savedTasks = JSON.parse(localStorage.getItem("tasks")) || {};
const tasks = {...savedTasks};
console.log(savedTasks.monday);

function createTask(taskArea, taskText = "") {


    const task = document.createElement("div");
    task.classList.add("task");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    checkBox.addEventListener("change", function(){
        console.log("Checkbox changed");
        const task = checkBox.parentElement;
        const input = task.querySelector('input[type="text"]');



        if (checkBox.checked) {
            input.style.textDecoration = "line-through";
        } else {
            input.style.textDecoration = "none";
        }
    });


    const input = document.createElement("input");
    input.type = "text";
    input.value = taskText;
    input.addEventListener("input", function() {
    getTasks(taskArea);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    input.addEventListener("keydown", function(event){
        if (event.key === "Enter"){
            const newInput = createTask(taskArea);
            newInput.focus();
            console.log("Enter Pressed");

        }

        if (event.key === "Delete" && input.value === "" && taskArea.children.length > 1) {
            task.remove();

        }
    });

    task.append(checkBox);
    task.append(input);

    taskArea.append(task);
    return input;
}


taskAreas.forEach(function(taskArea){
    const day = taskArea.dataset.day;
    const savedDay = savedTasks[day];
    
    if (savedDay && savedDay.length > 0) {
        savedDay.forEach(function(taskText){
            createTask(taskArea, taskText);
        });

    } else {
        createTask(taskArea);
    };
});


function getTasks(taskArea) {
    const day = taskArea.dataset.day;
    const inputs = taskArea.querySelectorAll('input[type="text"]');
    const taskList = [];

    inputs.forEach(function(input) {
        taskList.push(input.value);
    });

    tasks[day] = taskList;

    return taskList;


}



console.log(getTasks(taskAreas[0]));




