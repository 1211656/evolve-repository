document.addEventListener("DOMContentLoaded", () => {
    // Seleciona o elemento pelo ID ou classe
    const emailBox = document.querySelector('.logo-container');

    // Cria um novo elemento <img>
    const img = document.createElement('img');
    img.src = './8.png'; // Define o caminho da imagem
    img.alt = 'Description of the image'; // Define o texto alternativo da imagem
    img.style.width = '270px'; // Define a largura da imagem
    img.style.height = '270px'; // Define a altura da imagem
    img.classList.add('zoomable'); // Adiciona a classe 'zoomable' à imagem
    // Adiciona a imagem ao elemento selecionado
    emailBox.appendChild(img);
});