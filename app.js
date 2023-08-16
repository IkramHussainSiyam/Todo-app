const addTodo = document.querySelector("#addTodo");
const taskInput = document.querySelector(".taskInput");
const todolist = document.querySelector(".todolist");
const deleteAll = document.querySelector("#deleteAll");
const totalTodo = document.querySelector("#totalTodo");
const countCompleted = document.querySelector("#countCompleted");

addTodo.addEventListener("click", function () {
  let taskInputValue = taskInput.value;
  if (taskInputValue === "") {
    taskInputValue = "";
  } else {
    let li = document.createElement("li");
    li.innerHTML = `
    <div>
      <div class="checkbox">
        <div class="todoDone"></div>
      </div>
      <span class="task">${taskInputValue}</span>
    </div>
    <img src="./assets/trash.svg" alt="delete icon" class="deleteTodo" />
  `;
    todolist.appendChild(li);
  }
  taskInput.value = "";
  totalTodo.innerText = todolist.childElementCount;
  updateCompletedCount();
});

todolist.addEventListener("click", function (e) {
  if (e.target.className.includes("todoDone")) {
    e.target.parentElement.classList.toggle("checked");
    updateCompletedCount();
  } else if (e.target.className.includes("task")) {
    e.target.previousElementSibling.classList.toggle("checked");
    updateCompletedCount();
  } else if (e.target.className.includes("deleteTodo")) {
    e.target.parentElement.remove();
    totalTodo.innerText = todolist.childElementCount;
    updateCompletedCount();
  }
});

function updateCompletedCount() {
  const count = document.querySelectorAll(".todolist .checked").length;
  countCompleted.innerText = count;
}

deleteAll.addEventListener("click", function () {
  todolist.innerHTML = "";
  totalTodo.innerText = todolist.childElementCount;
  updateCompletedCount();
});
