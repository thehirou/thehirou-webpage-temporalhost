function setRandomSeed() {
  const root = document.documentElement;
  root.style.setProperty('--random-seed', Math.random());
}

// Call setRandomSeed when the page loads
window.addEventListener('load', setRandomSeed);
