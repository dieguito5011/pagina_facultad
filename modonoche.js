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
