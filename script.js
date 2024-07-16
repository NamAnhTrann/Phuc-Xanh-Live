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

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const rememberMe = document.getElementById('remember-me').checked;

            if (localStorage.getItem('email') === email && localStorage.getItem('password') === password) {
                alert('Login successful!');
                if (rememberMe) {
                    localStorage.setItem('email', email);
                    localStorage.setItem('password', password);
                } else {
                    localStorage.removeItem('email');
                    localStorage.removeItem('password');
                }
                window.location.href = 'index.html'; // Redirect to index.html after successful login
            } else {
                alert('Invalid email or password');
            }
        });
    }
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

// Toggle password visibility
const togglePasswordButton = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

if (togglePasswordButton && passwordInput) {
    togglePasswordButton.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.textContent = type === 'password' ? 'Show' : 'Hide';
    });
}

// Handle signup form submission
const signupForm = document.querySelector('.login-box');
if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (email && password) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            alert('Signup successful!');
            window.location.href = 'login.html';
        } else {
            alert('Please fill in all fields.');
        }
    });
}
