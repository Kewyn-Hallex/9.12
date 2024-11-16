window.addEventListener("scroll", function () {
    let header = document.querySelector("#header3");
    header.classList.toggle("rolagem", this.window.scrollY > 0);
  });