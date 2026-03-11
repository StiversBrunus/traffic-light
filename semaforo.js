var vermelho = document.getElementById ('vermelho');
var amarelo = document.getElementById ('amarelo');
var verde = document.getElementById ('verde');
var automatico = document.getElementById ('automatico');
var semaforo = document.getElementById ('semaforo');

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

function rodarImagens () {
    
    setInterval(function (){
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

vermelho.addEventListener ('click', semaforoVermelho);
amarelo.addEventListener ('click', semaforoAmarelo);
verde.addEventListener ('click', semaforoVerde);
automatico.addEventListener ('click', rodarImagens);