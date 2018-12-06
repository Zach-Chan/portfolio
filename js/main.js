console.log("Javascript running");

//smooth scrolling to anchorpoints
//sourced from Joseph Silber: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

//Nav Collapse Function
var menu = document.querySelector("#navLinks");
//   menu.classList.add("hidden");

//Create menu button if Js is available
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