document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('menuToggle');
  const popover = document.getElementById('my-popover');
  const video = document.querySelector('.cover-video');
  const videoToggle = document.getElementById('videoToggle');

  popover.addEventListener('toggle', () => {
    toggleButton.textContent = popover.matches(':popover-open') ? '❯' : '❮';
  });

  videoToggle.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      videoToggle.textContent = '⏸';
    } else {
      video.pause();
      videoToggle.textContent = '▶';
    }
  });
});
