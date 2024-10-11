$('#searchBtn').click(function()
        {
            startTimer();

            let query=$('#query').val().toLowerCase();

            const palavroes = [
                "Palavrão","Porno", "Sexo", "Merda", "Penis", "Caralho", "Bosta", "Puta", "Buceta", "Foda", "Piroca", "Putaquepariu", "Filho da puta", "Vagem", "Putana", "Putão", "Putaçudo", "Porra", "Caralho", "Arrombado", "Buceta", "Pau", "Cocô", "Foder", "Fuder", "Vadia", "Viado", "Idiota", "Estúpido", "Inútil", "Estuprador", "Prostituta", "Cretino", "Degenerado", "Imbecil", "Parvo", "Besta", "Estupidez", "Estupidez", "Tosco", "Cachorro", "Cabra", "Estrume", "Excremento", "Palhaço", "Desgraçado", "Desgraçada", "Maldito", "Maldita", "Mijar", "Mijo", "Mijão", "Mijona", "Peste", "Piranho", "Puto"
            ];

            const queryCensurada = palavroes.some(palavrao => query.includes(palavrao.toLowerCase()));

            if (queryCensurada) {
                query = "cute animals";
            }

            $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=3349c6aa066a33c14a64384200f8c190&query="+query+"&include_adult=false&language=en-US&page=1", function(data)
        {
            console.log(data.results[0])
            $('.movies').css("display", "flex");
            $('.box').css("display", "flex");
            $('#pagetitle').css("margin-top", "25px");
            $('#poster').attr("src", "https://image.tmdb.org/t/p/w500"+data.results[0].poster_path)
            $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=3349c6aa066a33c14a64384200f8c190&query=A Rede Social&include_adult=false&language=en-US&page=1", function(data2) {
            $('#poster2').attr("src", "https://image.tmdb.org/t/p/w500" + data2.results[0].poster_path);
        });
    });
});

const size = document.getElementById("inputSize");
const acerto = document.getElementById("acerto");
const poster = document.getElementById("poster");
const score = document.getElementById("scoreDisplay");
const continuar = document.getElementById("continuar");

let timer;
let pontos = 500;
let tempo = 0;

function startTimer() {
    timer = setInterval(function() {
        tempo++;
        console.log("Tempo decorrido: " + tempo);
    }, 200);
}

function updatePoster() {
    poster.style.height = inputSize.value + "px";

    if (inputSize.value == 325) {
        acerto.style.display = "block";
        continuar.style.display = "flex";
        size.disabled = true;
        const pontuacaoFinal = Math.max(pontos - tempo, 0);
        score.innerText = pontuacaoFinal;
        editorId = localStorage.getItem('game_id');
        update_game(editorId, pontuacaoFinal);
        clearTimeout(timer);
    }
}

size.addEventListener('input', updatePoster);

if (query != "" || query != null) {
    $('#query').keypress(function(event) {
        if (event.keyCode === 13) {
            $('#searchBtn').click();
        }
    });
}