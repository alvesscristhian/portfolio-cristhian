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

  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️";
  } else {
    toggleButton.textContent = "🌙";
  }
});

const cards = document.querySelectorAll(".cards");
cards.forEach(card => {
  card.addEventListener('mouseenter', e => {
    switch (e.target.id) {
      case "landing-salao":
        document.querySelector('#link-salao').style.opacity = 1;
        break;
      case "cadastro-alunos":
        document.querySelector('#link-avaliacao').style.opacity = 1;
        break;
      case "valida-form":
        document.querySelector('#link-valida').style.opacity = 1;
        break;
    }
  });
});