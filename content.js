// Select the navbar and toggle button
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('nav ul');

// Function to toggle the navbar menu
navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
});

// Hide navbar on link click (optional)
navMenu.addEventListener('click', function() {
    navMenu.classList.remove('show');
});

// Scroll to top functionality (existing code)
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
};

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
