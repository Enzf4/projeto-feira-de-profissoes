$('#searchBtn').click(function()
        {
            startTimer();

            let query=$('#query').val();

            const palavroes = [
                "Palavrão", "Merda", "Caralho", "Bosta", "Puta", "Buceta", "Foda", "Piroca", "Putaquepariu", "Filho da puta", "Vagem", "Putana", "Putão", "Putaçudo", "Porra", "Caralho", "Arrombado", "Buceta", "Cuzão", "Pau", "Cocô", "Cu", "Foder", "Fuder", "Vadia", "Viado", "Vagabundo", "Desgraça", "Idiota", "Estúpido", "Inútil", "Estuprador", "Prostituta", "Cretino", "Degenerado", "Imbecil", "Parvo", "Besta", "Estupidez", "Estupidez", "Tosco", "Cachorro", "Cabra", "Estrume", "Excremento", "Palhaço", "Desgraçado", "Desgraçada", "Maldito", "Maldita", "Mijar", "Mijo", "Mijão", "Mijona", "Piranha", "Peste", "Piranho", "Piranha", "Puto", "Merdinha", "Bostinha", "Caralhinho", "Veadinho", "Gayzinho", "Sapatão", "Cretina", "Machorra", "Lesbica", "Gordo", "Gorda", "Feia", "Feio", "Burro", "Burra", "Feioso", "Cheiroso", "Corno", "Cornudo", "Chifrudo", "Burro", "Burra", "Pamonha", "Pamonha", "Feio", "Burro", "Pamonha"
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
            $('#poster2').attr("src", "https://image.tmdb.org/t/p/w500"+data.results[0].poster_path)
        })

        })

        const size = document.getElementById("inputSize")
        const acerto = document.getElementById("acerto")
        const poster = document.getElementById("poster")
        const score = document.getElementById("scoreDisplay")

        let timer;
        let pontos = 500
        let tempo = 0;

        function startTimer() {
            
            timer = setInterval(function() {
                tempo++;
                console.log("Tempo decorrido: " + tempo);
            }, 100);
        }
        
        function updatePoster() {
            poster.style.height = inputSize.value + "px";

            if(inputSize.value == 325){
                acerto.style.display = "block";
                size.disabled = true;
                if(pontos - tempo > 0){
                    score.innerText = pontos - tempo;
                }else{
                    score.innerText = 0;
                }
                
                
                clearTimeout(timer);

            }
        };
        size.addEventListener('input', updatePoster);

        if(query != "" || query != null){
            $('#query').keypress(function(event) {
                if (event.keyCode === 13){ 
                    $('#searchBtn').click();  
                }
            });
        }
        