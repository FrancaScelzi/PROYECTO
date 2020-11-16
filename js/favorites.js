// JS Favoritos
let apiKey ='50a53e8e9d1beeefe2442f1dbc53288d'

let containerFavoritos = document.querySelector ('.favoritos')

const idFavoritos = window.localStorage.getItem ('favoritos')
    
fetch ('https://api.themoviedb.org/3/movie/${idFavoritos}?api_key=${apiKey}')

.then (datos=>datos.json())
.then (respuesta => {
    let movie = 
        `<article>
            <h2> ${respuesta.title}</h2>
            <img src="https://image.tmdb.org/t/p/w500/${respuesta.poster_path}"/>
        </article>`

    containerFavoritos.innerHTML = movie;
})

.catch (error => console.log (error));