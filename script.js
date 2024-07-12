// Array of images to show in the background slider
var images = [
    'images/20240615_111722.jpg',
    'images/20240615_111753.jpg',
    'images/20240615_163045.jpg'
];
var nextImage = 1;

function doSlideshow() {
    if (nextImage >= images.length) {
        nextImage = 0;
    }
    var nextImageUrl = 'url("' + images[nextImage++] + '")';
    var newSlide = $('<div class="background-slider"></div>').css('background-image', nextImageUrl).hide();
    $('.background-header').append(newSlide);
    newSlide.fadeIn(1000, function() { // 1 second fade in
        $('.background-slider').not(this).remove(); // Remove the old slide
    });
    setTimeout(doSlideshow, 7000); // 7 seconds total per image (5 seconds display + 2 seconds transition)
}

$(document).ready(function() {
    doSlideshow();

    // Toggle active class on container boxes
    const boxes = document.querySelectorAll('.container-box');
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            box.classList.toggle('active');
        });
    });

    // User icon dropdown functionality
    const userIcon = document.getElementById('user-icon');
    const loginSignup = document.getElementById('login-signup');
    
    userIcon.addEventListener('click', function() {
        loginSignup.classList.toggle('show');
    });

    // Hide the dropdown when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!userIcon.contains(event.target) && !loginSignup.contains(event.target)) {
            loginSignup.classList.remove('show');
        }
    });
});

// Redirect functions
function redirectToLogin() {
    window.location.href = 'login.html';
}

function redirectToSignup() {
    window.location.href = 'signup.html';
}

// Navigation function for category page
function goToCategory() {
    window.location.href = 'category.html'; // Adjust as necessary for your category page
}
const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });