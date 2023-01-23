const circle1 = document.querySelectorAll('.circle1');
const arrow = document.getElementById('arrow');
const resetButton = document.getElementById('reset-button');

circle1.forEach(circle1 => {
  circle1.addEventListener('click', event => {
    // Position the arrow above the clicked circle
    arrow.style.left = `${event.target.offsetLeft}px`;
    arrow.style.right = `${event.target.circle1}px`;
    
    arrow.style.visibility = 'visible';

    // Animate the arrow moving down to the circle
    arrow.animate([
      { transform: 'translateX(900px)' },
      { transform: 'translateY(0)' }
    ], {
      duration: 1000,
      fill: 'forwards'
    });

    // Change the color of the circle
    event.target.style.backgroundColor = 'grey';
  });
});

resetButton.addEventListener('click', event => {
  // Hide the arrow
  arrow.style.visibility = 'visible';
  // Reset the color of the circles
  circle1.forEach(circle1 => {
    circle1.style.backgroundColor = 'blue';
  });
});
