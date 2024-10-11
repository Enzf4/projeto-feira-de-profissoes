document.addEventListener("DOMContentLoaded", function() {
    startTimer();
});

const atualizarPontuacao = async () => {
  const nomeColuna = "tempo_fase3"; //MUDAR DE ACORDO COM O NOME DA COLUNA DO BANCO

  if (userId) {
      const baseUrl = 'https://feiraprofissoesunisanta2024-2-backend.onrender.com/usuario';

      try {
          const res = await fetch(baseUrl, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, nomeColuna, tempoFase }),
          });

          if (!res.ok) throw new Error((await res.json()).error);
      } catch (error) {
          console.error("Error:", error);
      }
  }
}

function moverCarrinho(valor) {
    const carrinho = document.getElementById('carrinho');
    const valorNumerico = parseFloat(valor); // Converte o valor para número

    // Verifica se o valor é um número válido
    if (!isNaN(valorNumerico)) {
        carrinho.style.marginLeft = valorNumerico + 'px'; // Define a margem esquerda com base no valor
    }
    if(valorNumerico >= 1500 && valorNumerico <= 1750){
        correto.style.display = "block";
        menos.style.display = "none"
        userInput.disabled = true;
        buttonProximo.style.display = "flex";
        atualizarPontuacao();
    }
    else 
        if(valorNumerico > 1750){
            menos.style.display = "flex";
    }else 
        if(valorNumerico < 1500){
        menos.style.display = "none"
    }
}