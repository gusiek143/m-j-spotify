const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const title = document.getElementById('title');

function loadSong(fileName, songTitle) {
    audio.src = fileName; // zmienia źródło pliku
    title.innerText = songTitle; // zmienia wyświetlany tytuł
    audio.play();
    playBtn.innerHTML = "Pause";
}

function playPause() {
    if (audio.src === "" || audio.src.endsWith("/")) {
        alert("Wybierz najpierw piosenkę z listy!");
        return;
    }

    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = "Pause";
    } else {
        audio.pause();
        playBtn.innerHTML = "Play";
    }
}
