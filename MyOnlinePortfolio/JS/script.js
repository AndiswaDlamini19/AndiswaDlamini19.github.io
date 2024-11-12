document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Initialize AOS animations
AOS.init({
    duration: 1200, // Animation duration
    easing: 'ease-in-out', // Easing function
    once: true, // Whether animation should happen only once
});

// Dark Mode Toggle Functionality
const toggleButton = document.getElementById('toggle-darkmode');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Store dark mode preference in local storage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});

// Check and apply dark mode preference on load
window.addEventListener('load', () => {
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});

// Hover animation using JS to add additional effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'rotate(3deg) scale(1.05)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'rotate(0deg) scale(1)';
    });
});

