var width = window.innerWidth;
var height = window.innerHeight;

var intro = document.getElementsByClassName('intro')[0];
var botao = document.getElementsByClassName('botao')[0];
var outro_botao = document.getElementsByClassName('outro-botao')[0];
var imagemAnimacao = document.getElementsByClassName('img-letreiro')[0];
var historia = document.getElementsByClassName('historia')[0];
var som = document.getElementById('som');

function iniciar() {
    intro.className = 'intro intro-texto intro-animacao';
    botao.style.opacity = "0";
    outro_botao.style.opacity = "1";
    outro_botao.style.zIndex = "11";
    imagemAnimacao.className = 'img-letreiro img-animacao';
    historia.className = 'historia historia-texto historia-animacao';
    som.play();
}

function stop(algum_som) {
    algum_som.pause();
    algum_som.currentTime = 0;
}

function reiniciar() {
    intro.className = 'intro intro-texto';
    imagemAnimacao.className = 'img-letreiro';
    historia.className = 'historia historia-texto';
    botao.style.opacity = "1";
    outro_botao.style.opacity = "0";
    outro_botao.style.zIndex = "-10";
    stop(som);
}

var canvas = document.getElementById('snow');
var ctx = canvas.getContext('2d');

canvas.width = width;
canvas.height = height;

const num = 200;
const size = 2;
const elements = [];

function snow() {
    for (let indiceElementos = 0; indiceElementos < num; indiceElementos++) {
        elements[indiceElementos] = {
            x: Math.ceil(Math.random() * width),
            y: Math.ceil(Math.random() * height),
            size: Math.random() * size,
        }
    }
}

function plotarSnow() {
    ctx.clearRect(0, 0, width, height);
    for (let indiceElementos = 0; indiceElementos < num; indiceElementos++) {
        const e = elements[indiceElementos];
        ctx.beginPath();
        ctx.fillStyle = '#FFFFFF';
        ctx.arc(e.x, e.y, e.size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}

snow();
plotarSnow();