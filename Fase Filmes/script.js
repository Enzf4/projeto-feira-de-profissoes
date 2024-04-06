$('#searchBtn').click(function()
        {
            startTimer();

            let query=$('#query').val();

            $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=3349c6aa066a33c14a64384200f8c190&query="+query+"&include_adult=false&language=en-US&page=1", function(data)
        {
            console.log(data.results[0])
            $('.movies').css("display", "flex");
            $('.box').css("display", "block");
            $('#poster').attr("src", "https://image.tmdb.org/t/p/w500"+data.results[0].poster_path)
            $('#poster2').attr("src", "https://image.tmdb.org/t/p/w500"+data.results[0].poster_path)
        })

        })

        const size = document.getElementById("inputSize")
        const acerto = document.getElementById("acerto")
        const poster = document.getElementById("poster")
        const score = document.getElementById("scoreDisplay")

        let timer;

        let tempo = 0;

        function startTimer() {
            
            timer = setInterval(function() {
                tempo++;
                console.log("Tempo decorrido: " + tempo + " segundos");
            }, 100);
        }
        
        function updatePoster() {
            poster.style.height = inputSize.value + "px";

            if(inputSize.value == 400){
                acerto.style.display = "block";
                size.disabled = true;
                score.innerText = 500 - tempo;
                clearTimeout(timer);

            }
        };
        size.addEventListener('input', updatePoster);