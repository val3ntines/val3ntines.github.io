// Get the buttons
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

let noButtonClickCount = 0; // Track the number of times "No" is clicked

// Add event listener to the "No" button
noButton.addEventListener('click', () => {
  noButtonClickCount++; // Increment the click count

  if (noButtonClickCount === 3) {
    // Open a fun GIF link after two clicks
    window.open('https://papertoilet.com', '_blank');
    noButtonClickCount = 0; // Reset the counter
  } else {
    // Move the button randomly within the visible screen area
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - noButton.offsetWidth;
    const maxY = containerRect.height - noButton.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  }
});

// Add event listener to the "Yes" button
yesButton.addEventListener('click', () => {
  window.location.href = 'invitation.html';
});

// Create falling hearts
function createHearts() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = `${Math.random() * window.innerWidth}px`;
  heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHearts, 300);