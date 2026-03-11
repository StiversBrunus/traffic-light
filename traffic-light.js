/* ======================================================
   SELECTION OF HTML ELEMENTS
   ====================================================== */

// Principal image of traffic light
const traffictLight = document.getElementById('img-traffic-light');

// Buttons manual control
const red = document.getElementById('bt-red');
const yellow = document.getElementById('bt-yellow');
const green = document.getElementById('bt-green');

// Button auto mode
const automatic = document.getElementById('bt-auto');


/* ======================================================
   APPLICATION STATE
   ====================================================== */

// Define if the auto mode is on.
let buttonOn = false;

// Save the interval of the setInterval
let interval;

// Control what image is show.
let image = 0;


/* ======================================================
  FUNCTIONS MANUAL CONTROL
   ====================================================== */

function trafficLightRed() {
    traffictLight.src = './img/red.png';
}

function trafficLightYellow() {
    traffictLight.src = './img/yellow.png';
}

function trafficLightGreen() {
    traffictLight.src = './img/green.png';
}

function trafficLightTurnOff() {
    traffictLight.src = './img/turnOff.png';
}


/* ======================================================
   FUNCTION CONTROL AUTO MODE
   ====================================================== */

function runImages() {

    // The traffic light starting off
    trafficLightTurnOff();

    return setInterval(function () {

        if (image == 0) {

            traffictLight.src = './img/red.png';
            image = 1;

        } else if (image == 1) {

            traffictLight.src = './img/yellow.png';
            image = 2;

        } else if (image == 2) {

            traffictLight.src = './img/green.png';
            image = 0;

        }

    }, 1000);
}


/* ======================================================
   FUNCTION CONTROL BUTTON TOGGLE AUTO MODE
   ====================================================== */

function toggleTrafficLightMode(){

    // Invert toggle state
    buttonOn = !buttonOn;

    if (buttonOn) {

        interval = runImages();

    } else {

        trafficLightTurnOff();

        clearInterval(interval);
    }
}


/* ======================================================
   EVENTS
   ====================================================== */

red.addEventListener('click', trafficLightRed);
yellow.addEventListener('click', trafficLightYellow);
green.addEventListener('click', trafficLightGreen);
automatic.addEventListener('click', toggleTrafficLightMode);