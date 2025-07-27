document.addEventListener('DOMContentLoaded', function() {
    const arButton = document.getElementById('ar-viewer-button');
    const arPopup = document.getElementById('ar-popup');
    const closeButton = document.querySelector('.close-button');
    const arIframe = document.getElementById('ar-iframe');

    const arDemoUrl = 'https://jontimi.github.io/3dModelARviewer/';

    if (arButton && arPopup && closeButton && arIframe) {
        arButton.addEventListener('click', function(event) {
            event.preventDefault();
            arIframe.src = arDemoUrl; // טעינת ה-URL לתוך ה-iframe
            arPopup.style.display = 'flex'; // הצגת חלונית הפופ-אפ
        });

        closeButton.addEventListener('click', function() {
            arPopup.style.display = 'none'; // הסתרת חלונית הפופ-אפ
            arIframe.src = 'about:blank'; // איפוס ה-iframe כדי למנוע טעינה ברקע
        });
    }
});