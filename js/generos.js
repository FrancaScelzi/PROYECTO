// Generos JS

let containerGeneros = document.querySelector ('.generos')

fetch ('https://api.themoviedb.org/3/genre/movie/list?api_key=50a53e8e9d1beeefe2442f1dbc53288d')
.then (datos=>datos.json())
.then (respuesta => {

   
    
    console.log (respuesta);
    let generos = ''

    respuesta.genres.forEach ((genero, index) => {
        
       

        generos += 
        `<div class="polaroid">
        <a class="genero" href="detailGeneros.html?id=${genero.id}">
        <p class= " titulospolaroid"> ${genero.name} </p>
        </a>
        </div>`
        

    });

    containerGeneros.innerHTML= generos
})

.catch(function(error){
    console.log('El error fué: ' + error);
})