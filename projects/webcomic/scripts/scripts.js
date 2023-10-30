// Function to change the hue
function changeHue() {
  const newHue = Math.random(); // Generate a new random hue value between 0 and 1
  document.documentElement.style.setProperty('--random-seed', newHue);
  localStorage.setItem('hue', newHue); // Store the hue value in local storage
}
// Function to set the initial hue when the page loads
function setInitialHue() {
  const storedHue = localStorage.getItem('hue');
  if (storedHue) {
    document.documentElement.style.setProperty('--random-seed', storedHue);
  }
}
// Call setInitialHue when the page loads
window.addEventListener('load', setInitialHue);