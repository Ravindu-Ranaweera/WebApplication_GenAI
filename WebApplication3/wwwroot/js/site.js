// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const cardSections = document.querySelectorAll('.card-section');

window.addEventListener('scroll', () => {
    for (const cardSection of cardSections) {
        const boundingClientRect = cardSection.getBoundingClientRect();

        if (boundingClientRect.top >= 0 && boundingClientRect.bottom <= window.innerHeight) {
            cardSection.classList.add('in-viewport');
        } else {
            cardSection.classList.remove('in-viewport');
        }
    }
});
