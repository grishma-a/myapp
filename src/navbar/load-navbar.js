// Function to load navbar into any page
function loadNavbar() {
    fetch('/myapp/src/navbar/navbar.html')  // Changed to absolute path
        .then(response => response.text())
        .then(data => {
            // Insert navbar at the beginning of the body
            document.body.insertAdjacentHTML('afterbegin', data);

            // Set active page based on current URL
            setActivePage();

            // Re-initialize mobile menu functionality after navbar is loaded
            initializeMobileMenu();
        })
        .catch(error => console.error('Error loading navbar:', error));
}

// Function to set active page based on current URL
function setActivePage() {
    // Get current page path
    const currentPath = window.location.pathname;

    // Helper function to check if the link matches current page
    function isActiveLink(href) {
        // For home page
        if (href === '/myapp/index.html' || href === '/myapp/') {
            return currentPath === '/myapp/index.html' ||
                currentPath === '/myapp/' ||
                currentPath.endsWith('/myapp/');
        }

        // For other pages
        return currentPath.includes(href.replace('/myapp/', ''));
    }

    // Check desktop nav links
    document.querySelectorAll('.nav-list a.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (isActiveLink(href)) {
            link.classList.add('active');
        }
    });

    // Check mobile nav links
    document.querySelectorAll('.mobile-nav-list a.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (isActiveLink(href)) {
            link.classList.add('active');
        }
    });
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