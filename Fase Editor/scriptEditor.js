let inputh1 = document.getElementById("inputH1");
let inputh2 = document.getElementById("inputH2");
let inputdesc = document.getElementById("inputDesc");
let inputdescimg = document.getElementById("inputDescImg");
let inputimg = document.getElementById("inputImg");
let continuarBtn = document.getElementById("continuar");

let h1 = document.querySelectorAll(".h1");
let h2 = document.querySelectorAll(".h2");
let desc = document.querySelectorAll(".desc");
let descImg = document.querySelectorAll(".descimg");
let img = document.querySelectorAll(".img");
let img2 = document.querySelectorAll(".img2");

function atualizarh1() {
    h1.forEach(function(element) {
        element.innerText = inputh1.value;
    });
    verificarCampos();
}

function atualizarh2() {
    h2.forEach(function(element) {
        element.innerText = inputh2.value;
    });
    verificarCampos();
}

function atualizardesc() {
    desc.forEach(function(element) {
        element.innerText = inputdesc.value;
    });
    verificarCampos();
}

function atualizardescimg() {
    descImg.forEach(function(element) {
        element.innerText = inputdescimg.value;
    });
    verificarCampos();
}

function atualizarimg() {
    img.forEach(function(element) {
        element.src = inputimg.value;
    });
    img2.forEach(function(element) {
        element.innerText = inputimg.value;
    });
    verificarCampos();
}

function verificarCampos() {
    if (inputh1.value && inputh2.value && inputdesc.value && inputdescimg.value && inputimg.value) {
        continuarBtn.style.display = "block";
    } else {
        continuarBtn.style.display = "none";
    }
}

inputh1.addEventListener('input', atualizarh1);
inputh2.addEventListener('input', atualizarh2);
inputdesc.addEventListener('input', atualizardesc);
inputdescimg.addEventListener('input', atualizardescimg);
inputimg.addEventListener('input', atualizarimg);
