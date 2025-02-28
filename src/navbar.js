document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section'); // Supondo que suas seções têm a tag <section>
    let lastClicked = document.getElementById('home-link'); // Inicialmente o botão Home
    const navbar = document.querySelector('.content');

    let lastScrollTop = 0;
    // Adiciona a classe 'active' ao botão Home inicialmente
    lastClicked.classList.add('active');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Remove a classe 'active' do último clicado
            lastClicked.classList.remove('active');

            // Adiciona a classe 'active' ao link clicado
            event.target.classList.add('active');

            // Atualiza o último clicado
            lastClicked = event.target;

            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetPosition = targetElement.offsetTop - (window.innerHeight / 2) + (targetElement.offsetHeight / 2);
                window.scrollTo({
                    top: targetPosition,
                    left: 0,
                    behavior: 'smooth'
                });

                // Muda o título do separador
                document.title = `Evolve | ${targetId.charAt(0).toUpperCase() + targetId.slice(1)}`;
            } else {
                console.error(`Element with ID '${targetId}' not found.`);
            }
        });
    });

    // Função para verificar a seção visível e atualizar a navbar
    const updateActiveNavLink = () => {
        let currentSection = null;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 2 && window.scrollY < sectionTop + sectionHeight / 2) {
                currentSection = section;
            }
        });

        if (currentSection) {
            const currentId = currentSection.getAttribute('id');
            const currentNavLink = document.querySelector(`.nav-link[href="#${currentId}"]`);

            if (currentNavLink && lastClicked !== currentNavLink) {
                // Remove a classe 'active' do último clicado
                lastClicked.classList.remove('active');

                // Adiciona a classe 'active' ao link correspondente à seção visível
                currentNavLink.classList.add('active');

                // Atualiza o último clicado
                lastClicked = currentNavLink;

                // Muda o título do separador
                document.title = `Evolve | ${currentId.charAt(0).toUpperCase() + currentId.slice(1)}`;
            }
        }
    };

    // Adiciona o evento de rolagem
    window.addEventListener('scroll', updateActiveNavLink);
    // Função para navegar para o próximo ou anterior link da navbar
    const navigateNavLinks = (direction) => {
        const currentIndex = Array.from(navLinks).indexOf(lastClicked);
        let newIndex = currentIndex + direction;

        if (newIndex < 0) {
            newIndex = navLinks.length - 1; // Vai para o último link se estiver no primeiro
        } else if (newIndex >= navLinks.length) {
            newIndex = 0; // Vai para o primeiro link se estiver no último
        }

        navLinks[newIndex].click();
    };

    // Adiciona event listeners para as teclas de seta direita e esquerda
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            navigateNavLinks(1); // Navega para o próximo link
        } else if (event.key === 'ArrowLeft') {
            navigateNavLinks(-1); // Navega para o link anterior
        }
    });
    // Detecta a direção do scroll e mostra/esconde a navbar
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll para baixo - esconde a navbar
            navbar.classList.add('content-hidden');
        } else {
            // Scroll para cima - mostra a navbar
            navbar.classList.remove('content-hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
    });
});