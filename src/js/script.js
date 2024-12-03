// *** LIGHTBOX ***

const lightBox = document.querySelector("#lightbox");

document.addEventListener("click", function (e) {
  if (lightBox.open) {
    lightBox.close();
  } else {
    lightBox.showModal();
  }
});
