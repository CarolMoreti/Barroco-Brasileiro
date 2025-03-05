let seta = document.getElementById('arrow');
let info = document.getElementById('info');

seta.addEventListener('click', (event) => {
    event.preventDefault();
    if (window.getComputedStyle(info).display === "none") {
        info.style.display = "flex"; // Mostra a div se estiver oculta
        seta.style.transform = "rotate(180deg)";
    } else {
        info.style.display = "none"; // Esconde a div se estiver visível
        seta.style.transform = "rotate(0deg)";
    }
});