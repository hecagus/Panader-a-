document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const addToCartButtons = document.querySelectorAll('.btn.primary');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('change', () => {
            // Lógica adicional: cerrar el menú al hacer clic en un enlace (para móviles)
        });

        navLinks.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                menuToggle.checked = false;
            }
        });
    } else {
        console.error('Error: No se encontraron los elementos menu-toggle o nav-links.');
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace recargue la página
            const productDetail = this.closest('.product-detail') || this.closest('.menu-item'); // Encuentra el contenedor del producto
            let productName, productImage;

            if (productDetail.querySelector('.section-title')) {
                productName = productDetail.querySelector('.section-title').textContent;
                productImage = productDetail.querySelector('.product-image img').src;
            } else {
                productName = productDetail.querySelector('h3').textContent;
                productImage = productDetail.querySelector('img').src;
            }

            // Guarda la información en localStorage
            let cart = JSON.parse(localStorage.getItem('cart') || '[]'); // Obtiene el carrito actual o crea uno nuevo
            cart.push({
                name: productName,
                image: productImage
            });
            localStorage.setItem('cart', JSON.stringify(cart)); // Guarda el carrito actualizado

            alert('¡' + productName + ' añadido al carrito!'); // Muestra una alerta
        });
    });
});
