//alert("Olá, Mundo!");
//console.log("Olá, Mundo!");

document.addEventListener("DOMContentLoaded", (event)=>{
        buscarInscritos();
        construirModal();
        fazoX();

        const temaLocal = localStorage.getItem("tema") || "light";
        document.body.setAttribute("data-theme", temaLocal);

        const btAlterarTema = document.getElementById("btAlterarTema");
        btAlterarTema.textContent = temaLocal == "dark" ? "Light" : "Dark";
});

function construirModal() {
        const botaoSaibaMais = document.getElementById("saiba-mais");
        const modal = document.getElementById("modal");
        botaoSaibaMais.addEventListener("click", ()=>{
                modal.classList.remove("hidden");
        });

        window.addEventListener("click", (e)=>{
                if(e.target == modal) {
                        modal.classList.add("hidden");
                }
        });
}

function fazoX(){
        const botaoX = document.getElementById("fechar-modal");
        const modal = document.getElementById("modal");
        botaoX.addEventListener("click", ()=>{
                modal.classList.add("hidden");
        })
}

function alterarTema(){
        const tema = document.body.getAttribute("data-theme");
        const novoTema = tema == 'dark' ? 'light' : 'dark';
        document.body.setAttribute("data-theme", novoTema);

        const btAlterarTema = document.getElementById("btAlterarTema");
        btAlterarTema.textContent = novoTema == "dark" ? "Light" : "Dark";

        localStorage.setItem("tema", novoTema);
}

function buscarInscritos(){
        //fetch("https://jsonplaceholder.typicode.com/users")
        fetch("json/inscritos.json")
        .then(res => res.json())
        .then(res => {
                const divInscritos = document.getElementById('inscritos');
                res.forEach(user => {
                        const novoParagrafo = document.createElement("p");
                        novoParagrafo.textContent = `Nome: ${user.nome}`;
                        divInscritos.appendChild(novoParagrafo);
                })
        });

        //fetch("json/inscritos.json").then(res => {console.log(res.json())});
}