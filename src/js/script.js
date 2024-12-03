// *** LIGHTBOX ***

const lightBox = document.querySelector("#lightbox");
const image = document.querySelector("#lightbox img");

document.addEventListener("click", function (e) {
  if (lightBox.open) {
    lightBox.close();
  } else {
    lightBox.showModal();
  }
  if (e.target.matches("[data-full-img]")) {
    image.src = e.target.dataset.fullImg;
  }
});
