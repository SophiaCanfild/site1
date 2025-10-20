// =====================================
// CORREÇÃO COMPLETA DO SEU CÓDIGO JS
// =====================================

// Corrigido: código de "flip" (aparentemente um card animado)
const cardElement = document.querySelector('.card-in');
if (cardElement) {
  cardElement.addEventListener('click', () => {
    const inner = cardElement.querySelector('.inner');
    if (inner) inner.classList.toggle('fl');
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const btnSaiba = document.getElementById("btn-saiba");
  const btnClique = document.getElementById("btn-clique");
  const btnEnviar = document.getElementById("btn-enviar");
  const btnCadastre = document.getElementById("btn-cadastre");
  // (mantido sem alterações, caso use em outro trecho)
});

// ===============================
// REDES SOCIAIS (ICONS CLICK)
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  // Corrigido seletor: precisa de "." antes de 'social-icons'
  const icones = document.querySelectorAll(".social-icons img");

  icones.forEach(img => {
    img.addEventListener("click", function () {
      // Pega o alt ou o nome do arquivo como fallback
      const nome = img.alt ? img.alt.toLowerCase() : img.src.toLowerCase();
      let url = "";

      if (nome.includes("insta")) {
        url = "https://www.instagram.com/colegioszymanski?igsh=MWIwODh5cGh0NTBoaA==";
      } else if (nome.includes("face")) {
        url = "https://www.facebook.com/share/19kvC9XmbA/";
      } else if (nome.includes("whats")) {
        url = "https://api.whatsapp.com/send?phone=%2B554136424089";
      }

      if (url) {
        window.open(url, "_blank"); // abre em nova aba
      } else {
        console.warn("Não foi possível identificar o link do ícone:", img);
      }
    });
  });
});

// ===============================
// ANIMAÇÃO DE CLIQUE NOS BOTÕES
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os botões mencionados (se existirem)
  const botoes = [
    document.getElementById("btn-saiba"),
    document.getElementById("btn-clique"),
    document.getElementById("btn-enviar"),
    document.getElementById("btn-cadastre")
  ].filter(Boolean); // remove os nulos

  // Cria uma animação CSS temporária
  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      botao.classList.add("animar-botao");
      setTimeout(() => {
        botao.classList.remove("animar-botao");
      }, 400); // duração da animação
    });
  });
});
