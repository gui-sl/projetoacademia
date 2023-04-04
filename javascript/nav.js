const btnMobile = document.getElementById('btn-mobile');
var logo = document.getElementById('logo');
var logofooter = document.getElementById('logo-footer');
var fundo = document.getElementById('page');
var links = document.querySelectorAll('.link');
var toggleTheme = document.getElementById('switch');

var themes = 'lighttheme';
logo.setAttribute('src', `../images/logo_lighttheme.png`);
logofooter.setAttribute('src', `../images/logo_lighttheme.png`);
fundo.style.backgroundImage = `url(../images/fundo_lighttheme.jpg)`;


// método menu mobile
function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();

    const nav = document.getElementById('nav');

    nav.classList.toggle('active');

    const active = nav.classList.contains('active');

    event.currentTarget.setAttribute('aria-expanded', active);

    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// método alterar tema
toggleTheme.onclick = function(){
    if(themes == 'darktheme'){
        themes = 'lighttheme'
        logo.setAttribute('src', `../images/logo_${themes}.png`)
        logofooter.setAttribute('src', `../images/logo_${themes}.png`)
        fundo.style.backgroundImage = `url(../images/fundo_${themes}.jpg)`

    }
    else{
        themes = 'darktheme'
        logo.setAttribute('src', `../images/logo_${themes}.png`)
        logofooter.setAttribute('src', `../images/logo_${themes}.png`)
        fundo.style.backgroundImage = `url(../images/fundo_${themes}.jpg)`
    }
    toggleTheme.innerHTML = themes
    document.body.classList.toggle('darktheme')
    console.log(themes)
}

// passando parametros através da url
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        url = e.target.innerHTML;
        console.log(url)
        if(url == 'HOME')
        {
            window.location = `${url}.html?tema=${themes}`
        }
        else if(url == 'DESCOBRIR MAIS'){
            window.location = `planos.html?tema=${themes}`
        }
        else
        {
            window.open(`${url}.html?tema=${themes}`)
        }        
    })
})

const urlParams = new URLSearchParams(window.location.search);
const tema = urlParams.get("tema") 
console.log(tema)

if(tema != null)
{
    if(tema == 'darktheme')
    {
        document.body.classList.toggle('darktheme')
        logo.setAttribute('src', `../images/logo_${tema}.png`)
        logofooter.setAttribute('src', `../images/logo_${tema}.png`)
        fundo.style.backgroundImage = `url(../images/fundo_${tema}.jpg)`
        console.log('certo')
        themes = tema
    }
}

