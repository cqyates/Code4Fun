
// struggling with the order of firing functions
// the list crosses out but changes on submitting new item.
// the delete function will work and then break when I change something unrelated, so that's weird
// walking away for clarity

const submitBtn = document.getElementById('add-task');
const listContainer = document.querySelector('.list-container');
const taskList = document.getElementById('task-list');

const taskArray = JSON.parse(localStorage.getItem('task-array')) || [];
var clearList = document.createElement('i');
clearList.setAttribute('class', 'bi bi-trash');
clearList.setAttribute('id', 'delete-all');
clearList.setAttribute('type', 'button');

listContainer.append(clearList);
clearList.addEventListener('click', function () {
  localStorage.removeItem('task-array');
  taskList.innerHTML = '';

});

const setLocalStorage = (arr) => {
  localStorage.setItem('task-array', JSON.stringify(arr));

};
const buildList = () => {
  taskList.addEventListener("click", function(event){
   
    if (event.target && event.target.classList.contains('todo-item')) {
      // Toggle the 'completed' class on the clicked item
      event.target.classList.add('completed');
    }
  })
  taskList.innerHTML = '';
  for (var i = 0; i < taskArray.length; i++) {
    var listItem = document.createElement('li');
    listItem.setAttribute("class", "todo-item")
    listItem.textContent = taskArray[i];
    taskList.append(listItem);
  }
};
submitBtn.addEventListener('click', function () {
  var taskName = this.previousElementSibling.value;
  taskArray.push(taskName);
  document.getElementById('task-name').value = '';
  setLocalStorage(taskArray)
  buildList()
});


