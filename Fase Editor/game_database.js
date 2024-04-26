
function update_game(game_id, pontos) {
    if (!game_id) return { success: false, messagem: 'Invalid game'};

    let game_ref = firebase.database().ref('/Placar/' + game_id);

    game_ref.once('value').then(function(snapshot) {
        let current_points = snapshot.val().pontos || 0;
        let updates = {};
        updates['pontos'] = current_points + pontos;

        game_ref.update(updates)
        .then(function () {
            return { success: true, message: 'Game updated'};
        })
        .catch(function (error){
            return { success: false, message: `Update failed: ${error.message}`};
        });
    });
}

document.getElementById("continuar").addEventListener("click", function() {
    window.location.href = "../Fase Editor/InterEditor.html";
});

const proximasFases = [
    "../Fase Filmes/InterFilme.html",
    "../fase carrinho/InterCarrinho.html",
    "../fase pizza/intermediaria.html",
    "../Final.html"
];

// Recupera o valor de faseAtualIndex do localStorage ou define como 0 se não existir
let faseAtualIndex = localStorage.getItem('faseAtualIndex') ? parseInt(localStorage.getItem('faseAtualIndex')) : 0;

document.getElementById("placarContinuar").addEventListener("click", function() {
    // Verifica se faseAtualIndex ultrapassou o limite do array
    if (faseAtualIndex >= proximasFases.length) {
        faseAtualIndex = 0; // Reinicia o ciclo se alcançar o final do array
    }
    
    document.getElementById("linkProximaFase").href = proximasFases[faseAtualIndex];
    
    // Incrementa faseAtualIndex
    faseAtualIndex++;
    
    // Salva o novo valor de faseAtualIndex no localStorage
    localStorage.setItem('faseAtualIndex', faseAtualIndex.toString());
});


