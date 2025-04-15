// script.js

// Ejemplo: toggle de un menú móvil (opcional, si implementas uno)
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("visible");
    });
  }

  // Puedes agregar más funciones aquí, como validación de formulario, etc.
});
