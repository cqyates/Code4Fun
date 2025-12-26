// struggling with the order of firing functions
// the list crosses out but changes on submitting new item.
// the delete function will work and then break when I change something unrelated, so that's weird
// walking away for clarity
//solution - must save as an array of objects with a status that starts as "to-do" and changes to "completed"

const submitBtn = document.getElementById('add-task');
const listContainer = document.querySelector('.list-container');
const taskList = document.getElementById('task-list');

var clearList = document.createElement('i');
clearList.setAttribute('class', 'bi bi-trash');
clearList.setAttribute('id', 'delete-all');
clearList.setAttribute('type', 'button');

listContainer.append(clearList);
clearList.addEventListener('click', function () {
  localStorage.removeItem('task-array');
  taskList.innerHTML = '';

});

// const setLocalStorage = (arr) => {
//   localStorage.setItem('task-array', JSON.stringify(arr));

// };

const getOldTasks = () => {
  return JSON.parse(localStorage.getItem('task-array')) || [];
};
const buildList = () => {
  taskList.innerHTML = "";
  const listArray = getOldTasks();
  listArray.forEach(({ name, taskStatus }) => {
    var liEl = document.createElement('li');
    liEl.textContent = name;
    liEl.setAttribute('value', name);
    liEl.setAttribute('data-status', taskStatus);
    liEl.addEventListener('click', function (evt) {
      const clickedTask = evt.target.innerText;
      changeStatus(clickedTask);
    });

    liEl.setAttribute('class', 'todo-item');
    taskList.append(liEl);
  });
};
const changeStatus = (taskToChange) => {
  const taskArray = getOldTasks();
  const completedTask = taskArray.find((task) => task.name === taskToChange);
  completedTask.taskStatus = 'completed';
  localStorage.setItem("task-array", JSON.stringify(taskArray));
  buildList();
};
submitBtn.addEventListener('click', function () {
  var taskName = this.previousElementSibling.value;
  var task = {
    name: taskName,
    taskStatus: 'to-do',
  };
  document.getElementById('task-name').value = '';
  const taskArray = getOldTasks();
  taskArray.push(task);
  localStorage.setItem('task-array', JSON.stringify(taskArray));
  buildList();
});
buildList()
