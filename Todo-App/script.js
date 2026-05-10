const addBtn =
document.getElementById("addBtn");

const taskInput =
document.getElementById("taskInput");

const taskList =
document.getElementById("taskList");

/* LOAD TASKS */

window.onload = function(){

  let tasks =
  JSON.parse(localStorage.getItem("tasks"))
  || [];

  tasks.forEach(function(task){

    createTask(task);

  });
};

/* ADD TASK */

addBtn.addEventListener("click", function(){

  const task =
  taskInput.value.trim();

  if(task === ""){

    alert("Enter Task");

    return;
  }

  createTask(task);

  saveTask(task);

  taskInput.value = "";
});

/* CREATE TASK */

function createTask(task){

  const li =
  document.createElement("li");

  li.innerHTML = `
    ${task}
    <button class="deleteBtn">
      Delete
    </button>
  `;

  taskList.appendChild(li);

  li.querySelector(".deleteBtn")
  .addEventListener("click", function(){

    li.remove();

    deleteTask(task);

  });
}

/* SAVE TASK */

function saveTask(task){

  let tasks =
  JSON.parse(localStorage.getItem("tasks"))
  || [];

  tasks.push(task);

  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  );
}

/* DELETE TASK */

function deleteTask(task){

  let tasks =
  JSON.parse(localStorage.getItem("tasks"))
  || [];

  tasks = tasks.filter(function(t){

    return t !== task;

  });

  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  );
}