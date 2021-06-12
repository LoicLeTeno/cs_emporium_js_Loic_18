// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// button modal
let to_connexion = document.querySelector('#inscription a');
let to_inscription = document.querySelector('#connexion a');

to_connexion.addEventListener('click', () => {
    to_connexion.parentElement.classList.toggle('d-flex')
    to_connexion.parentElement.classList.toggle('d-none')

    to_inscription.parentElement.classList.toggle('d-flex')
    to_inscription.parentElement.classList.toggle('d-none')
});

to_inscription.addEventListener('click', () => {
    to_inscription.parentElement.classList.toggle('d-flex')
    to_inscription.parentElement.classList.toggle('d-none')

    to_connexion.parentElement.classList.toggle('d-flex')
    to_connexion.parentElement.classList.toggle('d-none')
});