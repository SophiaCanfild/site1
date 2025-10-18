document.addEventListener("DOMContentLoaded", function () {
  const btnSaiba = document.getElementById("btn-saiba");
  const btnClique = document.getElementById("btn-clique");
  const btnEnviar = document.getElementById("btn-enviar");
  const btnCadastre = document.getElementById("btn-cadastre");

  [btnSaiba, btnClique, btnEnviar, btnCadastre].forEach(btn => {
    if (!btn) return;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Botão clicado:", btn.id);
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("click", function () {
      card.classList.toggle("flipped");
    });
  });
});


