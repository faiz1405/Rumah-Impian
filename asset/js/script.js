const navbar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 1) {
    console.log(window.scrollY);
    navbar.classList.replace("bg-transparent", "nav-scroll");
  } else {
    navbar.classList.replace("nav-scroll", "bg-transparent");
  }
});
