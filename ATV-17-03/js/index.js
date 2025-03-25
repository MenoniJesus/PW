//alert("Olá, Mundo!");
//console.log("Olá, Mundo!");

document.addEventListener("DOMContentLoaded", (event)=>{
        buscarInscritos();
});

function alterarTema(){
        //Dom -> document object model
        const tema = document.body.getAttribute("data-theme");
        const novoTema = tema == 'dark' ? 'light' : 'dark';
        document.body.setAttribute("data-theme", novoTema);

        const btAlterarTema = document.getElementById("btAlterarTema");
        btAlterarTema.textContent = btAlterarTema.textContent == "Light" ? "Dark" : "Light";
}

function buscarInscritos(){
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(res => {
                const divInscritos = document.getElementById('inscritos');
                res.forEach(user => {
                        const novoParagrafo = document.createElement("p");
                        novoParagrafo.textContent = `Nome: ${user.name}`;
                        divInscritos.appendChild(novoParagrafo);
                })
        });

        //fetch("json/inscritos.json").then(res => {console.log(res.json())});
}