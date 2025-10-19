
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

document.addEventListener("DOMContentLoaded", function () 
  const btnSaiba = document.getElementById("btn-saiba");
  const btnClique = document.getElementById("btn-clique");
  const btnEnviar = document.getElementById("btn-enviar");
  const btnCadastre = document.getElementById("btn-cadastre");