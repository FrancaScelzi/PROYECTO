// JS Favoritos
 
const storage = localStorage.getItem ('favoritos')
 console.log (storage);

 if (storage==null){
     localStorage.setItem('favoritos', '[]')
 }


let apiKey ='50a53e8e9d1beeefe2442f1dbc53288d'

let containerFavsMovies = document.querySelector ('.favsmovies')
let storageJs = JSON.parse(storage)
let movies = ''

const idFavoritos = window.localStorage.getItem ('favoritos')
const idFavoritosobj = JSON.parse(idFavoritos)

storageJs.forEach( idFavoritos => {

    fetch (`https://api.themoviedb.org/3/movie/id=${idFavoritosobj}?api_key=${apiKey}`)

.then (datos=>datos.json())

.then (respuesta => {

    let movie = `<a href="detailFilms.html?id=${respuesta.id}">
    <article class= "polaroid" >
        
        <img class = "imagen" src= "https://image.tmdb.org/t/p/w500/${respuesta.poster_path}"> 
        
        <div class = "textopolaroid"> 
            <p class= "textopolaroidtitulo">${respuesta.title}</p> 
            <p class = "textopolaroidaño"> ${respuesta.release_date}</p>
        </div>
    </article>
</a>`
         console.log (respuesta)

    containerFavsMovies.innerHTML = movie;
})

// .catch (error => console.log (error));
})
