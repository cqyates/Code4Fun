console.log("connected")

var colorBtn = document.getElementById("color-changer");

colorBtn.addEventListener("click", function(event){
  document.getElementById("title").classList.replace("text-success", "text-danger")
})