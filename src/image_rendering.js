document.addEventListener("DOMContentLoaded", () => {
    // Seleciona o elemento pelo ID ou classe
    const logo = document.querySelector('.logo-container');

    // Cria um novo elemento <img>
    const img = document.createElement('img');
    img.src = './8.png'; // Define o caminho da imagem
    img.alt = 'Description of the image'; // Define o texto alternativo da imagem
    img.style.width = '270px'; // Define a largura da imagem
    img.style.height = '270px'; // Define a altura da imagem
    img.classList.add('zoomable'); // Adiciona a classe 'zoomable' à imagem
    // Adiciona a imagem ao elemento selecionado
    logo.appendChild(img);
    const eventsIcon = document.createElement('events-icon');
    eventsIcon.src = './3.png';
});

/* 
document.addEventListener("DOMContentLoaded", () => {

    const designBranding = document.querySelector('design-branding-img')
    const digitalMarketing = document.querySelector('digital-marketing-img')
    const gestaoRedes = document.querySelector('gestao-redes-img')
    const webDevelopment = document.querySelector('web-development-img')

    const eventsIcon = document.createElement('events-icon');
    eventsIcon.src = './3.png';
    img.alt = 'Description of the image'; // Define o texto alternativo da imagem
    img.style.width = '100px'; // Define a largura da imagem
    img.style.height = '100px'; // Define a altura da imagem
    eventsBox.appendChild(eventsIcon);
}); */