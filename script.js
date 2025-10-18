document.addEventListener("DOMContentLoaded", function () 
  const btnSaiba = document.getElementById("btn-saiba");
  const btnClique = document.getElementById("btn-clique");
  const btnEnviar = document.getElementById("btn-enviar");
  const btnCadastre = document.getElementById("btn-cadastre");
  document.addEventListener("DOMContentLoaded", function () 
  const card = document.getElementById("card1");

  document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("click", function () {
      const inner = card.querySelector(".card-inner");
      inner.classList.toggle("flipped");
    });
  });
});

