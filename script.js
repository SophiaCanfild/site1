  const inner = cardElement.querySelector('.card-in  inner.classList.toggle('fl}



document.addEventListener("DOMContentLoaded", function () 
  const btnSaiba = document.getElementById("btn-saiba");
  const btnClique = document.getElementById("btn-clique");
  const btnEnviar = document.getElementById("btn-enviar");
  const btnCadastre = document.getElementById("btn-cadastre");

  
              </div>
            </div>
          </div>
        </section>
        """;

document.addEventListener("DOMContentLoaded", function () {
  const icones = document.querySelectorAll("social-icons");

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