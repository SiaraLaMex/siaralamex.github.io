function changeLanguage(lang) {
    if (lang === 'es') {
        document.querySelector('h1').textContent = 'MI LABORATORIO CREATIVO';
        document.querySelector('p').textContent = 'POR SIARA';
        document.querySelector('#seccion2 h2').textContent = 'Qué hago';
        document.querySelector('#seccion2 p').textContent = 'Contenido de la segunda sección.';
        document.querySelector('#seccion3 h2').textContent = 'Mis proyectos';
        document.querySelector('#seccion3 p').textContent = 'Contenido de la tercera sección.';
    } else if (lang === 'en') {
        document.querySelector('h1').textContent = 'MY CREATIVE LAB';
        document.querySelector('p').textContent = 'BY SIARA';
        document.querySelector('#seccion2 h2').textContent = 'What do I do';
        document.querySelector('#seccion2 p').textContent = 'Content of the second section.';
        document.querySelector('#seccion3 h2').textContent = 'My projects';
        document.querySelector('#seccion3 p').textContent = 'Content of the third section.';
    }
}
