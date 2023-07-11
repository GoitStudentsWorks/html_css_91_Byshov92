(() => {
  const anchors = document.querySelectorAll('a[href*="#"]');

  anchors.forEach(anchor => {
    anchor.addEventListener('click', () => {
      let scrollDiv = document.getElementById(
        `${anchor.getAttribute('data-value')}`
      ).offsetTop;
    });
    window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
  });
})();
