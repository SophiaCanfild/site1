/* Reset e base */

*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%;font-family:"PT Serif",serif;background:#5B7580;color:#102836}

/* Tipografia */
:root{
  --cream:#F6EFD8;
  --dark:#102836;
  --muted-bg:#92A9AE;
}
.top-label{font-family:"Marcellus",serif;color:var(--cream);font-size:20px;}

/* --- HERO (Seção 1) --- */
.hero{width:100vw;background:#5B7580;display:flex;justify-content:center;padding:60px 0 40px 0}
.hero-inner{width:1100px;display:grid;grid-template-columns:1fr 540px;gap:30px;align-items:start;position:relative}

/* Top label (moved to top-left of hero area) */
.hero-left{padding-left:10px;position:relative}
.top-label{position:absolute;left:0;top:-24px;font-family:"Marcellus",serif;color:var(--cream);font-size:18px}

/* Hero title & text */
.hero-title{font-family:"Marcellus",serif;font-size:72px;line-height:0.95;color:var(--cream);margin-top:12px;margin-bottom:28px;margin-left:6px}
.hero-desc{font-size:16px;color:var(--cream);max-width:560px;margin-bottom:36px;margin-left:6px;opacity:0.95}

/* Move content um pouco mais para a esquerda (mais espaço entre texto e imagem) */
.hero-inner{padding-left:48px}

button {
  background-color: #f4e3b2;
  color: #333;
  border: none;
  padding: 10px 25px;
  border-radius: 30px;
  font-size: 15px;
  font-family: 'Georgia', serif;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #e6d79f;
  transform: scale(1.05);
}

section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

section img {
  width: 50%;
  height: auto;
}

/* --- Espaçamento entre seções (sutil, uniforme) --- */
section{padding-top:40px;padding-bottom:60px}



/* --- ATIVIDADES (Seção 3) --- */
.atividades{position:relative;display:flex;align-items:center;justify-content:center;height:520px;overflow:visible;background:transparent}
.atividades-inner{position:relative;z-index:2;text-align:center}
.atividades-title{font-family:"Marcellus",serif;font-size:64px;color:var(--cream);margin-bottom:22px}
.btn-primary{background:var(--cream);color:var(--dark);border-radius:40px;padding:18px 56px;border:none;font-family:"PT Serif";font-size:16px;cursor:pointer}

/* Background image: mostrar inteira (não cortar) */
.atividades-bg{
  position:absolute;inset:0;z-index:1;
  background-image:url("images/section3.jpg");
  background-repeat:no-repeat;
  background-position:center top;
  background-size:contain; /* mostra a imagem inteira sem cortar */
  opacity:1;
  pointer-events:none;
}

/* Linha divisória sutil (abaixo da imagem) */
.atividades::after{content:"";position:absolute;left:6%;right:6%;bottom:-2px;height:2px;background:rgba(255,255,255,0.06);z-index:3}

/* --- CONTATO (Seção 4) --- */
.contato{background:oklch(70.552% 0.02639 209.415);display:flex;justify-content:center}
.contato-inner{width:1100px;display:flex;gap:40px;align-items:flex-start}

/* esquerda: redes sociais */
.contato-left{width:420px;padding-left:6px}
.redes-title{font-family:"Marcellus",serif;font-size:28px;color:var(--dark);margin-bottom:22px}
.social-icons{display:flex;gap:40px;align-items:center}
.social-icons img{width:120px;opacity:0.6}

/* direita: formulário */
.contato-right{flex:1}
.section-big{font-family:"Marcellus",serif;font-size:72px;color:var(--dark);line-height:0.95;margin-bottom:22px}
.contact-form label{display:block;font-size:14px;color:var(--dark);margin-bottom:8px;font-weight:700}
.two-cols{display:flex;gap:18px;margin-bottom:12px}
.contact-form input[type="text"], .contact-form input[type="email"], .contact-form textarea{
  width:100%;padding:14px 18px;border-radius:24px;border:2px solid rgba(16,40,54,0.6);background:rgba(255,255,255,0.06);font-family:"PT Serif";font-size:14px;color:var(--dark);outline:none
}
.contact-form textarea{border-radius:20px;padding:18px;height:140px;resize:none}
.btn-ghost.small{margin-top:18px}

/* --- FOOTER --- */
.footer{width:100%;background:#173842;padding:48px 0;color:var(--cream)}
.footer-inner{width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:30px}
.footer-title{font-family:"Marcellus",serif;font-size:44px}
.footer-illu{width:160px;margin-bottom:12px}
.footer-links a{color:var(--cream);text-decoration:underline;font-family:"PT Serif"}

/* newsletter */
.footer-right{width:360px}
.newsletter input{flex:1;padding:16px;border-radius:4px;border:none;font-size:14px}

/* pequenas correções visuais para preservar o layout fixo */
@media (max-width:1100px){ /* apenas para evitar quebra extrema ao visualizar em telas pequenas */
  .hero-inner{grid-template-columns:1fr 420px}
  .hero-right{width:420px;height:560px}
  .hero-right img{width:420px}
  .cards{gap:20px}
}
/* ==========================
   ANIMAÇÃO DE CLIQUE NOS BOTÕES
========================== */

.animar-botao {
  transform: scale(0.9);
  transition: transform 0.1s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

/* Opcional: suaviza o retorno após o clique */
button,
input[type="button"],
input[type="submit"] {
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}
/* ==========================
   MENSAGEM DE SUCESSO
========================== */
.msg-sucesso {
  display: none;
  color: #0a5f1c;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
  background-color: #d1f7d6;
  border-radius: 10px;
  padding: 8px 12px;
  animation: fadeIn 0.5s ease;
}

.msg-sucesso.mostrar {
  display: block;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}/* ===========================
   LOGIN + CADASTRO (VISUAL ATUALIZADO)
=========================== */
.login-cadastro-secao {
  background-color: #15343a; /* mesmo tom da imagem */
  color: #f9f7e8;
  padding: 60px 40px;
}

.conteudo-login-cadastro {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 0 auto;
}

/* ======== LADO ESQUERDO ======== */
.lado-esquerdo {
  flex: 1;
  text-align: center;
  min-width: 280px;
}

.lado-esquerdo h2 {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #efe9cc;
}

.img-banner {
  width: 250px;
  height: auto;
  margin-bottom: 15px;
}

.redes-sociais {
  font-size: 1rem;
  margin-top: 5px;
}

.redes-sociais a {
  color: #efe9cc;
  margin-left: 5px;
  text-decoration: underline;
  transition: color 0.3s;
}

.redes-sociais a:hover {
  color: #e4d6a7;
}

/* ======== LADO DIREITO ======== */
.lado-direito {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  min-width: 300px;
}

/* Formulários (Login + Cadastro) */
.box-form {
  background: transparent;
  text-align: center;
  width: 100%;
  max-width: 320px;
}

.box-form h3 {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 15px;
  line-height: 1.4;
}

.box-form form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

/* Campos */
.box-form input {
  width: 240px;
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  text-align: center;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Botões arredondados */
.box-form button {
  background-color: #e4d6a7;
  color: #111;
  border: none;
  border-radius: 40px;
  padding: 12px 40px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.box-form button:hover {
  background-color: #d9c98e;
  transform: scale(1.05);
}

/* Mensagens */
.mensagem {
  margin-top: 10px;
  font-size: 0.9rem;
  display: none;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.mensagem.visivel {
  display: block;
  opacity: 1;
}

/* Responsividade */
@media (max-width: 900px) {
  .conteudo-login-cadastro {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
}
html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Curso Técnico — Layout Fixo</title>

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Marcellus&family=PT+Serif:wght@400;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- ===== SEÇÃO 1: HERO com texto à esquerda e imagem à direita ===== -->
<section class="hero">
  <div class="hero-inner">
    <div class="hero-left">
      <div class="top-label">Curso Técnico de Desenvolvimento de Sistemas</div>

      <h1 class="hero-title">
        Explore o Curso de<br />
        Desenvolvimento
      </h1>

      <p class="hero-desc">
        Descubra o futuro da educação com o nosso curso técnico, projetado para atender às suas necessidades de aprendizado. Com uma variedade de disciplinas e especialistas na área, oferecemos uma oportunidade única de desenvolvimento profissional e pessoal.
      </p>

      <!-- Botão corrigido -->
      <a href="sobre.html" class="btn-ghost">Saiba mais</a>
    </div>

    <!-- Imagem à direita (mantém proporção e posição) -->
    <div class="hero-right">
      <img src="imagem1.jpeg" alt="Sala e decoração">
    </div>
  </div>
</section>

<h2 class="section-title">Destaques</h2>

<div class="cards">
  <!-- Cartão 1: Professores -->
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <img src="imagem2.1.jpeg" alt="Professores" class="card-image">
        <div class="card-label">Professores</div>
      </div>
      <div class="card-back">
        <p>Contamos com excelentes professores em nosso curso. O docente que aparece na imagem é o professor Antônio, responsável pelas disciplinas de Ciência da Computação, Análise de Projetos e Sistemas, e Desenvolvimento Front-End.</p>
      </div>
    </div>
  </div>

  <!-- Cartão 2: Projetos -->
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <img src="imagem2.2.jpeg" alt="Projetos" class="card-image">
        <div class="card-label">Projetos</div>
      </div>
      <div class="card-back">
        <p>O projeto apresentado na imagem é uma aranha robótica desenvolvida pela turma 3CDS. Capaz de se movimentar e realizar uma sequência de dança, este é um dos diversos exemplos das soluções inovadoras que nosso curso é capaz de conceber e implementar.</p>
      </div>
    </div>
  </div>

  <!-- Cartão 3: Escola -->
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <img src="imagem2.3.png" alt="Escola" class="card-image">
        <div class="card-label">Escola</div>
      </div>
      <div class="card-back">
        <p>O Colégio Júlio Szymanski é uma instituição de excelência, reconhecida por oferecer uma variedade de cursos de qualidade, como Ciência da Computação, Administração e Formação de Docentes, entre outros. Venha fazer parte dessa escola incrível e prepare-se para um futuro promissor.</p>
      </div>
    </div>
  </div>
</div>

  <!-- ===== SEÇÃO 3: Atividades — full-width hero com imagem aparecendo inteira ===== -->
<section class="atividades">
  <div class="atividades-inner">
    <h2 class="atividades-title">Um pouco sobre nossas atividades</h2>
    <button class="btn-primary" id="btn-clique">Clique aqui</button>
  </div>
  <div class="atividades-bg" aria-hidden="true"></div>
</section>

<!-- ===== Script de redirecionamento ===== -->
<script>
  // Quando o botão for clicado, redireciona para a página "clique.html"
  document.getElementById("btn-clique").addEventListener("click", function() {
    window.location.href = "clique.html";
  });
</script>


  <!-- ===== SEÇÃO 4: Contato ===== -->
  <section class="contato">
    <div class="contato-inner">

      <div class="contato-left">
        <h3 class="redes-title">Siga-nos nas redes sociais</h3>
        <div class="social-icons">
          <img src="insta.png" alt="Instagram">
          <img src="face.png" alt="Facebook">
          <img src="whats.png" alt="WhatsApp">
        </div>
      </div>

      <div class="contato-right">
        <h2 class="section-big">Converse<br />conosco</h2>

        <form class="contact-form" onsubmit="return false;">
          <label>Nome <span class="muted">(obrigatório)</span></label>
          <div class="two-cols">
            <input type="text" placeholder="Nome">
            <input type="text" placeholder="Sobrenome">
          </div>

          <label>E-mail <span class="muted">(obrigatório)</span></label>
          <input type="email" placeholder="Seu e-mail">

          <label>Mensagem <span class="muted">(obrigatório)</span></label>
          <textarea placeholder="Escreva sua mensagem..."></textarea>

          <button class="btn-ghost small" id="btn-enviar">Enviar</button>
        </form>
      </div>
    </div>
  </section>


      <div class="footer-center">
        <img src="imagem5.png" alt="Ilustração" class="footer-illu">
        <nav class="footer-links">
          <a href="#">Siga-nos</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </nav>
      </div>

      <div class="footer-right">
        <p class="newsletter-text">Cadastre seu endereço de e-mail para receber novidades e atualizações.</p>

        <div class="newsletter">
          <input type="email" placeholder="Endereço de e-mail">
          <button class="btn-primary small" id="btn-cadastre">Cadastre-se</button>
        </div>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
<section class="login-cadastro-secao">
  <div class="conteudo-login-cadastro">
    
    <!-- Lado Esquerdo -->
    <div class="lado-esquerdo">
      <h2>Desenvolvimento de sistemas</h2>
      <img src="paragrafo_1_banner.jpg" alt="Desenvolvimento de sistemas" class="img-banner">
      <div class="titulo-bloco">
        <h2>Desenvolvimento de<br><span>sistemas</span></h2>
        <img src="imagem5.png" alt="Desenvolvimento de sistemas" class="img-banner">
      </div>

      <p class="redes-sociais">
        Siga-nos no 
        <a href="#">Facebook</a> 
        <a href="#">Instagram</a>
      </p>
    </div>

    <!-- Lado Direito -->
    <div class="lado-direito">
      
      <!-- Login -->
      <div class="box-form login">
        <h3>Área do Usuário</h3>
        <form id="form-login">
          <input type="text" id="usuario" placeholder="Usuário" required />
          <input type="password" id="senha" placeholder="Senha" required />
          <button type="submit">Entrar</button>
          <p id="mensagem-login" class="mensagem"></p>
        </form>
      </div>

      <!-- Cadastro -->
      <div class="box-form cadastro-email">
        <h3>Cadastre seu endereço de e-mail para receber novidades e atualizações.</h3>
        <form id="form-email">
          <input type="email" id="email" placeholder="Endereço de e-mail" required />
          <button type="submit">Cadastre-se</button>
        </form>
        <p id="mensagem-sucesso" class="mensagem"></p>
      </div>

    </div>
  </div>
</section>

<!-- Script -->
<script src="script.js"></script>
</body>
</html>
js
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
