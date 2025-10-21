// Código corrigido e robusto: tudo dentro de um único DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // ===============================
  // CARTÕES COM ANIMAÇÃO DE GIRO
  // ===============================
  try {
    const images = document.querySelectorAll(".card-image");
    if (images && images.length) {
      images.forEach(image => {
        image.addEventListener("click", function () {
          const card = image.closest(".card");
          if (!card) return;
          card.classList.add("flipped");
          setTimeout(() => card.classList.remove("flipped"), 10000);
        });
      });
    }
  } catch (err) {
    console.error("Erro no bloco de cartões:", err);
  }

  // ===============================
  // REDES SOCIAIS (ICONS CLICK)
  // ===============================
  try {
    const icones = document.querySelectorAll(".social-icons img");
    if (icones && icones.length) {
      icones.forEach(img => {
        img.addEventListener("click", function () {
          // tenta atributo data-link primeiro (mais confiável), depois alt, depois src
          const dataLink = img.getAttribute("data-link");
          const nome = (img.alt || img.src || "").toLowerCase();
          let url = dataLink || "";

          if (!url) {
            if (nome.includes("insta") || nome.includes("instagram")) {
              url = "https://www.instagram.com/colegioszymanski";
            } else if (nome.includes("face") || nome.includes("facebook")) {
              url = "https://www.facebook.com/share/19kvC9XmbA/";
            } else if (nome.includes("whats") || nome.includes("whatsapp")) {
              url = "https://api.whatsapp.com/send?phone=%2B554136424089";
            }
          }

          if (url) {
            window.open(url, "_blank");
          } else {
            console.warn("Não foi possível identificar o link do ícone:", img);
          }
        });
      });
    }
  } catch (err) {
    console.error("Erro no bloco de redes sociais:", err);
  }

  // ===============================
  // ANIMAÇÃO DE CLIQUE NOS BOTÕES
  // ===============================
  try {
    const botoes = [
      document.getElementById("btn-saiba"),
      document.getElementById("btn-clique"),
      document.getElementById("btn-enviar"),
      document.getElementById("btn-cadastre")
    ].filter(Boolean);

    if (botoes.length) {
      botoes.forEach(botao => {
        botao.addEventListener("click", () => {
          botao.classList.add("animar-botao");
          setTimeout(() => botao.classList.remove("animar-botao"), 400);
        });
      });
    }
  } catch (err) {
    console.error("Erro no bloco de animação de botões:", err);
  }

  // ===============================
  // FORMULÁRIO DE CONTATO - MENSAGEM DE SUCESSO
  // ===============================
  try {
    // tenta selecionar por id primeiro, senão pega o primeiro form da página
    const formContato = document.getElementById("form-contato") || document.querySelector("form");
    const botaoEnviar = document.getElementById("btn-enviar");

    if (formContato && botaoEnviar) {
      formContato.addEventListener("submit", function (e) {
        e.preventDefault();

        let msgSucesso = formContato.querySelector(".msg-sucesso") || document.querySelector(".msg-sucesso");
        if (!msgSucesso) {
          msgSucesso = document.createElement("p");
          msgSucesso.className = "msg-sucesso";
          formContato.appendChild(msgSucesso);
        }

        msgSucesso.textContent = "✅ Mensagem enviada com sucesso!";
        msgSucesso.classList.add("mostrar");

        setTimeout(() => formContato.reset(), 1000);
        setTimeout(() => msgSucesso.classList.remove("mostrar"), 3000);
      });
    }
  } catch (err) {
    console.error("Erro no bloco de formulário de contato:", err);
  }

  // ===============================
  // LOGIN
  // ===============================
  try {
    const formLogin = document.getElementById("form-login");
    const msgLogin = document.getElementById("mensagem-login");

    if (formLogin && msgLogin) {
      const usuarioValido = "admin";
      const senhaValida = "1234";

      formLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        const usuarioEl = document.getElementById("usuario");
        const senhaEl = document.getElementById("senha");
        const usuario = usuarioEl ? usuarioEl.value.trim() : "";
        const senha = senhaEl ? senhaEl.value.trim() : "";

        if (usuario === usuarioValido && senha === senhaValida) {
          mostrarMensagem(msgLogin, "Login realizado com sucesso! ✅", "#a9e4a9");
        } else {
          mostrarMensagem(msgLogin, "Usuário ou senha incorretos ❌", "#ffaaaa");
        }

        formLogin.reset();
      });
    }
  } catch (err) {
    console.error("Erro no bloco de login:", err);
  }

  // ===============================
  // CADASTRO DE E-MAIL
  // ===============================
  try {
    const formEmail = document.getElementById("form-email");
    const msgEmail = document.getElementById("mensagem-sucesso");

    if (formEmail && msgEmail) {
      formEmail.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailEl = document.getElementById("email");
        const email = emailEl ? emailEl.value.trim() : "";

        if (email === "" || !email.includes("@")) {
          mostrarMensagem(msgEmail, "Por favor, insira um e-mail válido.", "#ffaaaa");
          return;
        }

        mostrarMensagem(msgEmail, "E-mail cadastrado com sucesso! ✅", "#a9e4a9");
        formEmail.reset();
      });
    }
  } catch (err) {
    console.error("Erro no bloco de cadastro de e-mail:", err);
  }

  // ===============================
  // FUNÇÃO GENÉRICA PARA MENSAGENS
  // ===============================
  // (mantive comportamento original, só deixei mais defensivo)
  function mostrarMensagem(elemento, texto, cor) {
    if (!elemento) {
      console.warn("mostrarMensagem: elemento inexistente", texto);
      return;
    }
    elemento.textContent = texto;
    elemento.style.color = cor || "";
    elemento.classList.add("visivel");

    // protege caso elemento.timeout não exista
    if (elemento.timeout) {
      clearTimeout(elemento.timeout);
    }
    elemento.timeout = setTimeout(() => {
      elemento.classList.remove("visivel");
      elemento.timeout = null;
    }, 4000);
  }

  // torna mostrarMensagem disponível globalmente (se alguma chamada externa já usa)
  window.mostrarMensagem = mostrarMensagem;
});
