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
    console.error("Erro nos cartões:", err);
  }

  // ===============================
  // REDES SOCIAIS
  // ===============================
  try {
    const icones = document.querySelectorAll(".social-icons img");
    icones.forEach(img => {
      img.addEventListener("click", function () {
        let url = img.dataset.link || "";
        const nome = (img.alt || "").toLowerCase();

        if (!url) {
          if (nome.includes("insta")) url = "https://www.instagram.com/colegioszymanski";
          else if (nome.includes("face")) url = "https://www.facebook.com/share/19kvC9XmbA/";
          else if (nome.includes("whats")) url = "https://api.whatsapp.com/send?phone=%2B554136424089";
        }

        if (url) window.open(url, "_blank");
      });
    });
  } catch (err) {
    console.error("Erro nas redes sociais:", err);
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
    console.error("Erro nos botões:", err);
  }

  // ===============================
  // FORMULÁRIO DE CONTATO
  // ===============================
  try {
    const formContato = document.getElementById("form-contato");
    const botaoEnviar = document.getElementById("btn-enviar");

    if (formContato && botaoEnviar) {
      formContato.addEventListener("submit", function (e) {
        e.preventDefault();

        let msgSucesso = formContato.querySelector(".msg-sucesso");
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
    console.error("Erro no formulário de contato:", err);
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
          mostrarMensagem(msgLogin, "✅ Login realizado com sucesso!", "#a9e4a9");
        } else {
          mostrarMensagem(msgLogin, "❌ Usuário ou senha incorretos.", "#ffaaaa");
        }

        formLogin.reset();
      });
    }
  } catch (err) {
    console.error("Erro no login:", err);
  }

  // ===============================
  // CADASTRO DE E-MAIL E SENHA
  // ===============================
  try {
    const formEmail = document.getElementById("form-email");
    const formSenha = document.getElementById("form-senha");
    const msgEmail = document.getElementById("mensagem-sucesso");

    if (formEmail && formSenha && msgEmail) {
      formEmail.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email")?.value.trim() || "";

        if (email === "" || !email.includes("@")) {
          mostrarMensagem(msgEmail, "⚠️ Por favor, insira um e-mail válido.", "#ffaaaa");
          return;
        }

        // Avança para senha
        formEmail.style.display = "none";
        formSenha.style.display = "flex";
        mostrarMensagem(msgEmail, "E-mail válido! Agora crie uma senha 🔒", "#a9e4a9");
      });

      formSenha.addEventListener("submit", (e) => {
        e.preventDefault();
        const senha = document.getElementById("senha-cadastro")?.value.trim() || "";

        if (senha.length < 4) {
          mostrarMensagem(msgEmail, "⚠️ A senha deve ter pelo menos 4 caracteres.", "#ffaaaa");
          return;
        }

        // ✅ Mensagem de sucesso
        mostrarMensagem(msgEmail, "✅ Conta criada com sucesso!", "#a9e4a9");

        // Simula redirecionamento
        setTimeout(() => {
          window.location.href = "pagina-principal.html";
        }, 2000);

        formSenha.reset();
      });
    }
  } catch (err) {
    console.error("Erro no cadastro:", err);
  }

  // ===============================
  // FUNÇÃO PARA EXIBIR MENSAGENS
  // ===============================
  function mostrarMensagem(elemento, texto, cor) {
    if (!elemento) return;
    elemento.textContent = texto;
    elemento.style.color = cor || "#000";
    elemento.classList.add("visivel");

    if (elemento.timeout) clearTimeout(elemento.timeout);
    elemento.timeout = setTimeout(() => {
      elemento.classList.remove("visivel");
    }, 4000);
  }
});
