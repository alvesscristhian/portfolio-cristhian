window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

const toggleButton = document.getElementById("toggle-theme");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const cards = document.querySelectorAll(".cards");
if (window.matchMedia("(width > 1024px)")) {
  cards.forEach(card => {
    card.addEventListener('mouseenter', e => {
      switch (e.target.id) {
        case "landing-salao":
          document.querySelector('#link-salao').style.opacity = 1;
          document.querySelector('#link-avaliacao').style.opacity = 0;
          document.querySelector('#link-valida').style.opacity = 0;
          break;
        case "cadastro-alunos":
          document.querySelector('#link-avaliacao').style.opacity = 1;
          document.querySelector('#link-salao').style.opacity = 0;
          document.querySelector('#link-valida').style.opacity = 0;
          break;
        case "valida-form":
          document.querySelector('#link-valida').style.opacity = 1;
          document.querySelector('#link-avaliacao').style.opacity = 0;
          document.querySelector('#link-salao').style.opacity = 0;
          break;
      }
    });
  });
}