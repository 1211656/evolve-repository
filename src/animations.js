document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.services-container, .service-item');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.getBoundingClientRect().height;

        // Verifique se o elemento está parcialmente ou completamente dentro da viewport
        const isElementInView = elementTop < windowHeight && elementTop + elementHeight > 0;

        if (isElementInView) {
            // Calcule a porcentagem da altura do elemento visível na viewport
            const visibleHeight = Math.min(elementHeight, windowHeight - elementTop);
            const visibilityRatio = visibleHeight / elementHeight;

            // Aplique a escala dependendo da visibilidade
            const scaleValue =  (0.9 * visibilityRatio); // Aumenta até 1.5x do tamanho original

            element.style.transform = `scale(${scaleValue})`;
        } else {
            // Quando o elemento sai da viewport, diminui a escala
            element.style.transform = `scale(0.8)`;  // Defina um tamanho mínimo
        }
    });
});
