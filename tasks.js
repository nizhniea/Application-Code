
const taskAreas = document.querySelectorAll(".tasks");


function createTask(taskArea) {

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

    input.addEventListener("keydown", function(event){
        if (event.key === "Enter"){
            createTask(taskArea);
            console.log("Enter Pressed");

        }
    });

    task.append(checkBox);
    task.append(input);

    taskArea.append(task);
}


taskAreas.forEach(function(taskArea){
    createTask(taskArea);
});








