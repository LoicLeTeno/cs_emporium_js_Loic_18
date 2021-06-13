let slideIndex = 1;
let current_slide = 1;

// showSlides(slideIndex);
currentSlide(1);

setInterval( () => {
    currentSlide(current_slide);
    console.log(current_slide);

    current_slide++;
    
    if (current_slide == 5) {
        current_slide = 1;
    }
}, 5000);



// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove('show');
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add('show');
    dots[slideIndex - 1].className += " active";
}


let dot_array = Array.from(document.querySelectorAll('.dot'));

dot_array.forEach(e => {
    e.addEventListener('click', () => {
        currentSlide(e.dataset.target)
    })
});

