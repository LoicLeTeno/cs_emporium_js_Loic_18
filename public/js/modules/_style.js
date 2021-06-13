// MODE SOMBRE
let nav = document.querySelector('nav');
let nav_a = Array.from(document.querySelectorAll('nav a'));


    // MÉTHODE
function darkside(dark) {
        dark.classList.add('dark-mode');
}

function lightside(light) {
        light.classList.remove('dark-mode');
}

    // ON
let button_black = document.querySelector('.input_dark');
button_black.addEventListener('click', () => {
    darkside(document.body);

    darkside(nav);

    nav_a.forEach(e => {
        darkside(e);
    })
});

    // OFF
let button_white = document.querySelector('.input_light');
button_white.addEventListener('click', () => {
    lightside(document.body);

    lightside(nav);

    nav_a.forEach(e => {
        lightside(e);
    })
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