console.log("project page js running");

// PROGRESS BAR
var sections = document.querySelectorAll(".project-header");
var progressThreshold = window.screen.height/2;
var progressSections = document.querySelectorAll(".progress-section");

//SMOOTH SCROLLING TO ANCHOR POINTS
//sourced from Joseph Silber: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: "start"
    });
  });
});

//FILL IN PROGRESS BAR AS PAGE IS SCROLLED
window.addEventListener("scroll", function(){
  for(var i=0; i<sections.length; i++){
    var rect = sections[i].getBoundingClientRect();
    if(rect.top <= progressThreshold) {
      progressSections[i].classList.add('filled');
    } else {
      progressSections[i].classList.remove('filled');
    }
  }
});

; (function () {
  'use strict';
  var galleries = document.querySelectorAll("div.gallery");
  for (var i = 0; i < galleries.length; i++) {
    Gallery.init(galleries[i]);
  }
}());


