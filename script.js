document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('change', () => {
            // Si el checkbox está marcado, el menú se muestra (ya manejado por CSS)
            
            // Lógica adicional: cerrar el menú al hacer clic en un enlace (para móviles)
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    // Cierra el menú desmarcando el checkbox
                    menuToggle.checked = false;
                });
            });
        });
    }
});
