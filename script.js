
 document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".card-image");

  images.forEach(function(image) {
    image.addEventListener("click", function () {
      const card = image.closest(".card");
      card.classList.toggle("flipped");
    });
  });
});
