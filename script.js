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
function abrirRedeSocial(rede) {
  let url = "";

  if (rede === "instagram") {
    url = "https://www.instagram.com/colegioszymanski?igsh=MWIwODh5cGh0NTBoaA==";
  } else if (rede === "facebook") {
    url = "https://www.facebook.com/share/19kvC9XmbA/";
  } else if (rede === "whatsapp") {
    url = "https://api.whatsapp.com/send?phone=%2B554136424089&fbclid=IwVERDUANh3KFleHRuA2FlbQIxMAABHjakSyA-fBkBifkZD_ywjv69ZhaIzHSEyXz0hn0S3yJziTp4RSoIUS5MW1Ua_aem_JjbN2UK18z0WukvSVuUKJA";
  }

  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", function() {
  const icones = document.querySelectorAll(".social-icons img");

  icones.forEach(img => {
    const rede = img.alt.toLowerCase();
    img.addEventListener("click", function(event) {
      event.preventDefault();
      abrirRedeSocial(rede);
    });
  });
});