const game_database = {};

(function () {
    let game_id = false;

    function new_game(player1, board) {
        const game_data = {
            player1: player1,
            board: board,
            gameover: false,
            createdat: firebase.database.ServerValue.TIMESTAMP,
        };

        if (!game_id) {
            game_id = firebase.database().ref().child('games').push().key;
        }

        let updates = {}
            updates['/games/' + game_id] = game_data;
        
        let game_ref = firebase.database().ref();
        
        game_ref.update(updates)
            .then(function () {
                return { success: true, message: 'Game created'};
            })
            .catch(function (error){
                return { success: false, message: `Creation failed: ${error.message}`};
            })
     }

    function remove_game() {
        if (!game_id) return { success: false, messagem: 'Invalid game'};

        let game_ref = firebase.database().ref
     }

    function update_game() {
        if (!game_id) return { success: false, messagem: 'Invalid game'};
    }

    function reset_game() { 
        if (!game_id) return { success: false, messagem: 'Invalid game'};
    }



    game_database.new = new_game;
    game_database.remove = remove_game;
    game_database.update = update_game;
    game_database.reset = reset_game;



})()