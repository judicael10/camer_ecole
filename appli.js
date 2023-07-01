hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active")
}




const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach(button => {
  button.addEventListener('click', function() {
    const photo = this.parentNode;
    const likeCount = photo.querySelector('.like-count');
    
    if (!photo.classList.contains('liked')) {
      photo.classList.add('liked');
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
    }
  });
});

document.getElementById("search").addEventListener("keyup", function() {
  var input = this.value.toLowerCase();
  var items = document.querySelectorAll("like");
  
  items.forEach(function(item) {
    if (item.textContent.toLowerCase().indexOf(input) !== -1) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });
});