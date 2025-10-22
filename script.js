// ====== CADASTRO DE E-MAIL (AGORA COM ETAPA DE SENHA) ======
const formEmail = document.getElementById("form-email");
const formSenha = document.getElementById("form-senha");
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

    // Mostra segunda etapa (senha)
    formEmail.style.display = "none";
    formSenha.style.display = "flex";
    mostrarMensagem(msgEmail, "E-mail válido! Agora crie uma senha 🔒", "#a9e4a9");
  });
}

if (formSenha && msgEmail) {
  formSenha.addEventListener("submit", (e) => {
    e.preventDefault();
    const senhaEl = document.getElementById("senha-cadastro");
    const senha = senhaEl ? senhaEl.value.trim() : "";

    if (senha.length < 4) {
      mostrarMensagem(msgEmail, "A senha deve ter pelo menos 4 caracteres.", "#ffaaaa");
      return;
    }

    mostrarMensagem(msgEmail, "✅ Conta criada com sucesso!", "#a9e4a9");

    // "Simula" redirecionamento após 2 segundos
    setTimeout(() => {
      window.location.href = "pagina-principal.html"; // troque para o destino real
    }, 2000);

    formSenha.reset();
  });
}
