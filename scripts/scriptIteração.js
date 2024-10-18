const gameBoard = document.getElementById('gameBoard');
const player = document.getElementById('player');
const targetSquare = document.getElementById('targetSquare');
const message = document.getElementById('message');
const scoreDisplay = document.getElementById('score');
const totalScoreDisplay = document.getElementById('scoreDisplay'); // Adicionado para exibir a pontuação total
const temporizador = document.getElementById('tempojogo')
const valorIteração = document.getElementById('inputIteração');

let jogoIniciado = false;
let playerTop = 100;
let playerLeft = 100;
let targetTop = getRandomPosition();
let targetLeft = getRandomPosition();
let score = 0;
let totalScore = 0; // Adicionado para armazenar a pontuação total

player.style.top = `${playerTop}px`;
player.style.left = `${playerLeft}px`;
targetSquare.style.top = `${targetTop}px`;
targetSquare.style.left = `${targetLeft}px`;

function movePlayer(event) {
    if (tempojogo < 60) {
        var valor = Number(valorIteração.value);

        valorIteração.addEventListener('input', function() {
            let valor = parseInt(valorIteração.value);
            
            // Verificação de valor no input 
            if (valor > 50) {
                valor = 50;
                valorIteração.value = valor; 
            }else if(valor < 0){
                valor = 0;
                valorIteração.value = valor;
            }
        });

        // Movimentação
        switch (event.key) {
            case 'ArrowUp':
                playerTop -= valor;
                break;
            case 'ArrowDown':
                playerTop += valor;
                break;
            case 'ArrowLeft':
                playerLeft -= valor;
                break;
            case 'ArrowRight':
                playerLeft += valor;
                break;
        }
    }

    // Limita a movimentação do jogador dentro do tabuleiro
    if (playerTop < 0) playerTop = 0;
    if (playerTop > gameBoard.clientHeight - 20) playerTop = gameBoard.clientHeight - 20;
    if (playerLeft < 0) playerLeft = 0;
    if (playerLeft > gameBoard.clientWidth - 20) playerLeft = gameBoard.clientWidth - 20;

    // Atualiza a posição do jogador
    player.style.top = `${playerTop}px`;
    player.style.left = `${playerLeft}px`;

    // Verifica se o jogador colidiu com o quadrado verde
    checkCollision();
}

function checkCollision() {
    if (jogoIniciado) {
        const playerRect = player.getBoundingClientRect();
        const targetRect = targetSquare.getBoundingClientRect();

        // Verifica se há colisão entre os retângulos delimitados pelo jogador e pelo quadrado verde
        if (
            playerRect.top < targetRect.bottom &&
            playerRect.bottom > targetRect.top &&
            playerRect.left < targetRect.right &&
            playerRect.right > targetRect.left
        ) {
            // Se houver colisão, aumenta a pontuação, atualiza a exibição da pontuação e move o quadrado verde
            score++;
            scoreDisplay.textContent = `Pontos: ${score}`;
            moveTarget();
        }

        if (tempojogo === 60) {
            // Atualiza a pontuação total multiplicando a pontuação atual por 15
            totalScore = score * 15;
            continuar.style.display = "flex";
            start.disable = "true";

            // Exibe a pontuação total
            totalScoreDisplay.innerText = totalScore;
            iteracaoId = localStorage.getItem('game_id');
            update_game(iteracaoId, totalScore);
            
        }
    }
}

function moveTarget() {
    // Move o quadrado verde para uma nova posição aleatória
    targetTop = getRandomPosition();
    targetLeft = getRandomPosition();
    targetSquare.style.top = `${targetTop}px`;
    targetSquare.style.left = `${targetLeft}px`;
}

function getRandomPosition() {
    return Math.floor(Math.random() * (gameBoard.clientHeight - 20));
}

document.addEventListener('keydown', movePlayer);

let timer;
let pontos = 0;
let tempojogo = 0;


// TEMPO EM SEGUNDOS + variavel de jogoIniciado
function startTimer() {
    if (!jogoIniciado) {
        jogoIniciado = true;
        timer = setInterval(function () {
            if (tempojogo < 60) {
                tempojogo++;
                temporizador.innerText = `${tempojogo} segundos`;
                console.log("segundos: " + tempojogo);
            } else {
                // Quando o temporizador atinge 60 segundos, o botão "completou" aparece
                clearInterval(timer); // Para o timer quando atingir 60 segundos
                mostrarBotaoCompletou();
            }
        }, 1000);
    }
}

function mostrarBotaoCompletou() {
    completou.style.display = "flex"; // Mostra o botão "completou"
    document.getElementById('start').disabled = true; // Desativa o botão "Start"
    document.getElementById('start').style.opacity = "0.5"; // Altera a aparência do botão desativado
}

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