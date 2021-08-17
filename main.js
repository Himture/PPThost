var score = 0;

// Set flag to ensure
let hasAudioStopped = true;

// FUnction that updates if the audio has stopped.
const setAudioStopCheck = () => {
    hasAudioStopped = true;
};

var correct = new Audio("./assets/correct.mp3");
var wrong = new Audio("./assets/wrong.mp3");

function runAudio(status) {
    if (status == 1) {
        score = score - 100;
        // Check audio before playing to see if previous audio is playing.
        if (hasAudioStopped) {
            wrong.play();
            hasAudioStopped = false;
        }
    }
    if (status == 2) {
        score = score + 100;

        // Check audio before playing to see if previous audio is playing.

        if (hasAudioStopped) {
            correct.play();
            hasAudioStopped = false;
        }
    }

    document.querySelectorAll("main")[0].innerText = score;
}

correct.addEventListener("ended", setAudioStopCheck);
wrong.addEventListener("ended", setAudioStopCheck);

var a = setInterval();

function startTimer(duration, display, t) {
    var timeUp = new Audio("./assets/time up.mp3");
    var timer = duration,
        minutes,
        seconds;

    if (duration == 0) {
        clearInterval(a);
        a = setInterval(function () {
            d = d + 1;
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;
        }, 1000);
        return;
    }
    var d = 0;

    a = setInterval(function () {
        d = d + 1;
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        if (seconds == "00" && d == duration + 1) {
            timeUp.play();
        }

        if (--timer < 0) {
            timer = duration;
        }

        console.log(d);
        if (d == duration + 1) {
            clearInterval(a);
        }
    }, 1000);
}

function run(time) {
    var fiveMinutes = 60 * time,
        display = document.querySelector("#time");
    clearInterval(a);
    startTimer(fiveMinutes, display, 1);
}