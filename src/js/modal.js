(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtns: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.body,
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  refs.openModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('scroll-hidden');

    if (!refs.modal.classList.contains('is-hidden')) {
      closeMenu();
      refs.body.classList.add('scroll-hidden');
    }
  }

  function closeMenu() {
    const mobileMenu = document.querySelector('.js-menu-container');
    const toggleMenuBtn = document.querySelector('.js-toggle-menu');

    mobileMenu.classList.remove('is-open');
    toggleMenuBtn.classList.remove('is-open');
    toggleMenuBtn.setAttribute('aria-expanded', false);
  }
})();
