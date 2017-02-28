// Variables
var startButton = document.querySelector('#start');
var timeDisplay = document.querySelector('#timeDisplay');
var tenths = 0;
var seconds = 0;
var minutes = 0;
var interval;

//Logic
makeStartButtonClickable();
makeStartButtonDoubleClickable();

// Functions
function makeStartButtonClickable() {
    startButton.addEventListener('click', startWatch);
}

function makeStartButtonDoubleClickable() {
     startButton.addEventListener('dblclick', resettWatch);
}

function startWatch() {
    if(startButton.innerText.trim() === "Start") {
        // Change the color of the timer text each second
        startUpdatingTimer();
        // Change button to say "Pause"
        changeButtonToSayPause();
    }
    // Clicking when the button says "Pause" should...
    else if (startButton.innerHTML.trim() === 'Pause') {
        // Pause the timer from counting up
        pauseTimerFromCountingUp();
        // Reset timer if 15 seconds go by
        setTimeout(resetTimerAfter15Seconds, 15000);
        // Change button to say "Resume"
        changeButtonToSayResume();
    }

    // Clicking when the button says "Resume" should...
    else if (startButton.innerHTML.trim() === 'Resume') {
        // Resume the count up
        startUpdatingTimer();
        // Change button to say "Pause"
        changeButtonToSayPause();
    }
}

function resetWatch() {
    // Double-clicking when the button says "Pause" should...
    if (startButton.innerHTML.trim() === 'Pause') {
    // Stop counting up
    pauseTimerFromCountingUp();
    // Reset the timer back to 0
    resetTimersBackToZero();
    // Update the #timer inner HTML to be something like 00:00:00
    updateTimerDisplay();
    // Change button to say "Start"
    changeButtonToSayStart();
    }
}
function updateTimer() {
    // Start counting up, every 10th of a second
    startCountingUpEveryTenth();
    // Update the #timer inner HTML to follow this format: Minutes:Seconds:Tenths (00:00:00)
    updateTimerDisplay();
    //Change the color of the timer each second
    if (tenths === 0) {
        changeColorOfTimerEachSecond();
    }
}
function startCountingUpEveryTenth() {
    tenths++;
    if (tenths === 9) {
        seconds++;
        tenths = 0;
    }
    if (seconds === 59) {
        minutes ++;
        seconds = 0;
    }
}
function updateTimerDisplay() {
    timeDisplay.innerHTML = `${minutes}:${seconds}:${tenths}`;
}
function changeColorOfTimerEachSecond() {
    var red = _randomNumber(255);
    var green = _randomNumber(255);
    var blue = _randomNumber(255);
    timeDisplay.style.color = `rgb(${red},${green},${blue})`;
}
function changeButtonToSayPause () {
    startButton.innerHTML = 'Pause';
}

function changeButtonToSayResume () {
    startButton.innerHTML = 'Resume';
} 

function changeButtonToSayStart () {
    startButton.innerHTML = 'Start'
}
function resetTimersBackToZero () {
    tenths = 0;
    seconds = 0;
    minutes = 0;
}

function resetTimerAfter15Seconds() {
    // If the timer is in Paused mode, and it remains paused for 15 seconds:
    if (startButton.innerHTML.trim() === "Resume"){
    // Stop counting up
    pauseTimerFromCountingUp();
    // Reset the timer back to 0
    resetTimersBackToZero();
    // Update the #timer inner HTML to be something like 00:00:00
    updateTimerDisplay();
    // Change button to say "Start"
    changeButtonToSayStart();
    }
}

function pauseTimerFromCountingUp() {
    clearInterval(interval);
}
function startUpdatingTimer() {
    interval = setInterval(updateTimer, 100);
}
// Helpers
function _randomNumber(max) {
    return Math.round(Math.random() * max);
}