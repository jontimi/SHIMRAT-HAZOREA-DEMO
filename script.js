document.addEventListener('DOMContentLoaded', function() {
    const arButton = document.getElementById('ar-viewer-button');
    const arPopup = document.getElementById('ar-popup');
    const closeButton = document.querySelector('.close-button');
    const arIframe = document.getElementById('ar-iframe');

    // This is the correct URL for the Shimrat Hazorea page.
    // It loads the main viewer page but specifies the brand.
    const arDemoUrl = 'https://jontimi.github.io/3dModelARviewer/?brand=shimrat';

    if (arButton && arPopup && closeButton && arIframe) {
        arButton.addEventListener('click', function(event) {
            event.preventDefault();
            arIframe.src = arDemoUrl; // Load the specific branded URL into the iframe
            arPopup.style.display = 'flex'; // Show the pop-up
        });

        closeButton.addEventListener('click', function() {
            arPopup.style.display = 'none'; // Hide the pop-up
            arIframe.src = 'about:blank'; // Reset the iframe to stop background loading
        });

        // Optional: close the pop-up when clicking outside the content
        window.addEventListener('click', function(event) {
            if (event.target === arPopup) {
                arPopup.style.display = 'none';
                arIframe.src = 'about:blank';
            }
        });
    }
});