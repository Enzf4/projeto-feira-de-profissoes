let inputh1 = document.getElementById("inputH1");
let inputh2 = document.getElementById("inputH2");
let inputdesc = document.getElementById("inputDesc");
let inputdescimg = document.getElementById("inputDescImg");
let inputimg = document.getElementById("inputImg");
let continuarBtn = document.getElementById("continuar");

let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let desc = document.getElementById("desc");
let descImg = document.getElementById("descimg");
let img = document.getElementById("img");

function atualizarh1() {
    h1.innerText = inputh1.value;
    verificarCampos();
}

function atualizarh2() {
    h2.innerText = inputh2.value;
    verificarCampos();
}

function atualizardesc() {
    desc.innerText = inputdesc.value;
    verificarCampos();
}

function atualizardescimg() {
    descImg.innerText = inputdescimg.value;
    verificarCampos();
}

function atualizarimg() {
    img.src = inputimg.value;
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
