const game_database = {};
const usuarioBtn = document.getElementById("usuarioBtn");
const usuarioInput = document.getElementById("usuario");

function gravarUsuario(game_id, usuario, pontos) {
    var ref = firebase.database().ref('Placar/');
    ref.orderByChild('nome').equalTo(usuario).once('value', snapshot => {
        if (snapshot.exists()) {
            continuar.disabled = true;
            alert('O nome já foi escolhido. Por favor, escolha outro nome.');
        } else {
            ref.child(game_id).set({
                nome: usuario,
                pontos: pontos,
            });
            alert("Usuário registrado com sucesso.");
        }
    });
}

document.getElementById("usuarioBtn").addEventListener("click", function() {
    game_id = firebase.database().ref().child('placar').push().key;
    let usuario = $('#usuario').val();
    
    // Verifica se o campo de entrada está vazio
    if(usuario.trim() === '') {
        // Se estiver vazio, não faz nada
        return;
    }
    gravarUsuario(game_id, usuario, 0);
    document.getElementById("continuar").disabled = false;
} );

async function onClick() {
    game_id = firebase.database().ref().child('placar').push().key;
    let usuario = $('#usuario').val();
    
    // Verifica se o campo de entrada está vazio
    if(usuario.trim() === '') {
        // Se estiver vazio, não faz nada
        return;
    }
    gravarUsuario(game_id, usuario, 0);
    document.getElementById("continuar").disabled = false;
}

// Adiciona um evento de entrada ao campo de entrada para verificar se está vazio
usuarioInput.addEventListener("input", function() {
    // Se o campo estiver vazio, desativa o botão
    if(this.value.trim() === '') {
        usuarioBtn.disabled = true;
        continuar.disabled = true;
    } else {
        usuarioBtn.disabled = false;
    }
});

function readUserData() {
    var var_lista = document.getElementById("div_lista");
    var dados = "";
    var jogadores = [];

    var db = firebaseRef = firebase.database().ref().child("Placar");

    db.on('child_added', function(snapshot) {
        var adicionado = snapshot.val();
        jogadores.push(adicionado);
    });

    db.once('value', function() {
        jogadores.sort(function(a, b) {
            return b.pontos - a.pontos;
        });

        for (var i = 0; i < jogadores.length; i++) {
            dados += "<table>" + "<tr><td>" + jogadores[i].nome + ": " + jogadores[i].pontos + "</td></tr>";
        }

        var_lista.innerHTML = dados;
    });
}

function update_game(game_id, pontos) {
    if (!game_id) return { success: false, messagem: 'Invalid game'};

    let game_ref = firebase.database().ref('/Placar/' + game_id);
    let updates = {};
    updates['pontos'] += pontos;

    game_ref.update(updates)
    .then(function () {
        return { success: true, message: 'Game created'};
    })
    .catch(function (error){
        return { success: false, message: `Update failed: ${error.message}`};
    });
}

game_database.read = readUserData;
game_database.update = update_game;

document.getElementById("continuar").addEventListener("click", function() {
    window.location.href = "../Fase Editor/InterEditor.html";
});

const proximasFases = [
    "../Fase Filmes/InterFilme.html",
    "../fase carrinho/InterCarrinho.html",
    "../fase pizza/intermediaria.html"
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



