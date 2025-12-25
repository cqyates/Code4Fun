// struggling with the order of firing functions
// the list crosses out but changes on submitting new item.
// the delete function will work and then break when I change something unrelated, so that's weird
// walking away for clarity
//solution - must save as an array of objects with a status that starts as "to-do" and changes to "completed"

const submitBtn = document.getElementById('add-task');
const listContainer = document.querySelector('.list-container');
const taskList = document.getElementById('task-list');

// on submit button click, fire a function that creates and object with the task name and the status which defaults to "to-do"
// save that object to the taskList array and save to localstorage.

// var clearList = document.createElement('i');
// clearList.setAttribute('class', 'bi bi-trash');
// clearList.setAttribute('id', 'delete-all');
// clearList.setAttribute('type', 'button');

// listContainer.append(clearList);
// clearList.addEventListener('click', function () {
//   localStorage.removeItem('task-array');
//   taskList.innerHTML = '';

// });

// const setLocalStorage = (arr) => {
//   localStorage.setItem('task-array', JSON.stringify(arr));

// };

const getOldTasks = () => {
  return JSON.parse(localStorage.getItem('task-array')) || [];
};
const buildList = () => {
  const listArray = getOldTasks();
  listArray.forEach(({ name, status }) => {
    var liEl = document.createElement('li');
    liEl.textContent = name;
    if (status === 'completed') {
      liEl.style.textDecoration = 'line-through';
    }
    liEl.setAttribute("class", "todo-item")
    taskList.append(liEl);
  });
};
const changeStatus = () => {
  const oldTaskArray = getOldTasks()
  console.log(oldTaskArray);
  // tasks:
  // get Old Array.  
  //Get value of li with this click
  //use a filter method to find the correct line to change to completed
  //save new list to localstorage.
}
submitBtn.addEventListener('click', function () {
  var taskName = this.previousElementSibling.value;
  var task = {
    name: taskName,
    status: 'to-do',
  };
  document.getElementById('task-name').value = '';
  const taskArray = getOldTasks();
  taskArray.push(task);
  localStorage.setItem('task-array', JSON.stringify(taskArray));
  buildList();
  //upcoming problem.  I don't think you can update a specific key/value pair in LS.
  // would need to "write over" the list and if I go that direction I have to make sure that the old status persists through rewrites
});
