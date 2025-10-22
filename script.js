// ===============================
// CÓDIGO FINAL CORRIGIDO
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  // ===============================
  // CARTÕES COM ANIMAÇÃO DE GIRO
  // ===============================
  try {
    const images = document.querySelectorAll(".card-image");
    images.forEach(image => {
      image.addEventListener("click", function () {
        const card = image.closest(".card");
        if (!card) return;
        card.classList.add("flipped");
        setTimeout(() => card.classList.remove("flipped"), 10000);
      });
    });
  } catch (err) {
    console.error("Erro no bloco de cartões:", err);
  }

  // ===============================
  // REDES SOCIAIS (ICONS CLICK)
  // ===============================
  try {
    const icones = document.querySelectorAll(".social-icons img");
    icones.forEach(img => {
      img.addEventListener("click", function () {
        const dataLink = img.getAttribute("data-link");
        const nome = (img.alt || img.src || "").toLowerCase();
        let url = dataLink || "";

        if (!url) {
          if (nome.includes("insta")) url = "https://www.instagram.com/colegioszymanski";
          else if (nome.includes("face")) url = "https://www.facebook.com/share/19kvC9XmbA/";
          else if (nome.includes("whats")) url = "https://api.whatsapp.com/send?phone=%2B554136424089";
        }

        if (url) window.open(url, "_blank");
      });
    });
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

    botoes.forEach(botao => {
      botao.addEventListener("click", () => {
        botao.classList.add("animar-botao");
        setTimeout(() => botao.classList.remove("animar-botao"), 400);
      });
    });
  } catch (err) {
    console.error("Erro no bloco de animação de botões:", err);
  }

  // ===============================
  // FORMULÁRIO DE CONTATO
  // ===============================
  try {
    const formContato = document.getElementById("form-contato") || document.querySelector("form");
    const botaoEnviar = document.getElementById("btn-enviar");

    if (formContato && botaoEnviar) {
      formContato.addEventListener("submit", function (e) {
        e.preventDefault();
        let msgSucesso = formContato.querySelector(".msg-sucesso") || document.createElement("p");
        msgSucesso.className = "msg-sucesso";
        formContato.appendChild(msgSucesso);

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
        const usuario = document.getElementById("usuario")?.value.trim() || "";
        const senha = document.getElementById("senha")?.value.trim() || "";

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
  // CADASTRO DE E-MAIL E SENHA
  // ===============================
  try {
    const formEmail = document.getElementById("form-email");
    const formSenha = document.getElementById("form-senha");
    const msgEmail = document.getElementById("mensagem-sucesso");

    if (formEmail && msgEmail) {
      formEmail.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email")?.value.trim() || "";

        if (email === "" || !email.includes("@")) {
          mostrarMensagem(msgEmail, "Por favor, insira um e-mail válido.", "#ffaaaa");
          return;
        }

        // Passa para a etapa da senha
        formEmail.style.display = "none";
        formSenha.style.display = "flex";
        mostrarMensagem(msgEmail, "E-mail válido! Agora crie uma senha 🔒", "#a9e4a9");
      });
    }

    if (formSenha && msgEmail) {
      formSenha.addEventListener("submit", (e) => {
        e.preventDefault();
        const senha = document.getElementById("senha-cadastro")?.value.trim() || "";

        if (senha.length < 4) {
          mostrarMensagem(msgEmail, "A senha deve ter pelo menos 4 caracteres.", "#ffaaaa");
          return;
        }

        mostrarMensagem(msgEmail, "✅ Conta criada com sucesso!", "#a9e4a9");

        // Redireciona após 2 segundos
        setTimeout(() => {
          window.location.href = "pagina-principal.html";
        }, 2000);

        formSenha.reset();
      });
    }
  } catch (err) {
    console.error("Erro no bloco de cadastro de e-mail:", err);
  }

  // ===============================
  // FUNÇÃO GENÉRICA PARA MENSAGENS
  // ===============================
  function mostrarMensagem(elemento, texto, cor) {
    if (!elemento) return;
    elemento.textContent = texto;
    elemento.style.color = cor || "";
    elemento.classList.add("visivel");

    if (elemento.timeout) clearTimeout(elemento.timeout);
    elemento.timeout = setTimeout(() => {
      elemento.classList.remove("visivel");
      elemento.timeout = null;
    }, 4000);
  }

  window.mostrarMensagem = mostrarMensagem;
});
