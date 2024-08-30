// script.js
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    heading.textContent = 'JavaScript estaa funcionando';
    heading.style.color = 'blue';
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50, // Ajuste de desplazamiento
                behavior: 'smooth'
            });
        });
    });
});
