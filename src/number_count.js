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
   
    // gsap.to(".knowMore-button", {
    //     display: "block",
    //     duration: 2,
    //     opacity: 1,
    //     stagger:0.2,
    //     y: 0,
    //     ease: "power2.out",
    //     delay: 2 // Delay of 3 seconds
    // });
    // GSAP animation for the meetOurTeam component with a delay of 5 seconds
    gsap.to(".meetOurTeam", {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power2.out",
        delay: 1.5 // Delay of 5 seconds
    });

    // Scroll button functionality
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
// document.addEventListener("DOMContentLoaded", () => {
//     const servicesSection = document.querySelector('#services');
//     const serviceItems = document.querySelectorAll('.service-item');

//     const observerOptions = {
//         root: null, // Use the viewport as the root
//         rootMargin: '0px',
//         threshold: 0.1 // Trigger when 10% of the section is visible
//     };

//     const observerCallback = (entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 // Inicia a animação GSAP quando a seção estiver visível
//                 gsap.from(serviceItems, {
//                     duration: 3,
//                     y: 100,
//                     opacity: 0,
//                     stagger: 0.2,
//                     ease: "power2.out",
//                     delay: 0.5
//                 });
//                 // Desconecta o observador após a animação ser iniciada
//                 observer.unobserve(entry.target);
//             }
//         });
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);
//     observer.observe(servicesSection);
// });
// document.addEventListener("DOMContentLoaded", () => {
//     gsap.registerPlugin(ScrollTrigger);

//     const serviceItems = document.querySelectorAll('.service-item');

//     serviceItems.forEach(item => {
//         gsap.fromTo(item, 
//             { scale: 0.5, opacity: 0 }, 
//             { 
//                 scale: 1, 
//                 opacity: 1, 
//                 duration: 1, 
//                 scrollTrigger: {
//                     trigger: item,
//                     start: "top bottom", // Quando o topo do item atinge o fundo da viewport
//                     end: "top top", // Quando o topo do item atinge o topo da viewport
//                     scrub: true, // Suaviza a animação conforme o scroll
//                     markers: true // Remove isso em produção
//                 }
//             }
//         );
//     });
// });

