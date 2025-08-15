/**
 * Show a specific section and hide all others
 * @param {string} sectionId - The ID of the section to show
 */
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Find and activate the corresponding nav link
    navLinks.forEach(link => {
        if (link.getAttribute('onclick') === `showSection('${sectionId}')`) {
            link.classList.add('active');
        }
    });
    
    // Close mobile menu if open
    const mobileMenu = document.getElementById("myLinks");
    if (mobileMenu) {
        mobileMenu.classList.remove('show');
    }
}

/**
 * Toggle the mobile navigation menu
 */
function toggleMobileMenu() {
    const mobileMenu = document.getElementById("myLinks");
    if (mobileMenu) {
        mobileMenu.classList.toggle('show');
    }
}

/**
 * Close mobile menu when clicking outside of it
 * @param {Event} event - The click event
 */
function handleOutsideClick(event) {
    const mobileMenu = document.getElementById("myLinks");
    const hamburger = document.querySelector('.icon');
    
    if (mobileMenu && mobileMenu.classList.contains('show')) {
        if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
            mobileMenu.classList.remove('show');
        }
    }
}

/**
 * Initialize the application
 */
function init() {
    // Show the title section by default
    showSection('TITLE');
    
    // Add event listener for closing mobile menu when clicking outside
    document.addEventListener('click', handleOutsideClick);
    
    // Handle browser back/forward buttons (optional enhancement)
    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.section) {
            showSection(event.state.section);
        }
    });
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

// Legacy function name for compatibility
function myFunction() {
    toggleMobileMenu();
}