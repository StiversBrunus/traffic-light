/* ======================================================
   SELEÇÃO DE ELEMENTOS
   ====================================================== */

// Imagem principal do semáforo
const traffictLight = document.getElementById('img-traffic-light');

// Botões de controle manual
const red = document.getElementById('bt-red');
const yellow = document.getElementById('bt-yellow');
const green = document.getElementById('bt-green');

// Botão de modo automático
const automatic = document.getElementById('bt-auto');


/* ======================================================
   ESTADO DA APLICAÇÃO
   ====================================================== */

// Define se o modo automático está ligado
let buttonOn = false;

// Armazena o intervalo do setInterval
let interval;

// Controla qual imagem será exibida
let image = 0;


/* ======================================================
   FUNÇÕES DE CONTROLE MANUAL
   ====================================================== */

function trafficLightRed() {
    traffictLight.src = './img/vermelho.png';
}

function trafficLightYellow() {
    traffictLight.src = './img/amarelo.png';
}

function trafficLightGreen() {
    traffictLight.src = './img/verde.png';
}

function trafficLightTurnOff() {
    traffictLight.src = './img/desligado.png';
}


/* ======================================================
   CONTROLE AUTOMÁTICO DO SEMÁFORO
   ====================================================== */

function runImages() {

    // Garante que o semáforo começa desligado
    trafficLightTurnOff();

    return setInterval(function () {

        if (image == 0) {

            traffictLight.src = './img/vermelho.png';
            image = 1;

        } else if (image == 1) {

            traffictLight.src = './img/amarelo.png';
            image = 2;

        } else if (image == 2) {

            traffictLight.src = './img/verde.png';
            image = 0;

        }

    }, 1000);
}


/* ======================================================
   CONTROLE DO TOGGLE AUTOMÁTICO
   ====================================================== */

function toggleTrafficLightMode(){

    // Inverte estado do toggle
    buttonOn = !buttonOn;

    if (buttonOn) {

        interval = runImages();

    } else {

        trafficLightTurnOff();

        clearInterval(interval);
    }
}


/* ======================================================
   EVENTOS
   ====================================================== */

red.addEventListener('click', trafficLightRed);
yellow.addEventListener('click', trafficLightYellow);
green.addEventListener('click', trafficLightGreen);
automatic.addEventListener('click', toggleTrafficLightMode);