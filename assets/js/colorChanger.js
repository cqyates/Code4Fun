// Color Changing CSS button
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