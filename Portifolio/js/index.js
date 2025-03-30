emailjs.init("25X9A9Sla3tE5d_WD");

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("status");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        emailjs.sendForm("service_uvpam2s", "template_yjgg5nm", this)
        .then(() => {
            status.innerHTML = "<p style='color: green;'>Mensagem enviada com sucesso!</p>";
            form.reset();
        })
        .catch(() => {
            status.innerHTML = "<p style='color: red;'>Ocorreu um erro. Tente novamente.</p>";
        });
    });
});

let bntMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

bntMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
});

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
});

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
});