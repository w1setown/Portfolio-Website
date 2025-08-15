/**
 * Toggle timeline job details
 * @param {string} jobId - The ID of the job details to toggle
 */
function toggleDetails(jobId) {
    const details = document.getElementById(jobId);
    if (details) {
        details.classList.toggle('active');
        
        // Close other open details
        const allDetails = document.querySelectorAll('.timeline-details');
        allDetails.forEach(detail => {
            if (detail.id !== jobId) {
                detail.classList.remove('active');
            }
        });
    }
}

/**
 * Show a specific section and hide all others
 * @param {string} sectionId - The ID of the section to show
 */