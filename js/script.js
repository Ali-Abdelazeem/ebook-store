// validation 

        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (() => {
            'use strict'

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            const forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
            Array.from(forms).forEach(form => {
                form.addEventListener('submit', event => {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
        })()
// validation 


// work nvigation scroll 

function scrollUser() {

    window.addEventListener("scroll" , ()=> {
        const navEl = document.querySelector("#nav-top")
    
        if (window.scrollY >=  50) {
            navEl.classList.add("bg-dark")
            navEl.classList.add("navbar-s")
        } else if (window.scrollY <=  10) {
            navEl.classList.remove("bg-dark")
            navEl.classList.remove("navbar-s")
        }
    
    })
}
document.addEventListener('DOMContentLoaded', scrollUser);
// work nvigation scroll 

// trigger modals 



// trigger modals 
