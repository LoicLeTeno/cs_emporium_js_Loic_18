let height = document.querySelector('#titre').clientHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY >= height) {
        document.querySelector('nav').classList.add('fixed-top')
    } else {
        document.querySelector('nav').classList.remove('fixed-top')
    }
});