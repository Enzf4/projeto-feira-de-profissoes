(function () {

    var firebaseConfig = {
      
      apiKey: "AIzaSyCR3pG_nz3JgciXiskGQex-Wx7zTL4U3xg",
      authDomain: "projeto-feira-de-profissoes.firebaseapp.com",
      databaseURL: "https://projeto-feira-de-profissoes-default-rtdb.firebaseio.com/",
      projectId: "projeto-feira-de-profissoes",
      storageBucket: "projeto-feira-de-profissoes.appspot.com",
      messagingSenderId: "371773390210",
      appId: "1:371773390210:web:f6df69e14d1f943058239b",
      // measurementId: "G-RM023SDEJ9"
      };
  
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  
  })()
  

const game_database = {};
const usuarioBtn = document.getElementById("usuarioBtn");
const usuarioInput = document.getElementById("usuario");

function gravarUsuario(game_id, usuario, pontos) {
    var ref = firebase.database().ref('Placar/');
    ref.orderByChild('nome').equalTo(usuario).once('value', snapshot => {
        if (snapshot.exists()) {
            alert('O nome já foi escolhido. Por favor, escolha outro nome.');
            continuar.disabled = true;
        } else {
            ref.child(game_id).set({
                nome: usuario,
                pontos: pontos,
            });
            alert("Usuário registrado com sucesso.");
            document.getElementById("continuar").disabled = false;
        }
    });
}

document.getElementById("usuarioBtn").addEventListener("click", function() {
    let game_id = firebase.database().ref().child('placar').push().key;
    let usuario = $('#usuario').val();
    
    // Verifica se o campo de entrada está vazio
    if(usuario.trim() === '') {
        // Se estiver vazio, não faz nada
        return;
    }
    
    // Armazena o game_id no localStorage
    localStorage.setItem('game_id', game_id);
    
    gravarUsuario(game_id, usuario, 0);
});

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


window.addEventListener("load", function() {
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
});



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

