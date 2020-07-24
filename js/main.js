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

// -----------------------
// PLACE CURRENT DATE YEAR
// -----------------------
document.getElementById("year").innerHTML = new Date().getFullYear();;

// ----------------------------
// OPEN AND CLOSE ABOUT SECTION
// ----------------------------
var aboutBtns = document.querySelectorAll("a.about-btn");
var closeAboutBtn = document.getElementById("about-back-btn");
var aboutSection = document.getElementById("about-container");

aboutBtns.forEach(el => {
  el.addEventListener("click", () => {
    console.log(aboutSection);
    aboutSection.classList.remove("clipped");
  })
});

closeAboutBtn.addEventListener("click", () => {
  console.log(aboutSection);
  aboutSection.classList.add("clipped");
})