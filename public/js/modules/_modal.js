// MODAL
let modal = document.getElementById("myModal");

// BUTTON MODAL
let btn = document.getElementById("myBtn");

// X POUR FERMER 
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}

// SORTIR EN CLIQUANT EN DEHORS DU MODAL
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// button modal
let to_connexion = document.querySelector('#inscription a');
let to_inscription = document.querySelector('#connexion a');

// PAGE CONNEXION
to_connexion.addEventListener('click', () => {
    to_connexion.parentElement.classList.toggle('d-flex')
    to_connexion.parentElement.classList.toggle('d-none')

    to_inscription.parentElement.classList.toggle('d-flex')
    to_inscription.parentElement.classList.toggle('d-none')
});

// PAGE INSCRIPTION
to_inscription.addEventListener('click', () => {
    to_inscription.parentElement.classList.toggle('d-flex')
    to_inscription.parentElement.classList.toggle('d-none')

    to_connexion.parentElement.classList.toggle('d-flex')
    to_connexion.parentElement.classList.toggle('d-none')
});