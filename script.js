// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Add your JavaScript code here

    // Example: Add a click event to the header logo
    const headerLogo = document.querySelector('.header-logo');
    headerLogo.addEventListener('click', function() {
        alert('Header logo clicked!');
    });

    console.log("Page loaded!");
});
document.addEventListener("DOMContentLoaded", function() {
    const roadmapSection = document.querySelector('.roadmap');
    const timelineEvents = document.querySelectorAll('.event');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateTimeline() {
        timelineEvents.forEach((event, index) => {
            if (isInViewport(event)) {
                event.style.animation = `fadeInUp 0.6s ease-in-out ${index * 0.2}s`;
                event.style.opacity = 1;
                event.style.transform = 'translateY(0)';
            }
        });
    }

    // Initial animation check
    animateTimeline();

    // Add scroll event listener to trigger animation
    window.addEventListener('scroll', animateTimeline);

    console.log("Page loaded!");
});
