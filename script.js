function changeLanguage(language) {
    // Selecciona todos los elementos con la clase "text" o "nav-text"
    const elements = document.querySelectorAll('.text, .nav-text');

    elements.forEach(element => {
        // Cambia el texto según el idioma seleccionado
        element.textContent = element.getAttribute('data-' + language);
    });
}
