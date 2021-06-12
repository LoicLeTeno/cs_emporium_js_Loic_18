// MODE SOMBRE
    // MÉTHODE
function darkside() {
    let dark = document.body;
        dark.className= "dark-mode";
}

function lightside() {
    let light = document.body; 
        light.className= "";
}

    // ON
let button_black = document.querySelector('.input_dark');
button_black.addEventListener('click', () => {
    darkside();
});

    // OFF
let button_white = document.querySelector('.input_light');
button_white.addEventListener('click', () => {
    lightside();
});


// 3CARDS BARRE
let cards = Array.from(document.querySelectorAll('.card'));
cards.forEach(e => {
    e.addEventListener('mouseover', () => {
        e.classList.add('hover');
    })

    e.addEventListener('mouseout', () => {
        e.classList.remove('hover')
    })
})