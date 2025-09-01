let count = 0;
const counterElement = document.getElementById('counter');

// Listen for any key press
document.addEventListener("keydown", (event) => {
  // Prevent default behavior for space and arrow keys to avoid page scrolling
  if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.code)) {
    event.preventDefault();
  }
  
  count++;
  counterElement.textContent = count;
  
  // Optional: Add a visual feedback
  counterElement.style.transform = 'scale(1.2)';
  setTimeout(() => {
    counterElement.style.transform = 'scale(1)';
  }, 100);
});
