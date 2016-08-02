// Shuffles project thumbnail order on the homepage.
function shuffle() {
  var ul = document.querySelector('.project-list');
  for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
  }
}

// Wait until everything is ready to be shuffled.
window.onload = function() {
  shuffle();
}
