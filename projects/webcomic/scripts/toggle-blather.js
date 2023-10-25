// GOTTA STUDY THIS CODE LATER BECAUSE I HAVE NO IDEA HOW IT REALLY WORKS
const outerBlatherbox = document.getElementById('outer-blatherbox');
const blatherbox = document.getElementById('blatherbox');
const toggleButton = document.getElementById('toggleButton');
let isToggled = false;

toggleButton.addEventListener('click', () => {
    isToggled = !isToggled;
    const newWidth = isToggled ? '0px' : '640px';
    outerBlatherbox.style.setProperty('--blatherbox-width', newWidth);

    // Check if the outerBlatherbox is collapsed or not and set the transition accordingly
    const transitionDuration = isToggled ? '0s' : '0.3s';
    outerBlatherbox.style.transition = `width ${transitionDuration}`;
    blatherbox.style.transition = `border-width ${transitionDuration}`;

    // Update the --transition-speed variable
    document.documentElement.style.setProperty('--transition-speed', transitionDuration);

    updateMainCenteredWidth();

    const borderWidth = isToggled ? '0px' : '4px';
    blatherbox.style.borderWidth = borderWidth;
});

function updateMainCenteredWidth() {
    const imageWidth = window.getComputedStyle(outerBlatherbox).getPropertyValue('--image-width');
    const blatherboxWidth = window.getComputedStyle(outerBlatherbox).getPropertyValue('--blatherbox-width');
    const mainCenteredWidth = `calc(${imageWidth} + ${blatherboxWidth})`;
    document.documentElement.style.setProperty('--main-centered-width', mainCenteredWidth);
}
