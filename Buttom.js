// Esperar a que todo el DOM esté cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos el botón y el índice
    const toggleButton = document.getElementById("toggleNav");
    const nav = document.querySelector("nav");
    const content = document.querySelector(".content-section");
  
    // Agregamos el evento de click al botón
    toggleButton.addEventListener("click", function() {
      // Alternamos la clase 'hidden' en el nav
      nav.classList.toggle("hidden");
  
      // Si el índice está oculto, movemos el botón y expandimos el contenido
      if (nav.classList.contains("hidden")) {
        toggleButton.style.left = "10px";  // Mueve el botón hacia la izquierda
        content.classList.add("expand");   // Expande el contenido
      } else {
        toggleButton.style.left = "170px"; // Mueve el botón de nuevo al lado del índice
        content.classList.remove("expand"); // Reduce el contenido cuando el índice aparece
      }
    });
  });

  
