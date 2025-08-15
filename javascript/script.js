const links = document.querySelectorAll('.link');
const toggleTheme = document.getElementById('toggle-theme');
const logo = document.getElementById('logo');
const fundo = document.getElementById('page');
const supino = document.getElementById('supino')
// === Estado inicial ===
let themes = 'lighttheme';
updateTheme(themes);

// === Funções utilitárias ===
function updateTheme(theme) {
    logo.src = `./images/logo_${theme}.png`;
    fundo.style.backgroundImage = `url(./images/fundo_${theme}.jpg)`;
    if (supino) supino.src = `./images/supino_${theme}.png`;
}

function toggleDarkMode() {
    themes = (themes === 'darktheme') ? 'lighttheme' : 'darktheme';
    updateTheme(themes);
    toggleTheme.textContent = themes;
    document.body.classList.toggle('darktheme');
    console.log(themes);
}

// === Troca de tema ao clicar no botão ===
toggleTheme.addEventListener('click', toggleDarkMode);

// === Tema vindo da URL ===
const tema = new URLSearchParams(window.location.search).get("tema");
if (tema) {
    themes = tema;
    updateTheme(tema);
    if (tema === 'darktheme') document.body.classList.add('darktheme');
}

// === Navegação com preservação do tema ===
links.forEach(link => {
    link.addEventListener('click', e => {
        const url = e.target.innerText.trim();
        const destino = (url === 'DESCOBRIR MAIS') ? 'planos' : url;
        const linkFinal = `${destino}.html?tema=${themes}`;
        (url === 'HOME') ? window.location = linkFinal : window.open(linkFinal);
    });
});