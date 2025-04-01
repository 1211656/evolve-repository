
/**
 * Este método vai fazer um scroll automático com uma transição suave para a decção dos serviços
 */
document.addEventListener('DOMContentLoaded', () => {
    const knowMoreButton = document.getElementById('knowMore-button')
    knowMoreButton.addEventListener('click', () => {
        
        const serviceSection = document.getElementById('services')

        serviceSection.scrollIntoView({
            behavior: 'smooth'
        })
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const setaParaBaixoParaoAboutButton = document.getElementById('seta-baixo-about')
    setaParaBaixoParaoAboutButton.addEventListener('click', () => {
        const aboutsection = document.getElementById('about')

        aboutsection.scrollIntoView({
            behavior: 'smooth',
            
        })
    })
})

document.addEventListener('DOMContentLoaded', ()=> {
    const servicosdiversificadostoservices = document.getElementById('servicos-diversificados-to-services')
    servicosdiversificadostoservices.addEventListener('click', ()=>{
        const servicesection = document.getElementById('services')

        servicesection.scrollIntoView({
            behavior: 'smooth',
        })
    }) 
})

document.addEventListener('DOMContentLoaded', () => {
    const reachOutButton = document.getElementById('reachout-button')
    reachOutButton.addEventListener('click', () => {
        window.location.href = 'mailto:evolve@gmail.com'
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const emailClickButton = document.getElementById('emailClickAndSend')
    emailClickButton.addEventListener('click', () => {
        window.location.href = 'mailto:evolve@gmail.com'
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const emailForm = document.getElementById('email-form');
    emailForm.addEventListener('submit', async (event) => {
        event.preventDefault(); 

        const fullName = document.getElementById('fullName').value;
        const email_id2 = document.getElementById('email_id').value;
        const message2 = document.getElementById('message').value;
        const honeypot = document.getElementById('honeypot').value;
        
        if (honeypot) {
            alert("Detecção de bot! Envio bloqueado.");
            return;
        }

        
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        if (!isValidEmail(email_id2)) {
            alert("Por favor, insira um email válido.");
            return; 
        }

        const templateParams = {
            name: fullName,
            message: message2,
            email: email_id2
        };

        try {
            const response = await emailjs.send('service_vxvvisp', 'template_7j9m7w6', templateParams);
            console.log('SUCCESS!', response.status, response.text);
            alert("Email enviado com sucesso!");
            emailForm.reset();
        } catch (error) {
            console.log("FAILED...", error);
            alert("Falha ao enviar o email. Tente novamente.");
        }
    });
});