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

  const fator = 0.06;// quanto menor, mais devagar a barra preenche
  let scrollPercent = (scrollTop / docHeight) * 100 * fator;

  scrollBar.style.width = scrollPercent + '%';
}

// Combinar com seu scroll listener
window.addEventListener('scroll', () => {
  reveal(); // sua função existente
  updateScrollBar(); // nova função da barra horizontal
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
            title: 'Projeto Nexus UI',
            description: 'Implementação WEB na Nexus',
            imageUrl: 'https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Projeto+1', // Substitua pelos caminhos das suas imagens
            link: 'https://exemplo.com/projeto1',
        },
        {
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
        },
        // Adicione mais projetos aqui
    ];

    let currentIndex = 0;

    // Função para renderizar os slides
    function renderSlides() {
        carousel.innerHTML = ''; // Limpa o carrossel antes de adicionar novos slides
        projects.forEach(project => {
            const slide = document.createElement('div');
            slide.classList.add('carousel-slide');

            const link = document.createElement('a');
            link.href = project.link;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';

            const img = document.createElement('img');
            img.src = project.imageUrl;
            img.alt = project.title;
            // img.loading = 'lazy'; // Para carregamento lazy da imagem (opcional)

            link.appendChild(img);

            const title = document.createElement('h3');
            title.textContent = project.title;

            const description = document.createElement('p');
            description.textContent = project.description;

            slide.appendChild(link);
            slide.appendChild(title);
            slide.appendChild(description);
            carousel.appendChild(slide);
        });

        updateCarouselPosition(); // Posiciona o carrossel no slide correto
        updateButtonVisibility(); // Atualiza a visibilidade dos botões
    }

    // Função para atualizar a posição do carrossel
    function updateCarouselPosition() {
        const offset = -currentIndex * 100; // Move 100% para cada slide
        carousel.style.transform = `translateX(${offset}%)`;
    }

    // Função para atualizar a visibilidade dos botões de navegação
    function updateButtonVisibility() {
        if (projects.length <= 1) { // Se houver 0 ou 1 projeto, esconde os botões
            prevButton.classList.add('hidden');
            nextButton.classList.add('hidden');
        } else {
            prevButton.classList.remove('hidden');
            nextButton.classList.remove('hidden');
        }

        // Se você quiser que os botões desapareçam nos extremos (sem loop)
        // prevButton.disabled = currentIndex === 0;
        // nextButton.disabled = currentIndex === projects.length - 1;
        // prevButton.classList.toggle('hidden', currentIndex === 0);
        // nextButton.classList.toggle('hidden', currentIndex === projects.length - 1);
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