
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
    const sendMailButton = document.getElementById('sendMail');
    sendMailButton.addEventListener('click', (event) => {
        event.preventDefault(); // Evita o comportamento padrão do botão

        // Coleta os dados do formulário
        const fullName = document.getElementById('fullName').value;
        const email_id = document.getElementById('email_id').value;
        const message = document.getElementById('message').value;

        // Configura os parâmetros do email
        const templateParams = {
            from_name: fullName,
            from_email: email_id,
            message: message
        };

        // Envia o email usando EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email enviado com sucesso!');
            }, (error) => {
                console.log('FAILED...', error);
                alert('Falha ao enviar o email. Tente novamente.');
            });
    });
});