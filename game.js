



document.addEventListener('DOMContentLoaded', (event) => {
    const openPopupButton = document.getElementById('open-popup');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('close-popup');

    openPopupButton.addEventListener('click', () => {
        popup.classList.add('visible');
    });

    closePopupButton.addEventListener('click', () => {
        popup.classList.remove('visible');
    });

    // Close the popup when clicking outside of it
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.remove('visible');
        }
    });

});

// *************************************************************************************************************************************

    document.addEventListener('DOMContentLoaded', (event) => {
    const openPopupButton = document.getElementById('open-popup1');
    const popup = document.getElementById('popup1');
    const closePopupButton = document.getElementById('close-popup1');
    const gamingModeButton = document.getElementById('gaming-mode');
    const normalModeButton = document.getElementById('normal-mode');

    openPopupButton.addEventListener('click', () => {
        popup.classList.add('visible');
    });

    closePopupButton.addEventListener('click', () => {
        popup.classList.remove('visible');
    });

    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.remove('visible');
        }
    });

    gamingModeButton.addEventListener('click', () => {
        document.body.style.backgroundImage = 'url("backgroundImage2.jpg")'; // Change to a dark color for Freez mode
        popup.classList.remove('visible');
    });

    normalModeButton.addEventListener('click', () => {
        document.body.style.backgroundImage = 'url("backgroundImage.jpg")'; // Change to the original color for Fire mode
        popup.classList.remove('visible');
    });
});

// *************************************************************************************************************************************

// document.querySelector('.clickButton').addEventListener('click', function() {
//     var audio = document.getElementById('clickSound');
//     audio.play();
// });


window.addEventListener('load', function() {
    var audio = document.getElementById('backgroundMusic');
    audio.play().catch(function(error) {
        console.log('Autoplay prevented:', error);
    });
});