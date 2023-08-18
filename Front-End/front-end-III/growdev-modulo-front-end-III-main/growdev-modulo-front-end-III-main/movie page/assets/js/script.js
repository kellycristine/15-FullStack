boxButton = document.querySelector("#boxButton");
marioOut = document.querySelector(".marioOut");
bullet = document.querySelector(".bullet");
footer = document.querySelector("footer");
main = document.querySelector("main");
cinema = document.querySelector(".cinema")

function fly() {
  boxButton.style.animation = "fly 2s ease-in-out";
}

boxButton.addEventListener("click", () => {
  boxButton.style.animation = "fly 2s ease-in-out";
  marioOut.style.animation = "opacity 2s";
  bullet.style.animation = "opacity 2s";
  footer.style.animation = "opacity 2s";
  cinema.style.animation = "opacity 2s";

  setTimeout(() => {
    boxButton.style.display = "none";
    marioOut.style.display = "none";
    bullet.style.display = "none";
    footer.style.display = "none";
    cinema.style.display = "none";

    main.innerHTML += `<iframe
    class="trailer"
    src="./assets/images/trailer.mp4"
    frameborder="0"
  ></iframe>`;
  }, 2000);
});
