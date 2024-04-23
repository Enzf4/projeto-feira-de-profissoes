window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 5) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.getElementById('about-button').addEventListener('click', function() {
    let section = document.getElementById('about');
    section.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("button").addEventListener("click", function() {
    window.location.href = "../Fase Filmes/InterFilme.html";
});