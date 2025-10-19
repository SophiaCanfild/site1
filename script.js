document.addEventListener("DOMContentLoaded", function () 
  const btnSaiba = document.getElementById("btn-saiba");
  const btnClique = document.getElementById("btn-clique");
  const btnEnviar = document.getElementById("btn-enviar");
  const btnCadastre = document.getElementById("btn-cadastre");
 
  document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".card-image");

  images.forEach(image => {
    image.addEventListener("click", function () {
      const card = image.closest(".card");
      card.classList.toggle("flipped");
    });
  });
});
