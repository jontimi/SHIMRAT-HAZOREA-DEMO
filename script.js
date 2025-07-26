document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.querySelector('.main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const arButton = document.getElementById('ar-viewer-button');

    // Handle thumbnail clicks
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Update the main image source
            mainImage.src = thumbnail.src;

            // Update the active class for styling
            thumbnails.forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        });
    });

    // Handle the AR viewer button click
    arButton.addEventListener('click', () => {
        const arViewerUrl = 'https://jontimi.github.io/3dModelARviewer/?model=path_to_your_shimrat_hazorea_tsuf_model.glb';
        window.open(arViewerUrl, '_blank');
    });
});
