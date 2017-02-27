console.log('First line.');

// if timer is set to 0, it will run this code last
setTimeout(futureCode, 0);

function futureCode() {
    console.log('Hello from the future.');
}

console.log('Last line.');

var restorStartButtonTimeout;
var toggleLoadingInterval;

document.querySelector('#cancel').addEventListener('click', handleCancelButton)

document.querySelector('#start').addEventListener('click', handleStartButton);

function handleStartButton(e) {
    var startButton = e.target;

    startButton.innerHTML = '<span class="glyphicon glyphicon-refresh"></span> Running...';
    startButton.disabled = true;
    startButton.classList.add('btn-danger');

    restorStartButtonTimeout = setTimeout(restoreStartButton, 3000);
}

function restoreStartButton() {
    var startButton = document.querySelector('#start');
    startButton.innerHTML = 'Start';
    startButton.disabled = false;
    startButton.classList.remove('btn-danger');
}

function handleCancelButton(e) {
    restoreStartButton();
    clearTimeout(restoreStartButtonTimeout);
    clearInterval(toggleLoadingInterval);
}

toggleLoadingInterval = setInterval(toggleLoading, 1000);

setInterval(toggleLoading, 1000);

function toggleLoading() {
    var startButton = document.querySelector('#start');

    if (startButton.innerText === 'Start') {
        runningStartButton();
    }
    else {
        restoreStartButton();
    }
}
// start button
function runningStartButton () {
    var startButton = document.querySelector('#start');

    startButton.innerHTML = '<span class="glyphicon glyphicon-refresh"></span> Running...';
    startButton.disabled = true;
    startButton.classList.add('btn-danger');
}

// counter
var seconds = 30;

setInterval(startTimer, 1000);

function startTimer() {
    seconds--;
    document.querySelector('#time').innerHTML = seconds;

    if (seconds === 0) {
        window.location.href = 'https://google.com';
    }
}