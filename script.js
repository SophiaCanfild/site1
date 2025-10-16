// script.js — interações básicas (botões sem redirecionamento)
document.addEventListener("DOMContentLoaded", function () {
  const btnSaiba = document.getElementById("btn-saiba");
  const btnClique = document.getElementById("btn-clique");
  const btnEnviar = document.getElementById("btn-enviar");
  const btnCadastre = document.getElementById("btn-cadastre");

  // apenas placeholders - impedem comportamento padrão e mostram mensagem no console
  [btnSaiba, btnClique, btnEnviar, btnCadastre].forEach(btn => {
    if (!btn) return;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Botão clicado:", btn.id);
      // aqui você pode adicionar a navegação futuramente, por exemplo:
      // window.location.href = '/pagina-destino';
    });
  });
});

