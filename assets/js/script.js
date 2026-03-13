window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Alternância de Tema Escuro/Claro
const toggleButton = document.getElementById("toggle-theme");
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector("header.menu").classList.toggle("dark-mode");
  });
}