// *** LIGHTBOX ***

const lightBox = document.querySelector("#lightbox");

lightBox.showModal();

lightBox.close();

document.body.addEventListener("click", function (evt) {
  lightBox.showModal();
  console.log("click");
});
