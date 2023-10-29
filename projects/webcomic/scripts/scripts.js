// Function to change the hue
function changeHue() {
  const newHue = Math.random(); // Generate a new random hue value between 0 and 1
  document.documentElement.style.setProperty('--random-seed', newHue);
  localStorage.setItem('hue', newHue); // Store the hue value in local storage
}
