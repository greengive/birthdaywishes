// Enter Website

function enterWebsite() {

    document.getElementById("surprises").style.display = "block";

    document.getElementById("surprises").scrollIntoView({
        behavior: "smooth"
    });

}


// Birthday Countdown

function updateCountdown() {

    let now = new Date();

    let year = now.getFullYear();

    let birthday = new Date(year, 11, 12);

    if (now >= birthday) {
        birthday = new Date(year + 1, 11, 12);
    }

    let difference = birthday - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));

    let hours = Math.floor(difference / (1000 * 60 * 60) % 24);

    let minutes = Math.floor(difference / (1000 * 60) % 60);

    let seconds = Math.floor(difference / 1000 % 60);

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}

updateCountdown();

setInterval(updateCountdown, 1000);


// Birthday Cake

function blowCandles() {

    document.querySelector(".cake").innerHTML = "🎉";

    document.getElementById("cakeMessage").innerHTML =
        "Your wish is on its way! Happy Birthday! ❤️";

}


// Final Surprise

function showSurprise() {

    document.getElementById("finalMessage").style.display = "block";

}


// Background Music

function toggleMusic() {

    let music = document.getElementById("bgMusic");

    let button = document.getElementById("musicButton");

    if (music.paused) {

        music.play();

        button.innerHTML = "Ⅱ Pause Music 🎵";

    } else {

        music.pause();

        button.innerHTML = "▶ Play Music 🎵";

    }

}