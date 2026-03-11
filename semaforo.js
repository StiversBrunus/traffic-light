var semaforo = document.getElementById ('semaforo');

var vermelho = document.getElementById ('vermelho');
var amarelo = document.getElementById ('amarelo');
var verde = document.getElementById ('verde');
var automatico = document.getElementById ('automatico');

// Implementando Toggle:
let ligado = false;

let intervalo;


let imagem = 0;

function semaforoVermelho () {
    semaforo.src = './img/vermelho.png';
}

function semaforoAmarelo () {
    semaforo.src = './img/amarelo.png';
}

function semaforoVerde () {
    semaforo.src = './img/verde.png';
}

function semaforoDesligado (){
    semaforo.src = './img/desligado.png';
}

function rodarImagens () {

    // Desliga o semaforo, antes de começar.
    semaforoDesligado();
    
   return setInterval(function (){
        if (imagem == 0){
            semaforo.src = './img/verde.png';
            imagem = 1
        }else if(imagem == 1){
            semaforo.src = './img/amarelo.png';
            imagem = 2
        }else if(imagem == 2){
            semaforo.src = './img/vermelho.png';
            imagem = 0
        }
    }, 1000);
}

function acionarToggle(){

    ligado = !ligado;

    if (ligado) {
        console.log("Toggle ON");
        intervalo = rodarImagens();
    }else{
        console.log("Toggle OFF");
        semaforoDesligado();
        clearInterval(intervalo);
    }
    
}

vermelho.addEventListener ('click', semaforoVermelho);
amarelo.addEventListener ('click', semaforoAmarelo);
verde.addEventListener ('click', semaforoVerde);
automatico.addEventListener ('click', acionarToggle);