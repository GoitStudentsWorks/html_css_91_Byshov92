(() => {
  const toTopBtn = document.getElementById('to-top-button');

  window.onscroll = function () {
    toggleBtn();
  };

  toTopBtn.addEventListener('click', scrollTop);

  function toggleBtn() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      toTopBtn.classList.add('show');
    } else {
      toTopBtn.classList.remove('show');
    }
  }

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
})();
