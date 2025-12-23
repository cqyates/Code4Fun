// for css section

var colorBtn = document.getElementById('color-changer');
var titleEl = document.getElementById('title');
colorBtn.addEventListener('click', function (event) {
  document
    .getElementById('title')
    .classList.replace('text-success', 'text-danger');
  var heartIcon = document.createElement('i');
  heartIcon.setAttribute('class', 'bi bi-suit-heart-fill');

  titleEl.append(heartIcon);
});

// for to-do list section
const submitBtn = document.getElementById('add-task'); //works
const listContainer = document.querySelector('.list-container');
const taskList = document.getElementById('task-list');
const taskArray = JSON.parse(localStorage.getItem('task-array')) || []; //works
var clearList = document.createElement('i');
clearList.setAttribute('class', 'bi bi-trash');
clearList.setAttribute('id', 'delete-all');
clearList.setAttribute('type', 'button');

listContainer.append(clearList);
clearList.addEventListener('click', function () {
  localStorage.removeItem('task-array');
  taskList.innerHTML =""
});
//works with correct array
const setLocalStorage = (arr) => {
  localStorage.setItem('task-array', JSON.stringify(arr));
  buildList();
};
const buildList = () => {
  listContainer.classList.remove('hide');
  taskList.innerHTML = '';
  for (var i = 0; i < taskArray.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = taskArray[i];
    taskList.append(listItem);
  }
};

submitBtn.addEventListener('click', function () {
  var taskName = this.previousElementSibling.value;
  taskArray.push(taskName);
  document.getElementById("task-name").value = ""
  setLocalStorage(taskArray);
  return;
});

// var taskList = document.getElementById("task-list");
// const setTaskList = (arr) => {
//   taskList.innerHTML = ""
//   console.log(arr)
//   for (var i = 0; i < arr.length; i++){
//     console.log(arr[i])
//     var deleteBtn = document.createElement("i")
//     var listItem = document.createElement("li")
//     listItem.textContent = arr[i]
//     deleteBtn.value = arr[i]
//     deleteBtn.setAttribute("class", "bi bi-trash")
//     deleteBtn.addEventListener("click", function(event){
//       var targetEvt = event.target.value;
//       console.log(targetEvt)

//     })

//     listItem.append(deleteBtn)
//     taskList.append(listItem)
//   }
// }
// //items added to list successfully
// submitBtn.addEventListener("click", function(event) {
//

//   taskArray.push(taskName)
//   localStorage.setItem("taskArray", JSON.stringify(taskArray))

//   setTaskList(taskArray)

// })
buildList();
