<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Mój Odtwarzacz Muzyki</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="player">
        <h2>Teraz grane: <span id="title">Twoja Piosenka</span></h2>
        <audio id="audio" src="audio.mp3"></audio>
        
        <div class="controls">
            <button onclick="playPause()" id="playBtn">Play</button>
            <input type="range" id="seek" value="0" max="100">
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>