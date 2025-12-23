console.log("connected")

var colorBtn = document.getElementById("color-changer");
var titleEl = document.getElementById("title")
console.log(titleEl)
colorBtn.addEventListener("click", function(event){
  document.getElementById("title").classList.replace("text-success", "text-danger");
  var heartIcon = document.createElement("i")
  heartIcon.setAttribute("class", "bi bi-suit-heart-fill" )
  
  titleEl.append(heartIcon)
})