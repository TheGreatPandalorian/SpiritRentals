function slide(button, direction) {
  const slider = button.parentElement;
  const track = slider.querySelector('.slider-track');
  const images = track.children;

  const width = slider.clientWidth;

  let index = track.dataset.index ? parseInt(track.dataset.index) : 0;

  index += direction;

  // Infinite loop
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;

  track.style.transform = `translateX(-${index * width}px)`;
  track.dataset.index = index;
}

function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");

  img.src = src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}