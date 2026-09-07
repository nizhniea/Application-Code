
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
    createTask(taskArea);
});








