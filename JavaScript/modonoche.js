document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const button = document.getElementById("darkModeButton");

  // Aplica el modo oscuro si estaba guardado
  if (localStorage.getItem("modo") === "oscuro") {
    body.classList.add("dark-mode");
    // Cambiar ícono si hay <i> dentro del botón
    const icon = button.querySelector("i");
    if (icon) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
  }

  // Toggle de modo oscuro
  window.toggleDarkMode = function () {
    body.classList.toggle("dark-mode");

    const icon = button.querySelector("i");
    if (icon) {
      if (body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("modo", "oscuro");
      } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("modo", "claro");
      }
    }
  };
});

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