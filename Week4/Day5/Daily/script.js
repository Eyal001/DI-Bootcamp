const tasks = [];
const button = document.getElementById("button");
const taskUl = document.getElementById("tasks");
const taskInput = document.getElementById("myinput");
let taskIdCounter = 0;
function addTask() {
  const task = taskInput.value;
  if (task.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  const newTaskObj = {
    task_id: taskIdCounter,
    text: task,
    done: false,
  };

  tasks.push(newTaskObj);

  const newTask = document.createElement("li");
  newTask.setAttribute("data-task-id", taskIdCounter);

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.onclick = () => {
    taskDone(newTaskObj, checkBox.checked);
  };

  const taskValue = document.createElement("label");
  taskValue.textContent = task;
  taskValue.style.marginLeft = "10px";

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-times"></i>';
  deleteButton.onclick = () => {
    deleteTask(newTaskObj, newTask);
  };

  newTask.appendChild(deleteButton);
  newTask.appendChild(checkBox);
  newTask.appendChild(taskValue);
  taskUl.appendChild(newTask);

  taskInput.value = "";

  taskIdCounter++;
}

function taskDone(taskObj, isChecked) {
  taskObj.done = isChecked;

  const taskElem = document.querySelector(
    `[data-task-id="${taskObj.task_id}"]`
  );
  if (isChecked) {
    taskElem.style.color = "red";
    taskElem.style.textDecoration = "line-through";
    taskElem.style.textDecorationColor = "red";
  } else {
    taskElem.style.color = "";
    taskElem.style.textDecoration = "";
    taskElem.style.textDecorationColor = "";
  }
}

function deleteTask(taskObj, taskElement) {
  const index = tasks.findIndex((task) => task.task_id === taskObj.task_id);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
  taskElement.remove();
}
button.addEventListener("click", addTask);
