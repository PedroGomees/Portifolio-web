let ocult = document.querySelectorAll(".biografia");

function reveal() {
  var reveals = document.querySelectorAll(".section-2");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 200;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
      ocult.forEach(el => el.classList.add('fade')); 
    } else {
      reveals[i].classList.remove('active');
      ocult.forEach(el => el.classList.remove('fade'));
    }
  }
}

const limiteMaximo = 80; 

function updateScrollBar() {
  const scrollBar = document.getElementById('scroll-progress-bar');
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  const fator = 0.08;
  let scrollPercent = (scrollTop / docHeight) * 100 * fator;

  scrollBar.style.width = scrollPercent + '%';
}


window.addEventListener('scroll', () => {
  reveal(); 
  updateScrollBar(); 
});

/*carrossel*/
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.project-carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    // Seus dados de projeto
    const projects = [
        {
            id: 1,
            title: 'EM BREVE...',
            description: '',
          imageUrl: 'https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Projeto+1',
            link: 'https://exemplo.com/projeto1',
        },
       /* {
            id: 2,
            title: 'Questions and Answers',
            description:"Plataform Questions and Answers API é a API de uma plataforma de perguntas e respostas desenvolvida para permitir que usuários publiquem perguntas, respondam dúvidas e interajam em uma comunidade de aprendizado",
            imageUrl: 'https://via.placeholder.com/600x400/00FF00/FFFFFF?text=Projeto+2',
            link: 'https://exemplo.com/projeto2',
        },
        {
            id: 3,
            title: 'Sistema de Cadastro',
            description: 'Módulo de cadastro de usuários com validação.',
            imageUrl: 'https://via.placeholder.com/600x400/0000FF/FFFFFF?text=Projeto+3',
            link: 'https://exemplo.com/projeto3',
        },
        {
            id: 4,
            title: 'Outro Projeto Incrível',
            description: 'Uma descrição detalhada deste projeto sensacional.',
            imageUrl: 'https://via.placeholder.com/600x400/FFFF00/000000?text=Projeto+4',
            link: 'https://exemplo.com/projeto4',
        },*/
       
    ];

    let currentIndex = 0;

    // Função para renderizar os slides
    function renderSlides() {
        carousel.innerHTML = ''; 
        projects.forEach(project => {
            const slide = document.createElement('div');
            slide.classList.add('carousel-slide');

            const link = document.createElement('a');
            link.href = project.link;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';

           /* const img = document.createElement('img');
            img.src = project.imageUrl;
            img.alt = project.title;
            // img.loading = 'lazy'; 

            link.appendChild(img);*/

            const title = document.createElement('h3');
            title.textContent = project.title;

            const description = document.createElement('p');
            description.textContent = project.description;

            slide.appendChild(link);
            slide.appendChild(title);
            slide.appendChild(description);
            carousel.appendChild(slide);
        });

        updateCarouselPosition(); 
        updateButtonVisibility(); 
    }

    // Função para atualizar a posição do carrossel
    function updateCarouselPosition() {
        const offset = -currentIndex * 100; 
        carousel.style.transform = `translateX(${offset}%)`;
    }

    // Função para atualizar a visibilidade dos botões de navegação
    function updateButtonVisibility() {
        if (projects.length <= 1) {
            prevButton.classList.add('hidden');
            nextButton.classList.add('hidden');
        } else {
            prevButton.classList.remove('hidden');
            nextButton.classList.remove('hidden');
        }

   
    }

    // Event Listeners para os botões
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length; // Garante loop para trás
        updateCarouselPosition();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % projects.length; // Garante loop para frente
        updateCarouselPosition();
    });

    // Renderiza os slides quando a página é carregada
    renderSlides();
});
document.querySelector('.scroll-down').addEventListener('click', function(e) {
  e.preventDefault();

  const target = document.querySelector('#contatos');
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 800; 
  let start = null;

  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animationScroll(timestamp) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (elapsed < duration) requestAnimationFrame(animationScroll);
  }

  requestAnimationFrame(animationScroll);
});

function smoothScrollTo(targetID, duration = 900) {
  const element = document.querySelector(targetID);
  if (!element) return;

  const startY = window.pageYOffset;
  const targetY = element.getBoundingClientRect().top + startY;
  const distance = targetY - startY;
  let startTime = null;

  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (elapsed < duration) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

// Aplica para todos os links do nav
document.querySelectorAll('#navlinks a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    smoothScrollTo(this.getAttribute('href'), 900);
  });
});
