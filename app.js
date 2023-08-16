const addTodo = document.querySelector("#addTodo");
const taskInput = document.querySelector(".taskInput");
const todolist = document.querySelector(".todolist");

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
});

todolist.addEventListener("click", function (e) {
  if (e.target.className.includes("todoDone")) {
    e.target.parentElement.classList.toggle("checked");
  } else if (e.target.className.includes("task")) {
    e.target.previousElementSibling.classList.toggle("checked");
  } else if (e.target.className.includes("deleteTodo")) {
    e.target.parentElement.remove();
  }
});
