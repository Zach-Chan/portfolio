console.log("Javascript running");

//SMOOTH SCROLLING TO ANCHOR POINTS
//sourced from Joseph Silber: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();

//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });

//NAV COLLAPSE FUNCTION
var menu = document.querySelector("#navLinks");
//   menu.classList.add("hidden");

//CREATE MENU BUTTON IF JS IS LOADED
var menuToggle = document.createElement("button");
menuToggle.classList.add("menu-button");
// menuToggle.classList.add("hidden");
menuToggle.setAttribute("id", "menu-toggle");
menuToggle.innerHTML = "Menu";

var nav = document.querySelector("nav");
//   nav.insertBefore(menuToggle, menu);

menuToggle.addEventListener("click",
  function navMenuClick() {
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      menu.setAttribute("aria-hidden", "false");
    } else {
      menu.classList.add("hidden");
      menu.setAttribute("aria-hidden", "true");
    }
  }
);

// ----------------------------
// OPEN AND CLOSE ABOUT SECTION
// ----------------------------
var aboutBtn = document.getElementById("about-btn");
var closeAboutBtn = document.getElementById("about-back-btn");
var aboutSection = document.getElementById("about-container");

aboutBtn.addEventListener("click", () => {
  console.log(aboutSection);
  aboutSection.classList.remove("clipped");
  // aboutSection.classList.remove("clipped-inactive");
  // aboutSection.classList.add("clipped-active");
})

closeAboutBtn.addEventListener("click", () => {
  console.log(aboutSection);
  aboutSection.classList.add("clipped");
  // aboutSection.classList.remove("clipped-active");
  // aboutSection.classList.add("clipped-inactive");
})