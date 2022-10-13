/*=========== EMAIL JS =============*/
const   contactForm = document.getElementById('contact-form'),
        contactName = document.getElementById('contact-name'),
        contactEmail = document.getElementById('contact-email'),
        contactProject = document.getElementById('contact-project'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // Check if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
        // Add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        // Show message
        contactMessage.textContent = 'Escreva em todos os campos 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_zi55xwj','template_biwsawl','#contact-form','rr7_eBEcvxp1nQoZO')
            .then(() =>{

                // Remove message after five seconds
                setTimeout(() =>{
                    contactMessage.textContent = ''
                }, 5000)
            }, (error) => {
                alert('Ops! Aconteceu algum erro...', error)
            })

        // Show message and add color
         contactMessage.classList.add('color-blue')
        contactMessage.textContent = 'Mensagem Enviada ✅'

        // To clear the input field
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)

/*======= Dark Light Theme =====*/
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'ri-sun-foggy-line'


// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Js OwlCarousel

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        center: true,
        nav:true,        
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:3,               
            }
        }
    })
});