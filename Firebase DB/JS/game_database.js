const game_database = {};
const usuarioBtn = document.getElementById("usuarioBtn");

    // var nameRef = firebase.database().ref('Placar/');
    // nameRef.on('value', (snapshot) => {
    // console.log(snapshot.val())
    // });


    function gravarUsuario(game_id, usuario, pontos) 
    {
        var ref = firebase.database().ref('Placar/');

        // Verifica se o nome já existe
        ref.orderByChild('nome').equalTo(usuario).once('value', snapshot => {
            if (snapshot.exists()) {
                alert('O nome já foi escolhido. Por favor, escolha outro nome.');
            } else {
                // Grava os dados se o nome não existir
                ref.child(game_id).set({
                    nome: usuario,
                    pontos: pontos,
                });
            }
        });
    };

    async function onClick()
    {
        game_id = firebase.database().ref().child('placar').push().key;
        let usuario=$('#usuario').val();
        gravarUsuario(game_id, usuario, 0);
    }
    usuarioBtn.addEventListener("click", onClick);

    function readUserData() 
    {
        var var_lista = document.getElementById("div_lista");

        var dados = ""

        var db = firebaseRef = firebase.database().ref().child("Placar");
        var jogadores = [];
        db.on('child_added', function(snapshot) {
            var adicionado = snapshot.val();
            jogadores.push(adicionado);
        });

        // Aguarda todos os dados serem carregados
        db.once('value', function() {
            // Ordena os jogadores pelo campo 'pontos' em ordem decrescente
            jogadores.sort(function(a, b) {
                return b.pontos - a.pontos;
            });

            // Cria a tabela com os jogadores ordenados
            for (var i = 0; i < jogadores.length; i++) {
                dados += "<table>" + "<tr><td>" + jogadores[i].nome + ": " + jogadores[i].pontos + "</td></tr>";
            }

            var_lista.innerHTML = dados;
        });
    };

    function update_game(game_id, pontos) 
    {
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
        })
    }

    game_database.read = readUserData;
    game_database.update = update_game;