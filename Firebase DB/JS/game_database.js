// const game_database = {};
let math = Math.floor(Math.random() * 10000);
// let userId = '';
let banco = [];
let i = 0;

const usuarioBtn = document.getElementById("usuarioBtn");
var var_lista = document.getElementById("div_lista");

    var dados = ""

    var db = firebaseRef = firebase.database().ref().child("Placar");
    db.on('child_added', function(snapshot)
    {
        var adicionado = snapshot.val();
        dados ="<table>" +"<tr><td>"+adicionado+"</td></tr>" + dados;

        var_lista.innerHTML = dados;
    })


    var nameRef = firebase.database().ref('Placar/');
    nameRef.on('value', (snapshot) => {
    console.log(snapshot.val())
    banco = snapshot.val()
    });

    function gravarUsuario(usuario, pontos) {
    firebase.database().ref('Placar/' + game_id).set({
    nome: usuario + math,
    pontos: pontos,
    });
    };


    // $('#usuarioBtn').click(function()
    // {
    //     let usuario=$('#usuario').val();
    //     gravarUsuario(usuario, 0);
    //     game_id = Math.floor(Math.random() * 10000);
    // })

    function onClick()
    {
    game_id = firebase.database().ref().child('placar').push().key;
    let math = Math.floor(Math.random() * 10000);
    let usuario=$('#usuario').val();
    gravarUsuario(usuario, 0);;
    }

    usuarioBtn.addEventListener("click", onClick);

// async function gravarUsuario(userId, pontos) {
//     firebase.database().ref('Placar/' + "player" + i).set({
//     nome: userId + game_id,
//     pontos: pontos,
//     });
//     game_id = Math.floor(Math.random() * 10000);
//     i++
// }




// (function () {

//     game_id = Math.floor(Math.random() * 10000);

//     function gravarUsuario(userId, pontos) {
//         firebase.database().ref('Placar/' + "player" + i).set({
//         nome: userId + game_id,
//         pontos: pontos,
//         });
//         game_id = Math.floor(Math.random() * 10000);
//         i++
//     }


//     function lerUsuario() {
//         var nameRef = firebase.database().ref('Placar/');
//         nameRef.on('value', (snapshot) => {
//           console.log(snapshot.val())
//           banco = snapshot.val()
//         });
//     }

//     function updatePontos(userId, pontos) {


//         const resp = document.getElementById("resposta")
//         let i = 0
//         while (i == banco.length)
//         {
//             if (usuario == banco.indexOf(i))
//             {
//                 return console.log("usuario já escolhido");
//             }
//             i++
//         }

//         if (userId !== banco)
//         firebase.database().ref('Placar/' + userId).set({
//         pontos: pontos,
//         });

        
//     }

   
//     function testUsuario(usuario) {

//         const resp = document.getElementById("resposta")
//         let i = 0
//         while (i == banco.length)
//         {
//             if (usuario == banco.indexOf(i))
//             {
//                 return console.log("usuario já escolhido");
//             }
//             else
//             {
//                 return console.log("tamo fudido");
//             }
//             i++
//         }
//     }


//     function new_game(player, pontos) {

//         var game_data = {
//             player: player,
//             pontos: pontos,
//         };

//         // let game_ref = firebase.database().ref('/placar/' + game_id);
            
//         // game_ref.('player')
//         // .then(function () {

//         // var gameplayer_ref = firebase.database().ref('/placar/' + game_id);
//         // gameplayer_ref.on('player', (snapshot) => {
//         // const data = snapshot.val();
//         // updateStarCount(postElement, data);
//         // });

//         const gameplayer_ref = firebase.database().ref();
//         gameplayer_ref.child('/placar/' + game_id).child(player).get().then((snapshot) => {
//         if (snapshot.exists()) {
//             console.log(snapshot.val());
//         } else {
//             console.log("No data available");
//         }
//         }).catch((error) => {
//         console.error(error);
//         });

//         if (player != gameplayer_ref) 
//         {

//             game_id = firebase.database().ref().child('placar').push().key;

//             let updates = {}

//             updates['/placar/' + game_id] = game_data;
            
//             let game_ref = firebase.database().ref();
            
//             game_ref.update(updates)
//                 .then(function () {
//                     return { success: true, message: 'Game created'};
//                 })
//                 .catch(function (error){
//                     return { success: false, message: `Creation failed: ${error.message}`};
//                 })
//         }

//         // let gameplayer_ref = firebase.database().ref('/placar/' + game_id.player);

//         if (game_id = '') 
//         {

//             game_id = firebase.database().ref().child('placar').push().key;

//             let updates = {}

//             updates['/placar/' + game_id] = game_data;
            
//             let game_ref = firebase.database().ref();
            
//             game_ref.update(updates)
//                 .then(function () {
//                     return { success: true, message: 'Game created'};
//                 })
//                 .catch(function (error){
//                     return { success: false, message: `Creation failed: ${error.message}`};
//                 })
//         }
//         // else (player != gameplayer_ref) 
//         // {

//         //     game_id = firebase.database().ref().child('placar').push().key;

//         //     let updates = {}

//         //     updates['/placar/' + game_id] = game_data;
            
//         //     let game_ref = firebase.database().ref();
            
//         //     game_ref.update(updates)
//         //         .then(function () {
//         //             return { success: true, message: 'Game created'};
//         //         })
//         //         .catch(function (error){
//         //             return { success: false, message: `Creation failed: ${error.message}`};
//         //         })
//         // }

//      }

//     //  let game_id = false;

//     //  function new_game(player1, board) {
//     //      const game_data = {
//     //          player1: player1,
//     //          board: board,
//     //          gameover: false,
//     //          createdat: firebase.database.ServerValue.TIMESTAMP,
//     //      };
 
//     //      if (!game_id) {
//     //          game_id = firebase.database().ref().child('games').push().key;
//     //      }
 
//     //      let updates = {}
//     //          updates['/games/' + game_id] = game_data;
         
//     //      let game_ref = firebase.database().ref();
         
//     //      game_ref.update(updates)
//     //          .then(function () {
//     //              return { success: true, message: 'Game created'};
//     //          })
//     //          .catch(function (error){
//     //              return { success: false, message: `Creation failed: ${error.message}`};
//     //          })
//     //   }

//     function remove_game() {
//         if (!game_id) return { success: false, messagem: 'Invalid game'};

//         let game_ref = firebase.database().ref('/placar/' + game_id);

//         game_ref.remove()
//             .then(function () {
//                 return { success: true, message: 'Game created'};
//             })
//             .catch(function (error){
//                 return { success: false, message: `Creation failed: ${error.message}`};
//             })
//      }

//     function update_game(pontos) {
//         if (!game_id) return { success: false, messagem: 'Invalid game'};


//         let game_ref = firebase.database().ref('/placar/' + game_id);

//         let updates = {};
//         updates['/pontos'] = pontos;


//         game_ref.update(updates)
//         .then(function () {
//             return { success: true, message: 'Game created'};
//         })
//         .catch(function (error){
//             return { success: false, message: `Update failed: ${error.message}`};
//         })
//     }

//     function reset_game() { 
//         if (!game_id) return { success: false, messagem: 'Invalid game'};

//         game_id = false;
//         return { success: true, message: 'Game reset' };
//     }

//     async function listen_game() {
//         if (!game_id) return { success: false, message: 'Invalid game'}

//         let game_ref = firebase.database().ref('/placar/' + game_id);

//         game_ref.once('child_changed')
//         .then(function (snapshot) {

//             if(snapshot.key == 'pontos'){
//                 console.log('pontos changed', snapshot.val());
//                 return { success: true, message: 'pontos update', data: snapshot.val()}
//             }

//         })
//         .catch(function (error){
//             return { success: false, message: `Invalid data: ${error.message}`};
//         })
//     }


//     game_database.new = new_game;
//     game_database.remove = remove_game;
//     game_database.upda = update_game;
//     game_database.reset = reset_game;
//     game_database.listen = listen_game;
//     game_database.gravar = gravarUsuario;
//     game_database.read = lerUsuario;
//     game_database.update = updatePontos;
//     game_database.test = testUsuario;
    


// })()