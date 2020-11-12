// Generos JS

let containerGeneros = document.querySelector ('.generos')

fetch ('https://api.themoviedb.org/3/genre/movie/list?api_key=50a53e8e9d1beeefe2442f1dbc53288d')
.then (datos=>datos.json())
.then (respuesta => {
    console.log (respuesta);
    let generos = ''

    respuesta.genres.forEach ((genero, index) => {
        
        if (index <18) {

        generos += 
        `<div class="polaroid">
        <p class= " titulospolaroid"> ${genero.name} </p>
        <div class="subtitulospolaroid">
            <p class="subtgeneros"> GÉNEROS </p>
            <p class="subtnumeros">  </p>
        </div>
        </div>`
        }


    });

    containerGeneros.innerHTML= generos
})