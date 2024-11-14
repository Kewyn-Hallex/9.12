window.addEventListener("scroll", function () {
    let header = document.querySelector("#header2");
    header.classList.toggle("rolagem", this.window.scrollY > 0);
  });