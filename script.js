//Nav
const hamburger = document.getElementById("hamburger");
const close_nav_button = document.getElementById("close_nav_btn");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("openNav");
});

function handleOutsideClick(event) {
  if (nav && !hamburger.contains(event.target) && !nav.contains(event.target)) {
    nav.classList.remove("openNav");
  }
}

document.addEventListener("mousedown", handleOutsideClick);

let scrollTopButton = null;

function scrollToTop() {
  window.scrollTo(0, 0);
}

function showBackTopButton() {
  if (!scrollTopButton && window.scrollY > 500) {
    scrollTopButton = document.createElement("a");
    scrollTopButton.classList.add("scroll_top_button");
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-chevron-up");
    scrollTopButton.appendChild(icon);
    document.body.append(scrollTopButton);
    scrollTopButton.addEventListener("click", scrollToTop);
  } else if (scrollTopButton && window.scrollY < 500) {
    document.body.removeChild(scrollTopButton);
    scrollTopButton = null;
  }
}

if (!scrollTopButton) {
  window.addEventListener("scroll", showBackTopButton);
}
