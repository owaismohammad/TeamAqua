function bulgeOut(card) {
    card.style.transform = 'scale(1.1)';
}

function shrink(card) {
    card.style.transform = 'scale(1)';
}

function showImage() {
    document.querySelector('.overlay').classList.add('active');
}

function closeImage() {
    document.querySelector('.overlay').classList.remove('active');
}
function scrollGallery(direction) {
    const gallery = document.querySelector('.gallery');
    const scrollAmount = 300 * direction; // Adjust the scroll distance as needed
    gallery.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });}
    function scrollGallery(direction) {
        const gallery = document.querySelector('.gallery');
        const scrollAmount = 400; // Adjust scroll amount as needed
    
        if (direction === -1) {
            // Scroll left
            gallery.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        } else if (direction === 1) {
            // Scroll right
            gallery.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    }
    