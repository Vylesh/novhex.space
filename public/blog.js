 document.addEventListener('DOMContentLoaded', () => {
  anime({
    targets: '.blog-card',
    opacity: [0, 1],
    translateY: [30, 0],
    easing: 'easeOutExpo',
    delay: anime.stagger(180, { start: 200 }),
    duration: 900
  });

  anime({
    targets: '.blog-back a',
    opacity: [0, 1],
    translateY: [15, 0],
    easing: 'easeOutExpo',
    delay: 400,
    duration: 600
  });
});
