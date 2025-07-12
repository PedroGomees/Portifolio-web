let ocult = document.querySelectorAll(".biografia");

function reveal() {
  var reveals = document.querySelectorAll(".section-2");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 200;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
      ocult.forEach(el => el.classList.add('fade')); // corrigido para funcionar com NodeList
    } else {
      reveals[i].classList.remove('active');
      ocult.forEach(el => el.classList.remove('fade'));
    }
  }
}

const limiteMaximo = 80; // limite em %

function updateScrollBar() {
  const scrollBar = document.getElementById('scroll-progress-bar');
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  const fator = 0.10; // quanto menor, mais devagar a barra preenche
  let scrollPercent = (scrollTop / docHeight) * 100 * fator;

  scrollBar.style.width = scrollPercent + '%';
}

// Combinar com seu scroll listener
window.addEventListener('scroll', () => {
  reveal(); // sua função existente
  updateScrollBar(); // nova função da barra horizontal
});

