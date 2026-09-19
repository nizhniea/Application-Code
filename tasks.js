
const taskAreas = document.querySelectorAll(".tasks");

const savedTasks = JSON.parse(localStorage.getItem("tasks")) || {};
const tasks = {...savedTasks};
console.log(savedTasks.monday);

const clearbutton = document.querySelector("#ClearTasks");



function createTask(taskArea, taskData = { text: "", checked: false }) {


    const task = document.createElement("div");
    task.classList.add("task");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = taskData.checked;

    
    checkBox.addEventListener("change", function(){
        console.log("Checkbox changed");
        const task = checkBox.parentElement;
        const input = task.querySelector('input[type="text"]');



        if (checkBox.checked) {
            input.style.textDecoration = "line-through";
        } else {
            input.style.textDecoration = "none";
        }

        getTasks(taskArea);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });


    const input = document.createElement("input");
    input.type = "text";
    input.value = taskData.text;

    if (checkBox.checked) {
        input.style.textDecoration = "line-through";
    }

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
        savedDay.forEach(function(taskData){
            createTask(taskArea, taskData);
        });

    } else {
        createTask(taskArea);
    };
});


function getTasks(taskArea) {
    const day = taskArea.dataset.day;
    const taskrows = taskArea.querySelectorAll(".task");
    const taskList = [];

    taskrows.forEach(function(task) {
        const input = task.querySelector('input[type="text"]');
        const checkBox = task.querySelector('input[type="checkbox"]');

        const taskdata = {
            text: input.value,
            checked: checkBox.checked
        };

        taskList.push(taskdata);
    });

    tasks[day] = taskList;

    return taskList;


}



console.log(getTasks(taskAreas[0]));




clearbutton.addEventListener("click", () => {
    console.log("cb clicked");
    localStorage.clear("tasks");

    taskAreas.forEach(function(taskArea){
        taskArea.innerHTML = "";
        createTask(taskArea);
    });
});
