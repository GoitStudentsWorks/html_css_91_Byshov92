(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const toggleMenuBtn = document.querySelector('.js-toggle-menu');
  const input = document.getElementById('check');
  const body = document.body;

  const toggleMenu = () => {
    const isMenuOpen =
      toggleMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    toggleMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    toggleMenuBtn.classList.toggle('is-open');

    !isMenuOpen
      ? (body.style.overflow = 'hidden')
      : (body.style.overflow = 'auto');
  };

  toggleMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    toggleMenuBtn.classList.remove('is-open');
    toggleMenuBtn.setAttribute('aria-expanded', false);
    body.style.overflow = 'auto';
  });
})();
