let inputh1 = document.getElementById("inputH1");
let inputh2 = document.getElementById("inputH2");
let inputdesc = document.getElementById("inputDesc");
let inputdescimg = document.getElementById("inputDescImg");

let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let desc = document.getElementById("desc");
let descImg = document.getElementById("descimg");
let img = document.getElementById("img");

function atualizarh1(){
    h1.innerText = inputh1.value
}

function atualizarh2(){
    h2.innerText= inputh2.value
}

function atualizardesc(){
    desc.innerText = inputdesc.value
}

function atualizardescimg(){
    descImg.innerText = inputdescimg.value
}

inputh1.addEventListener('input', atualizarh1)
inputh2.addEventListener('input', atualizarh2)
inputdesc.addEventListener('input', atualizardesc)
inputdescimg.addEventListener('input', atualizardescimg)