document.addEventListener("DOMContentLoaded", () => {
    let valueDisplays = document.querySelectorAll(".grid-item-number");
    let duration = 5900; // 3.7 seconds

    
    valueDisplays.forEach(valueDisplay => {
        let endValue = parseInt(valueDisplay.getAttribute("data-end-value"));
        let startValue = 0;
        let increment = endValue / (duration / 100); // Calculate increment value
        let interval = setInterval(() => {
            startValue += increment;
            valueDisplay.textContent = Math.floor(startValue).toString().padStart(3, '0'); // Update the display value
            if (startValue >= endValue) {
                clearInterval(interval);
                valueDisplay.textContent = endValue.toString().padStart(3, '0'); // Ensure the final value is set correctly
            }
        }, 100); // Update every 100ms
    });

    // GSAP animation for vertical movement
    gsap.from(".grid-item", {
        duration: 2,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        delay: 1
    });
   
    gsap.to(".meetOurTeam", {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power2.out",
        delay: 1.5 // Delay of 5 seconds
    });

    


});

document.addEventListener("DOMContentLoaded", () => {
    const scrollButton = document.getElementById('scrollButton');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) { // Ajuste o valor conforme necessário
            scrollButton.style.display = 'block';
            scrollButton.style.opacity = '1';
        } else {
            scrollButton.style.opacity = '0';
            setTimeout(() => {
                if (window.scrollY <= 200) {
                    scrollButton.style.display = 'none';
                }
            }, 300); // Tempo de transição da opacidade
        }
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    if(window.innerWidth > 1000) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".services-container", 
        { opacity: 0, y: -200 }, // Estado inicial
        { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            scrollTrigger: {
                trigger: ".services-container",
                start: "top 80%", // Inicia a animação quando o topo do elemento atinge 80% da viewport
                end: "bottom 20%", // Termina a animação quando o fundo do elemento atinge 20% da viewport
                scrub: true, // Suaviza a animação conforme o scroll
                markers: false // Remove isso em produção
            }
        }
    );
}
});

document.addEventListener("DOMContentLoaded", () => {
    if(window.innerWidth > 1000) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".contact-container", 
        { opacity: 0, y: 90 }, // Estado inicial
        { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            scrollTrigger: {
                trigger: ".contact-container",
                start: "top 80%", // Inicia a animação quando o topo do elemento atinge 80% da viewport
                end: "bottom 60%", // Termina a animação quando o fundo do elemento atinge 20% da viewport
                scrub: true, // Suaviza a animação conforme o scroll
                markers: false // Remove isso em produção
            }
        }
    );}
});

document.addEventListener("DOMContentLoaded", () => {
    if(window.innerWidth > 1000) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".about-container", 
        { opacity: 0, y: 90 }, // Estado inicial
        { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            scrollTrigger: {
                trigger: ".about-container",
                start: "top 80%", // Inicia a animação quando o topo do elemento atinge 80% da viewport
                end: "bottom 60%", // Termina a animação quando o fundo do elemento atinge 20% da viewport
                scrub: true, // Suaviza a animação conforme o scroll
                markers: false // Remove isso em produção
            }
        }
    );}
});

document.addEventListener("DOMContentLoaded", () => {
    if(window.innerWidth > 1000) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".paragraph-about ", {
        opacity: 0, // Define a opacidade final
        duration: 1, // Duração da animação
        scrollTrigger: {
            trigger: ".paragraph-about",
            start: "top 15%", // Inicia a animação quando o topo do elemento atinge 20% da viewport
            end: "top 0%", // Termina a animação quando o topo do elemento atinge 0% da viewport
            scrub: true, // Suaviza a animação conforme o scroll
            markers: false // Remove isso em produção
        }
    }); 
    }
});


document.addEventListener("DOMContentLoaded", () => {
    if(window.innerWidth > 1000) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".header-hr", {
        opacity: 0, // Define a opacidade final
        duration: 1, // Duração da animação
        scrollTrigger: {
            trigger: ".header-hr",
            start: "top 15%", // Inicia a animação quando o topo do elemento atinge 20% da viewport
            end: "top 0%", // Termina a animação quando o topo do elemento atinge 0% da viewport
            scrub: true, // Suaviza a animação conforme o scroll
            markers: false // Remove isso em produção
        }
    });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    if(window.innerWidth > 1000) {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".paragraph-about2", {
            opacity: 0, // Define a opacidade final
            duration: 1, // Duração da animação
            scrollTrigger: {
                trigger: ".paragraph-about2",
                start: "top 15%", // Inicia a animação quando o topo do elemento atinge 20% da viewport
                end: "top 0%", // Termina a animação quando o topo do elemento atinge 0% da viewport
                scrub: true, // Suaviza a animação conforme o scroll
                markers: false // Remove isso em produção
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    if(window.innerWidth > 1000) {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".paragraph-about3", {
            opacity: 0, // Define a opacidade final
            duration: 1, // Duração da animação
            scrollTrigger: {
                trigger: ".paragraph-about3",
                start: "top 15%", // Inicia a animação quando o topo do elemento atinge 20% da viewport
                end: "top 0%", // Termina a animação quando o topo do elemento atinge 0% da viewport
                scrub: true, // Suaviza a animação conforme o scroll
                markers: false // Remove isso em produção
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    if(window.innerWidth > 1000) {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".paragraph-about4", {
            opacity: 0, // Define a opacidade final
            duration: 1, // Duração da animação
            scrollTrigger: {
                trigger: ".paragraph-about4",
                start: "top 15%", // Inicia a animação quando o topo do elemento atinge 20% da viewport
                end: "top 0%", // Termina a animação quando o topo do elemento atinge 0% da viewport
                scrub: true, // Suaviza a animação conforme o scroll
                markers: false // Remove isso em produção
            }
        });
    }
});





document.addEventListener("DOMContentLoaded", () => {
    if(window.innerWidth > 1000) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".mission-text", {
        opacity: 0, // Define a opacidade final
        duration: 1, // Duração da animação
        scrollTrigger: {
            trigger: ".mission-text",
            start: "top 15%", // Inicia a animação quando o topo do elemento atinge 20% da viewport
            end: "top -10%", // Termina a animação quando o topo do elemento atinge 0% da viewport
            scrub: true, // Suaviza a animação conforme o scroll
            markers: false // Remove isso em produção
        }
    });
    }
});



document.addEventListener("DOMContentLoaded", () => {
    if(window.innerWidth > 1000) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".number_count_container", {
        opacity: 0, // Define a opacidade final
        duration: 1, // Duração da animação
        scrollTrigger: {
            trigger: ".number_count_container",
            start: "top 15%", // Inicia a animação quando o topo do elemento atinge 20% da viewport
            end: "top 0%", // Termina a animação quando o topo do elemento atinge 0% da viewport
            scrub: true, // Suaviza a animação conforme o scroll
            markers: false // Remove isso em produção
        }
    });
    }
});



document.addEventListener("DOMContentLoaded", () => {
    if(window.innerWidth > 1000) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".knowMore-button", {
        opacity: 0, // Define a opacidade final
        duration: 1, // Duração da animação
        scrollTrigger: {
            trigger: ".knowMore-button",
            start: "top 15%", // Inicia a animação quando o topo do elemento atinge 20% da viewport
            end: "top 0%", // Termina a animação quando o topo do elemento atinge 0% da viewport
            scrub: true, // Suaviza a animação conforme o scroll
            markers: false // Remove isso em produção
        }
    });
    }
});




document.addEventListener("DOMContentLoaded", () => {
    if(window.innerWidth > 1000) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".service-item1", {
        opacity: 0, // Define a opacidade final
        duration: 1, // Duração da animação
        scrollTrigger: {
            trigger: ".service-item1",
            start: "top -15%", // Inicia a animação quando o topo do elemento atinge 20% da viewport
            end: "top -40%", // Termina a animação quando o topo do elemento atinge 0% da viewport
            scrub: true, // Suaviza a animação conforme o scroll
            markers: false // Remove isso em produção
        }
    });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    if(window.innerWidth > 1000) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".service-item2", {
        opacity: 0, // Define a opacidade final
        duration: 1, // Duração da animação
        scrollTrigger: {
            trigger: ".service-item2",
            start: "top -15%", // Inicia a animação quando o topo do elemento atinge 20% da viewport
            end: "top -40%", // Termina a animação quando o topo do elemento atinge 0% da viewport
            scrub: true, // Suaviza a animação conforme o scroll
            markers: false // Remove isso em produção
        }
    });
    }
});