// MODE SOMBRE
let titre = document.querySelector('#titre span');
let nav = document.querySelector('nav');
let toggle = document.querySelector('#hamburger');
let nav_a = Array.from(document.querySelectorAll('nav a'));
console.log(titre);


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

    titre.classList.add('span-2')

    darkside(nav);

    nav_a.forEach(e => {
        darkside(e);
    })

    darkside(toggle);
});

    // OFF
let button_white = document.querySelector('.input_light');
button_white.addEventListener('click', () => {
    lightside(document.body);

    titre.classList.remove('span-2')

    lightside(nav);

    nav_a.forEach(e => {
        lightside(e);
    })

    lightside(toggle);
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