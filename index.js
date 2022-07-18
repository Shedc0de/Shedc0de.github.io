var navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("window_scroll", window.scrollY > 0);

});
