document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section'); // Supondo que suas seções têm a tag <section>
    let lastClicked = document.getElementById('home-link'); // Inicialmente o botão Home
    const navbar = document.querySelector('.content');
    const homeSection = document.getElementById('home'); 
    const aboutsection = document.getElementById('about');
    const servicessection = document.getElementById('services');
    const contactsection = document.getElementById('contact');

    let scrollEnabled = true;
    let isProgrammaticScroll = false; // Variável de controle para diferenciar entre scroll manual e programático

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const homeSectionTop = homeSection.offsetTop;
    const homeSectionHeight = homeSection.offsetHeight;

    
    // Adiciona a classe 'active' ao botão Home inicialmente
    lastClicked.classList.add('active');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            scrollEnabled = false;
            isProgrammaticScroll = true;
            // Remove a classe 'active' do último clicado
            lastClicked.classList.remove('active');

            // Adiciona a classe 'active' ao link clicado
            event.target.classList.add('active');

            // Atualiza o último clicado
            lastClicked = event.target;

            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetPosition = targetElement.offsetTop ;
                window.scrollTo({
                    top: targetPosition,
                    left: 0,
                    behavior: 'smooth',
                });

                // Muda o título do separador
                document.title = `Evolve | ${targetId.charAt(0).toUpperCase() + targetId.slice(1)}`;
            } else {
                console.error(`Element with ID '${targetId}' not found.`);
            }
            scrollEnabled = false;
            isProgrammaticScroll = false;
        });
    });

    // Função para verificar a seção visível e atualizar a navbar
    const updateActiveNavLink = () => {
        if(!scrollEnabled) return;
        
        if(isProgrammaticScroll) {
            return;
        }
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const homeSectionTop = homeSection.offsetTop;
        const homeSectionHeight = homeSection.offsetHeight;
        const aboutSectionTop = aboutsection.offsetTop;
        const aboutSectionHeight = aboutsection.offsetHeight;
        const servicesSectionTop = servicessection.offsetTop;
        const servicesSectionHeight = servicessection.offsetHeight;
        const contactSectionTop = contactsection.offsetTop;
        const contactSectionHeight = contactsection.offsetHeight;

        if (scrollTop >= homeSectionTop  && scrollTop < homeSectionTop + homeSectionHeight / 2 -200) {
            lastClicked.classList.remove('active');
            lastClicked = document.getElementById('home-link');
            lastClicked.classList.add('active');
            document.title = `Evolve | Home`;	
        }
        if (scrollTop >= aboutSectionTop -500 && scrollTop < aboutSectionTop + aboutSectionHeight / 2-200) {
            lastClicked.classList.remove('active');
            lastClicked = document.getElementById('about-link');
            lastClicked.classList.add('active');
            document.title = `Evolve | About`;
        }
        if (scrollTop >= servicesSectionTop -200  && scrollTop < servicesSectionTop + servicesSectionHeight / 2) {
            lastClicked.classList.remove('active');
            lastClicked = document.getElementById('services-link');
            lastClicked.classList.add('active');
            document.title = `Evolve | Services`;
        }
        if (scrollTop >= contactSectionTop -200 && scrollTop < contactSectionTop + contactSectionHeight / 2 ) {
            lastClicked.classList.remove('active');
            lastClicked = document.getElementById('contact-link');
            lastClicked.classList.add('active');
            document.title = `Evolve | Contact`;
        }
    };

   window.addEventListener('scroll', () => {
        if (!isProgrammaticScroll) {
            scrollEnabled = true;
        }
        updateActiveNavLink();

        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > 0) {
            navbar.classList.add('content-hidden');
        } else {
            navbar.classList.remove('content-hidden');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});

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
});