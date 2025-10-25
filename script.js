document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const categoryButtons = document.querySelectorAll('.category-buttons .btn');
  const menuItems = document.querySelectorAll('.menu-item');

  // Menú responsive
  if (menuToggle && navLinks) {
    navLinks.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') menuToggle.checked = false;
    });
  }

  // Filtro de categorías
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;

      // Cambiar estado activo
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Mostrar/Ocultar productos
      menuItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Mostrar "Pan de Dulce" por defecto
  categoryButtons[0].click();
});
