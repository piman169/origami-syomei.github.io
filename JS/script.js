function toggleNav() {
  let header = document.getElementById('header');
  let hamburger = document.getElementById('hamburger');

  hamburger.addEventListener('click', function() {
    header.classList.toggle('nav-open');
  });
};
toggleNav();
// slider
var i = 0;
var images = [];
var time =  20000;

images[0] = 'img/line_906499211211108.jpg';
images[1] = 'img/line_906503362656210.jpg';
images[2] = 'img/line_906500373070065.jpg';

function changeImg(){
  document.slide.src = images[i];

  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;

// ギャラリー
var current = document.querySelector('#current');
var imgs = document.querySelectorAll('.imgs img');

imgs.forEach(img =>
  img.addEventListener('click', e =>
  (current.src = e.target.src))
);
