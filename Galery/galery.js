// Horizontal Scroll
const horizontalScroll = document.querySelector('.scroll-horizontal');
let isDown = false;
let startX;
let scrollLeft;

horizontalScroll.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - horizontalScroll.offsetLeft;
  scrollLeft = horizontalScroll.scrollLeft;
});

horizontalScroll.addEventListener('mouseleave', () => {
  isDown = false;
});

horizontalScroll.addEventListener('mouseup', () => {
  isDown = false;
});

horizontalScroll.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - horizontalScroll.offsetLeft;
  const walk = (x - startX) * 3; // Scroll 3 times faster
  horizontalScroll.scrollLeft = scrollLeft - walk;
});

// Vertical Scroll
const verticalScroll = document.querySelector('.scroll-vertical');
let isClicked = false;
let startY;
let scrollTop;

verticalScroll.addEventListener('click', () => {
  isClicked = true;
  startY = verticalScroll.scrollTop;
});

verticalScroll.addEventListener('mouseleave', () => {
  isClicked = false;
});

verticalScroll.addEventListener('mouseup', () => {
  isClicked = false;
});

verticalScroll.addEventListener('mousemove', () => {
  if (!isClicked) return;
  scrollTop = verticalScroll.scrollTop;
  verticalScroll.scrollTop = scrollTop + 1;
});
