let pizza1Input = document.getElementById("pizza1");
let pizza2Input = document.getElementById("pizza2");
let pizza3Input = document.getElementById("pizza3");
let formulaInput = document.getElementById("formula")
const mostrar = document.getElementById("mostrar");

document.addEventListener("DOMContentLoaded", function() {
    startTimer();
});

function finalizar() {
    let pizza1 = parseFloat(pizza1Input.value);
    let pizza2 = parseFloat(pizza2Input.value);
    let pizza3 = parseFloat(pizza3Input.value);
    let totalPizza;
    let formula = formulaInput.value.trim();

    if(pizza1 != 40 || pizza2 != 35 || pizza3 != 45){
        erro.innerText = "!! Verifique os valores inseridos !!"
        mostrar.innerText = "Total: R$" + totalPizza;
    }
    else 
        if(formula != "pizza1+pizza2+pizza3" && formula != "pizza2+pizza1+pizza3" &&
        formula != "pizza3+pizza2+pizza1" && formula != "pizza1+pizza3+pizza2" && formula != "pizza2+pizza3+pizza1" && formula != "pizza3+pizza1+pizza2" && formula != "pizza1 + pizza2 + pizza3" && formula != "pizza2 + pizza1 + pizza3" && formula != "pizza3 + pizza2 + pizza1" && formula != "pizza1 + pizza3 + pizza2" && formula != "pizza2 + pizza3 + pizza1" && formula != "pizza3 + pizza1 + pizza2"
        ){
        erro.innerText = "!! Insira corretamento a formula para o cálculo !!"
    }else{
        totalPizza = pizza1 + pizza2 + pizza3;
        mostrar.innerText = "Total: R$ " + totalPizza;
        erro.innerText = "";   
        pizza1Input.disabled = true;
        pizza2Input.disabled = true;
        pizza3Input.disabled = true;
        formulaInput.disabled = true;
        botao1.disabled = true;
        buttonProximo.style.display = "flex";
        aviso1.style.display = "none";
        correto.style.display = "block";
        if(pontos - tempo > 0){
            const pontuacaoPizza = Math.max(pontos - tempo, 0);
            score.innerText = pontuacaoPizza;
            editorId = localStorage.getItem('game_id');
            update_game(editorId, pontuacaoPizza);
        }else{
            const pontuacaoPizza = Math.max(pontos - tempo, 0);
            score.innerText = pontuacaoPizza;
            editorId = localStorage.getItem('game_id');
            update_game(editorId, pontuacaoPizza);
        }
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

