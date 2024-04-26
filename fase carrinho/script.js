document.addEventListener("DOMContentLoaded", function() {
    startTimer();
});

function moverCarrinho(valor) {
    const carrinho = document.getElementById('carrinho');
    const valorNumerico = parseFloat(valor); // Converte o valor para número

    // Verifica se o valor é um número válido
    if (!isNaN(valorNumerico)) {
        carrinho.style.marginLeft = valorNumerico + 'px'; // Define a margem esquerda com base no valor
    }
    if(valorNumerico >= 1500 && valorNumerico <= 1750){
        correto.style.display = "flex";
        menos.style.display = "none"
        userInput.disabled = true;
        buttonProximo.style.display = "flex";
        if(pontos - tempo > 0){
            const pontuacaoCarrinho = Math.max(pontos - tempo, 0);
            score.innerText = pontuacaoCarrinho;
            carrinhoId = localStorage.getItem('game_id');
            update_game(carrinhoId, pontuacaoCarrinho);
        }else{
            const pontuacaoCarrinho = Math.max(pontos - tempo, 0);
            score.innerText = pontuacaoCarrinho;
            carrinhoId = localStorage.getItem('game_id');
            update_game(carrinhoId, pontuacaoCarrinho);
        }
    }
    else 
        if(valorNumerico > 1750){
            menos.style.display = "flex";
    }else 
        if(valorNumerico < 1500){
        menos.style.display = "none"
    }
}

const score = document.getElementById("scoreDisplay")

let timer;
let pontos = 500;
let tempo = 0;

function startTimer() {
    timer = setInterval(function() {
        tempo++;
        console.log("Tempo decorrido: " + tempo);
    }, 200);}

