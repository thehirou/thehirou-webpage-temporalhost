// GOTTA STUDY THIS CODE LATER BECAUSE I HAVE NO IDEA HOW IT REALLY WORKS// Initialize isToggled and canToggle variables


const outerBlatherbox = document.getElementById('outer-blatherbox');
const blatherbox = document.getElementById('blatherbox');
const toggleButton = document.getElementById('toggleButton');

// Function to set the initial styles based on isToggled
function setInitialStyles() {
    const newWidth = isToggled ? '0px' : '640px';
    outerBlatherbox.style.setProperty('--blatherbox-width', newWidth);

    // Check if the outerBlatherbox is collapsed or not and set the transition accordingly
    const transitionDuration = isToggled ? '0s' : '0.3s';
    outerBlatherbox.style.transition = `width ${transitionDuration}`;
    blatherbox.style.transition = `border-width ${transitionDuration}`;

    // Update the --transition-speed variable
    document.documentElement.style.setProperty('--transition-speed', transitionDuration);

    updateButtonText(); // Update the button text based on canToggle

    updateMainCenteredWidth();

    const borderWidth = isToggled ? '0px' : '4px';
    blatherbox.style.borderWidth = borderWidth;

    // Change the text based on isToggled
    updateText(isToggled);
}

// Function to update the button text based on isToggled and canToggle
function updateButtonText() {
    if (canToggle) {
        toggleButton.textContent = isToggled ? "Open Blatherbox" : "Close Blatherbox";
    } else {
        toggleButton.textContent = "...";
    }
}

// Function to update the text based on isToggled
function updateText(isToggled) {
    if (isToggled) {
        // Blatherbox is open, update the text accordingly
        // For example, update an element with id 'blatherbox-status' to display "Blatherbox Opened"
        const blatherboxStatus = document.getElementById('blatherbox-status');
        if (blatherboxStatus) {
            blatherboxStatus.textContent = "Close Blatherbox";
        }
    } else {
        // Blatherbox is closed, update the text accordingly
        // For example, update an element with id 'blatherbox-status' to display "Blatherbox Closed"
        const blatherboxStatus = document.getElementById('blatherbox-status');
        if (blatherboxStatus) {
            blatherboxStatus.textContent = "Open Blatherbox";
        }
    }
}

// Call the function to set the initial styles when the page loads
setInitialStyles();

toggleButton.addEventListener('click', () => {
    if (canToggle) {
        isToggled = !isToggled;
        setInitialStyles(); // Set the styles based on the new state
    }
});

// Function to enable or disable the toggle button
function toggleButtonState(enable) {
    canToggle = enable;
    toggleButton.disabled = !enable;
    updateButtonText(); // Update the button text based on canToggle
}

// Example: To disable the button
// toggleButtonState(false);

// Example: To enable the button
// toggleButtonState(true);

function updateMainCenteredWidth() {
    const imageWidth = window.getComputedStyle(outerBlatherbox).getPropertyValue('--image-width');
    const blatherboxWidth = window.getComputedStyle(outerBlatherbox).getPropertyValue('--blatherbox-width');
    const mainCenteredWidth = `calc(${imageWidth} + ${blatherboxWidth})`;
    document.documentElement.style.setProperty('--main-centered-width', mainCenteredWidth);
}
