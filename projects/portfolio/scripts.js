const images = document.getElementsByClassName('enlarge-image-2');

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function() {
    const url = images[i].getAttribute('data-url');
    window.location.href = url;
  });
}

console.log("I'm working");