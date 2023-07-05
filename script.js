// Smooth scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');
for (const scrollLink of scrollLinks) {
    scrollLink.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = scrollLink.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
}

// Form submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // You can add your own logic here to handle form submission
    // For example, sending the form data to a server or displaying a success message
});
