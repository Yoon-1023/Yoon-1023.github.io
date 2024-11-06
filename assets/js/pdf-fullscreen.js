function openFullScreen(iframeId, fullscreenButtonId, exitButtonId) {
    const iframe = document.getElementById(iframeId);
    const fullscreenButton = document.getElementById(fullscreenButtonId);
    const exitFullscreenButton = document.getElementById(exitButtonId);

    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
    }
}

function exitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

function handleFullscreenChange() {
    const fullscreenElements = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    if (fullscreenElements) {
        document.querySelectorAll('.fullscreen-button').forEach(button => button.style.display = 'none');
        document.querySelectorAll('.exit-fullscreen-button').forEach(button => button.style.display = 'block');
    } else {
        document.querySelectorAll('.fullscreen-button').forEach(button => button.style.display = 'block');
        document.querySelectorAll('.exit-fullscreen-button').forEach(button => button.style.display = 'none');
    }
}

document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
document.addEventListener('mozfullscreenchange', handleFullscreenChange);
document.addEventListener('MSFullscreenChange', handleFullscreenChange);
