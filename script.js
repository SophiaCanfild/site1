
 document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".card-image");

  images.forEach(image => {
    image.addEventListener("click", function () {
      const card = image.closest(".card");

      // Adiciona a classe para girar
      card.classList.add("flipped");

      // Remove a classe após 3 segundos
      setTimeout(() => {
        card.classList.remove("flipped");
      }, 3000);
    });
  });
});

