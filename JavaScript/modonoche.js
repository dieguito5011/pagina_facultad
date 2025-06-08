// modoOscuro.js

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
 
  const icon = document.getElementById("darkModeButton").querySelector("i");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}
//EmailJS: envío de formulario

document.addEventListener("DOMContentLoaded", function () {
  // Inicializamos EmailJS y manejamos eventos
  emailjs.init("58_GqUZ36OfqnO37c"); 

  const form = document.querySelector(".formulario");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("service_tusvvtp", "template_rnv189k", this) 
        .then(() => {
          alert("¡Mensaje enviado correctamente!");
          this.reset();
        })
        .catch((error) => {
          alert("Error al enviar el mensaje: " + error);
        });
    });
  }
});