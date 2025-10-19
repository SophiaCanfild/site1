document.addEventListener("DOMContentLoaded", function () 
  const btnSaiba = document.getElementById("btn-saiba");
  const btnClique = document.getElementById("btn-clique");
  const btnEnviar = document.getElementById("btn-enviar");
  const btnCadastre = document.getElementById("btn-cadastre");
  document.addEventListener("DOMContentLoaded", function () 
  const card = document.getElementById("card1");

document.addEventListener("DOMContentLoaded", function () {
  const labels = document.querySelectorAll(".card-label");

  labels.forEach(label => {
    label.addEventListener("click", function (event) {
      const card = label.closest(".card");
      card.classList.toggle("flipped");
      event.stopPropagation(); // evita conflito com outros cliques
    });
  });
});
