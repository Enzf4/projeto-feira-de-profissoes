let pizza1Input = document.getElementById("pizza1");
let pizza2Input = document.getElementById("pizza2");
let pizza3Input = document.getElementById("pizza3");
let formulaInput = document.getElementById("formula")
const mostrar = document.getElementById("mostrar");

document.addEventListener("DOMContentLoaded", function() {
    startTimer();
});


// Mostrar o pop-up quando o botão for clicado
document.getElementById("botaoPopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
});

// Fechar o pop-up quando o "X" for clicado
document.getElementById("fecharPopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

// Fechar o pop-up se o usuário clicar fora dele
window.addEventListener("click", function(event) {
    var popup = document.getElementById("popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});


function finalizar() {
    let pizza1 = parseFloat(pizza1Input.value);
    let pizza2 = parseFloat(pizza2Input.value);
    let pizza3 = parseFloat(pizza3Input.value);
    let totalPizza;
    let formula = formulaInput.value.trim();

    if (pizza1 !== 40 || pizza2 !== 35 || pizza3 !== 45) {
        erro.innerText = "!! Verifique os valores inseridos !!";
        mostrar.innerText = "Total: R$" + (totalPizza || 0);
    } else if (
        formula !== "pizza1+pizza2+pizza3" &&
        formula !== "pizza2+pizza1+pizza3" &&
        formula !== "pizza3+pizza2+pizza1" &&
        formula !== "pizza1+pizza3+pizza2" &&
        formula !== "pizza2+pizza3+pizza1" &&
        formula !== "pizza3+pizza1+pizza2" &&
        formula !== "pizza1 + pizza2 + pizza3" &&
        formula !== "pizza2 + pizza1 + pizza3" &&
        formula !== "pizza3 + pizza2 + pizza1" &&
        formula !== "pizza1 + pizza3 + pizza2" &&
        formula !== "pizza2 + pizza3 + pizza1" &&
        formula !== "pizza3 + pizza1 + pizza2"
    ) {
        erro.innerText = "!! Insira corretamente a fórmula para o cálculo !!";
    } else {
        totalPizza = pizza1 + pizza2 + pizza3;
        mostrar.innerText = "Total: R$ " + totalPizza;
        erro.innerText = "";

        // Desabilitar os campos após finalização correta
        pizza1Input.disabled = true;
        pizza2Input.disabled = true;
        pizza3Input.disabled = true;
        formulaInput.disabled = true;
        botao1.disabled = true;

        // Exibir texto "correto" e botão "completou" juntos
        correto.style.display = "flex"; // Exibir texto "Correto!"
        aviso1.style.display = "none"; // Esconder aviso
    }
}
