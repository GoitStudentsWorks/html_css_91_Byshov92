(() => {
  const anchors = document.querySelectorAll('.anchor');

  anchors.forEach(anchor => {
    anchor.addEventListener('click', () => {
      let scrollDiv = document.getElementById(
        `${anchor.getAttribute('data-value')}`
      ).offsetTop;

      closeMenu();

      if (anchor.getAttribute('data-value') === 'vegetables') {
        window.scrollTo({ top: scrollDiv - 40, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
      }
    });
  });

  function closeMenu() {
    const mobileMenu = document.querySelector('.js-menu-container');
    const toggleMenuBtn = document.querySelector('.js-toggle-menu');

    mobileMenu.classList.remove('is-open');
    toggleMenuBtn.classList.remove('is-open');
    toggleMenuBtn.setAttribute('aria-expanded', false);
    document.body.style.overflow = 'auto';
  }
})();
