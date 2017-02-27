// document.querySelector('#start').addEventListener('click', startTimer());

// var seconds = 0;

// setInterval(startTimer(), 100);

// function startTimer() {
//     seconds++;
//     document.querySelector('#timer').innerHTML = (`:${seconds}`);
// }


// function pauseTimer() {
//     document.querySelector('#start').addEventListener('click', pausetTimer());

//     if (document.querySelector('#start').innerHTML = ('Pause')) {
//         document.querySelector('#start').innerHTML = ('Resume');
// }
//     }

 var tenthSeconds = 0;
 var minutes = 0;
 var seconds = 0;

function startTimer(e) {
    tenthSeconds++;

    document.querySelector('#timer').innerHTML = `${minutes} : ${seconds} : ${tenthSeconds}`;

    if (tenthSeconds >= 99) {
        tenthSeconds = 0;
        seconds++;
    }

    else if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
}
startTimer();








