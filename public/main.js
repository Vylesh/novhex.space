document.addEventListener('DOMContentLoaded', () => {
  // Logo animasyonu
  anime({
    targets: '.profile-logo',
    opacity: [0, 1],
    scale: [0.6, 1],
    translateY: [-20, 0],
    easing: 'easeOutExpo',
    duration: 1200
  });

  // Link butonları
  anime({
    targets: '.links-container .link',
    opacity: [0, 1],
    translateY: [20, 0],
    easing: 'easeOutExpo',
    delay: anime.stagger(120, { start: 400 }),
    duration: 800
  });

  // Blog bölümü
  anime({
    targets: '.blog-section',
    opacity: [0, 1],
    translateY: [30, 0],
    easing: 'easeOutExpo',
    delay: 900,
    duration: 900
  });
});
