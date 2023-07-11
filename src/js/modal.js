(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtns: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  refs.openModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    const mediaQuery = window.matchMedia('(max-width: 767px)').matches;

    refs.modal.classList.toggle('is-hidden');

    if (!refs.modal.classList.contains('is-hidden') && mediaQuery) {
      closeMenu();
    }
  }

  function closeMenu() {
    const mobileMenu = document.querySelector('.js-menu-container');
    const toggleMenuBtn = document.querySelector('.js-toggle-menu');

    mobileMenu.classList.remove('is-open');
    toggleMenuBtn.classList.remove('is-open');
    toggleMenuBtn.setAttribute('aria-expanded', false);
    document.body.style.overflow = 'auto';
  }
})();
