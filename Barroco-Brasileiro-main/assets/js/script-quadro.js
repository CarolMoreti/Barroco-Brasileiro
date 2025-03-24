let quadro = document.getElementById('quadro');
let info = document.getElementById('info');

quadro.addEventListener('click', (event) => {
    event.preventDefault();
    if (window.getComputedStyle(info).display === "none") {
        info.style.display = "flex"; // Mostra a div se estiver oculta
    } else {
        info.style.display = "none"; // Esconde a div se estiver visível
    }
});

let botao = document.getElementById('botao')
let campo = document.getElementById('campo')

botao.addEventListener('click', (event) => {
    event.preventDefault();
    let leftValue = campo.style.left;
    if (leftValue === "-50%" || leftValue === "") {
        campo.style.left = "4%";
        botao.innerText = "Menos -";
        botao.style.backgroundColor ="#a56710"
    } else {
        campo.style.left = "-50%";
        botao.innerText = "Mais +";
        botao.style.backgroundColor ="#a37534"
    }
});