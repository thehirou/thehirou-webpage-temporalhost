// GOTTA STUDY THIS CODE LATER BECAUSE I HAVE NO IDEA HOW IT REALLY WORKS
document.addEventListener('keydown', function (event) {
    const LEFT_ARROW_KEY = 37;
    const RIGHT_ARROW_KEY = 39;

    if (event.keyCode === LEFT_ARROW_KEY && destinationUrls.left) {
        window.location.href = destinationUrls.left;
    } else if (event.keyCode === RIGHT_ARROW_KEY && destinationUrls.right) {
        window.location.href = destinationUrls.right;
    }
});
