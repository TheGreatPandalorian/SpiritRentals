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
function addToCart(productName) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item already exists
    let existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: productName,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartDisplay();

    alert(productName + " added to cart!");
}

function updateCartDisplay() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    document.getElementById("cart-count").textContent = `🛒 ${totalItems} PRODUCT(S)`;

    let footer = document.getElementById("cart-footer");
    if (footer) {
        footer.textContent = `🛒 ${totalItems} PRODUCT(S)`;
    }
}

// Run when page loads
window.onload = updateCartDisplay;