// Function to load navbar into any page
function loadNavbar() {
    fetch('../src/navbar/navbar.html')
        .then(response => response.text())
        .then(data => {
            // Insert navbar at the beginning of the body
            document.body.insertAdjacentHTML('afterbegin', data);

            // Re-initialize mobile menu functionality after navbar is loaded
            initializeMobileMenu();
        })
        .catch(error => console.error('Error loading navbar:', error));
}

// Initialize mobile menu functionality
function initializeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const closeMenu = document.getElementById('closeMenu');

    function toggleMobileMenu() {
        if (hamburger && mobileNav && mobileOverlay) {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        }
    }

    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    if (closeMenu) {
        closeMenu.addEventListener('click', toggleMobileMenu);
    }
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu when clicking on links
    document.querySelectorAll('.mobile-nav-list a').forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });
}

// Load navbar when page loads
document.addEventListener('DOMContentLoaded', loadNavbar);