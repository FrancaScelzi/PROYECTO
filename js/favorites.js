// JS Favoritos
 
const storageMovies = localStorage.getItem ('MovieFavs')
 console.log (storageMovies);

const storageSeries = localStorage.getItem ('SerieFavs')


let apiKey ='50a53e8e9d1beeefe2442f1dbc53288d'

let containerFavsMovies = document.querySelector ('.favsmovies')
let containerFavsSeries = document.querySelector ('.favsseries')

let storageJsMovie = JSON.parse(storageMovies)
console.log(storageJsMovie)

let storageJsSerie = JSON.parse(storageSeries)
console.log (storageJsSerie)

let movies = ''

const idFavsMovies = window.localStorage.getItem ('MovieFavs')
const idFavsSeries = window.localStorage.getItem ('SerieFavs')
// const idFavoritosobj = JSON.parse(idFavoritos)

storageJsMovie.forEach( idMovie => {

    fetch (`https://api.themoviedb.org/3/movie/${idMovie}?api_key=${apiKey}`)

.then (datos=>datos.json())

.then (respuesta => {

    console.log (respuesta)

    let movie = `
    <article class= "polaroid" >
        
    <a href="detailFilms.html?id=${respuesta.id}"><img class = "imagen" src= "https://image.tmdb.org/t/p/w500/${respuesta.poster_path}"></a>
        
        <div class = "textopolaroid"> 
            <p class= "textopolaroidtitulo">${respuesta.title}</p> 
            <p class = "textopolaroidaño"> ${respuesta.release_date}</p>
            <button class="button">Sacar de favoritos</button>
        </div>
    </article>`
         console.log (respuesta)

    containerFavsMovies.innerHTML += movie;
})

// .catch (error => console.log (error));
})

storageJsSerie.forEach( idSerie => {

    fetch (`https://api.themoviedb.org/3/tv/${idSerie}?api_key=${apiKey}`)

.then (datos=>datos.json())

.then (respuesta => {

    console.log (respuesta)

    let serie = `
    <article class= "polaroid" >
        
    <a href="detailFilms.html?id=${respuesta.id}"><img class = "imagen" src= "https://image.tmdb.org/t/p/w500/${respuesta.poster_path}"></a>
        
        <div class = "textopolaroid"> 
            <p class= "textopolaroidtitulo">${respuesta.name}</p> 
            <p class = "textopolaroidaño"> ${respuesta.first_air_date}</p>
            <button class="button">Sacar de favoritos</button>
            
        </div>
    </article>`
         console.log (respuesta)

    containerFavsSeries.innerHTML += serie;
})

// .catch (error => console.log (error));
})

// let boton = document.querySelector('.button')

// boton.addEventListener ('click', function () {
//     storageJsMovie = storageJsMovie.filter (function (movie){
//         return movie
//     })
// })



