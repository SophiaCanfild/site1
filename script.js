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
  const icones = document.querySelectorAll(".social-icons img");

  icones.forEach(img => {
    img.addEventListener("click", function () {
      
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
// ===============================
// FORMULÁRIO DE CONTATO - MENSAGEM DE SUCESSO
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const botaoEnviar = document.getElementById("btn-enviar");

  if (form && botaoEnviar) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Impede o envio real do formulário

      // Cria ou reutiliza a mensagem de sucesso
      let msgSucesso = document.querySelector(".msg-sucesso");
      if (!msgSucesso) {
        msgSucesso = document.createElement("p");
        msgSucesso.className = "msg-sucesso";
        form.appendChild(msgSucesso);
      }

      msgSucesso.textContent = "✅ Mensagem enviada com sucesso!";
      msgSucesso.classList.add("mostrar");

      // Limpa os campos após 1s
      setTimeout(() => {
        form.reset();
      }, 1000);

      // Esconde a mensagem após 3s
      setTimeout(() => {
        msgSucesso.classList.remove("mostrar");
      }, 3000);
    });
  }
});
// ====== LOGIN ======
const formLogin = document.getElementById("form-login");
const msgLogin = document.getElementById("mensagem-login");

// Exemplo simples
const usuarioValido = "admin";
const senhaValida = "1234";

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (usuario === usuarioValido && senha === senhaValida) {
    mostrarMensagem(msgLogin, "Login realizado com sucesso! ✅", "#a9e4a9");
  } else {
    mostrarMensagem(msgLogin, "Usuário ou senha incorretos ❌", "#ffaaaa");
  }

  formLogin.reset();
});

// ====== CADASTRO DE E-MAIL ======
const formEmail = document.getElementById("form-email");
const msgEmail = document.getElementById("mensagem-sucesso");

formEmail.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();

  if (email === "" || !email.includes("@")) {
    mostrarMensagem(msgEmail, "Por favor, insira um e-mail válido.", "#ffaaaa");
    return;
  }

  mostrarMensagem(msgEmail, "E-mail cadastrado com sucesso! ✅", "#a9e4a9");
  formEmail.reset();
});

// ====== Função genérica ======
function mostrarMensagem(elemento, texto, cor) {
  elemento.textContent = texto;
  elemento.style.color = cor;
  elemento.classList.add("visivel");

  clearTimeout(elemento.timeout);
  elemento.timeout = setTimeout(() => {
    elemento.classList.remove("visivel");
  }, 4000);
}
