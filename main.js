var score = 0;

function runAudio(status) {
    var correct = new Audio("./assets/correct.mp3");
    var wrong = new Audio("./assets/wrong.mp3");

    if (status == 1) {
        score = score - 100;
        wrong.play();
    }
    if (status == 2) {
        score = score + 100;
        correct.play();
    }

    document.querySelectorAll("main")[0].innerText = score;

}

function startTimer(duration, display) {
    var timeUp = new Audio("./assets/time up.mp3");
    var timer = duration,
        minutes, seconds;
    var d = 0;
    var a = setInterval(function () {

        d = d + 1;
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        if (seconds == "00") {
            timeUp.play();
        }


        if (--timer < 0) {
            timer = duration;
        }
        console.log(d)
        if (d == duration+1) {
            console.log("i was here")
            clearInterval(a)
        }
    }, 1000);
}

function run(time) {
    var fiveMinutes = 60 * time,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};