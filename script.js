document.addEventListener("DOMContentLoaded", function () 
  const btnSaiba = document.getElementById("btn-saiba");
  const btnClique = document.getElementById("btn-clique");
  const btnEnviar = document.getElementById("btn-enviar");
  const btnCadastre = document.getElementById("btn-cadastre");
  document.addEventListener("DOMContentLoaded", function () 
  const card = document.getElementById("card1");

document.addEventListener("DOMContentLoaded", function () {
  const titles = document.querySelectorAll(".card-title");

  titles.forEach(title => {
    title.addEventListener("click", function () {
      const card = title.closest(".card");
      card.classList.toggle("flipped");
    });
  });
});
