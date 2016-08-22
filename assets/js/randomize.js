/* Shuffles project thumbnail order.
*/
function shuffle() {
  var ul = document.querySelector('.project-list');
  for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
  }
}

window.onload = function() {
  shuffle();
}
