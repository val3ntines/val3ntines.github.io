// Show/hide the "Others" textbox based on the selected activity
const activitySelect = document.getElementById('activity');
const otherActivityContainer = document.getElementById('otherActivityContainer');
const otherActivityInput = document.getElementById('otherActivity');

activitySelect.addEventListener('change', () => {
  if (activitySelect.value === 'Others') {
    otherActivityContainer.style.display = 'block';
    otherActivityInput.setAttribute('required', true);
  } else {
    otherActivityContainer.style.display = 'none';
    otherActivityInput.removeAttribute('required');
  }
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

// Existing form submission logic
const form = document.getElementById('dateForm');
const output = document.getElementById('output');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const location = document.getElementById('location').value;
  const activity = document.getElementById('activity').value;
  const otherActivity = document.getElementById('otherActivity').value;

  // Determine the final activity
  const finalActivity = activity === 'Others' ? otherActivity : activity;

  // Create a summary
  const summary = `
    <h2>Our Valentine's Date Plan</h2>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
    <p><strong>Location:</strong> ${location}</p>
    <p><strong>Activity:</strong> ${finalActivity}</p>
  `;

  // Display the summary
  output.innerHTML = summary;

  // Use html2canvas to save as an image
  html2canvas(output).then(canvas => {
    const link = document.createElement('a');
    link.download = 'valentine-date-plan.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});