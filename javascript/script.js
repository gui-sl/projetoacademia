// declarando elementos HTML
var links = document.querySelectorAll('.link');
var toggleTheme = document.getElementById('toggle-theme');
var logo = document.getElementById('logo');
var fundo = document.getElementById('page');
var supino = document.getElementById('supino');
var themes = 'lighttheme';
logo.setAttribute('src', `./images/logo_lighttheme.png`);
fundo.style.backgroundImage = `url(./images/fundo_lighttheme.jpg)`;

//função para alterar o tema
toggleTheme.onclick = function(){
    
    if(themes == 'darktheme'){
        themes = 'lighttheme'
        logo.setAttribute('src', `./images/logo_${themes}.png`)
        fundo.style.backgroundImage = `url(./images/fundo_${themes}.jpg)`
        if(supino != null){
            supino.setAttribute('src', `./images/supino_${themes}.png`) 
        }
        
    }
    else{
        themes = 'darktheme'
        logo.setAttribute('src', `./images/logo_${themes}.png`)
        fundo.style.backgroundImage = `url(./images/fundo_${themes}.jpg)`
        if(supino != null){
            supino.setAttribute('src', `./images/supino_${themes}.png`) 
        }
    }
    toggleTheme.innerHTML = themes
    document.body.classList.toggle('darktheme')
    console.log(themes)
}

//pegando parametros passados para a URL
const urlParams = new URLSearchParams(window.location.search);
const tema = urlParams.get("tema") // tema
console.log(tema)


if(tema != null)
{
    if(tema == 'darktheme')
    {
        document.body.classList.toggle('darktheme')
        logo.setAttribute('src', `./images/logo_${tema}.png`)
        fundo.style.backgroundImage = `url(./images/fundo_${tema}.jpg)`
        
        console.log('certo')
        themes = tema
    }
}

//navegação enviando parametros para as paginas
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        url = e.target.innerHTML;
        console.log(url)
        if(url == 'HOME')
        {
            window.location = `${url}.html?tema=${themes}`
        }
        else
        {
            window.open(`${url}.html?tema=${themes}`)
        }        
    })
})

//animação

if(supino != null){
    console.log(supino.value)
    var interval = window.setInterval(function(){
        if(supino.value == undefined){
            supino.setAttribute('src', `./images/supino2_${themes}.png`)
            supino.value = 1
        }else{
            supino.value = undefined
            supino.setAttribute('src', `./images/supino_${themes}.png`)
        }
    }, 700);
    

}
