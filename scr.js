document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const fullScreenOverlay = document.getElementById('full-screen-overlay');
    const fullScreenImage = document.getElementById('full-screen-image');
    const closeBtn = fullScreenOverlay.querySelector('.close');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            fullScreenImage.src = item.src;
            fullScreenOverlay.classList.remove('hidden');
            setTimeout(() => {
                fullScreenOverlay.style.opacity = '1';
                fullScreenOverlay.style.visibility = 'visible';
            }, 10);
        });
    });

    closeBtn.addEventListener('click', () => {
        fullScreenOverlay.style.opacity = '0';
        fullScreenOverlay.style.visibility = 'hidden';
        setTimeout(() => {
            fullScreenOverlay.classList.add('hidden');
        }, 300);
    });

    fullScreenOverlay.addEventListener('click', (e) => {
        if (e.target === fullScreenOverlay) {
            fullScreenOverlay.style.opacity = '0';
            fullScreenOverlay.style.visibility = 'hidden';
            setTimeout(() => {
                fullScreenOverlay.classList.add('hidden');
            }, 300);
        }
    });
});
