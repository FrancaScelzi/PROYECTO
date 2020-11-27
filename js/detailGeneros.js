let queryString = location.search;

let queryObject = new URLSearchParams (queryString);
console.log (queryObject);

let id = queryObject.get('id');
console.log (id)

let apiKey = "50a53e8e9d1beeefe2442f1dbc53288d"; 

let genres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`

let containerGenres = document.querySelector ('.container');


fetch (genres)
.then (datos=>datos.json() )
.then (respuesta => {
  console.log(respuesta);

  let genreTitle = document.querySelector('.titlegenero');

  for (let i=0; i<respuesta.genres.length; i++){
    console.log(id);
    console.log(respuesta.genres[i].id);
    if(id == respuesta.genres[i].id){
      
      genreTitle.innerText = respuesta.genres[i].name
    }    
  }
})

.catch(function(error){
  console.log('El error fué: ' + error);
})

let contenidoMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false`

let containerMovies = document.querySelector ('.contenidomovies');

fetch (contenidoMovies)
.then (datos => datos.json() )
.then (respuesta => {
  console.log (respuesta);
let movies = ""

respuesta.results.forEach((pelicula,index) =>{
  if(index<10){
    movies +=
    `
    <a href="detailFilms.html?id=${pelicula.id}" class= "polaroid" >
     
        <img class = "imagen" src= "https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"> 
        
        <div class = "textopolaroid"> 
          <p class= "textopolaroidtitulo"> ${pelicula.title}</p> 
          <p class = "textopolaroidaño"> ${pelicula.release_date}</p>
        </div>
          
      </a> 
      `

  }
})
containerMovies.innerHTML = movies
})

.catch(function(error){
  console.log('El error fué: ' + error);
})

let contenidoTv = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false`

let containerTv = document.querySelector ('.contenidotv');

fetch (contenidoTv)
.then (datos => datos.json() )
.then (respuesta => {
  console.log (respuesta);
let series = ""
 
respuesta.results.forEach((serie,index) =>{
  if(index<10){
    series +=
    `
    <a href="detailSeries.html?id=${serie.id}" class= "polaroid" >
     
        <img class = "imagen" src= "https://image.tmdb.org/t/p/w500/${serie.poster_path}"> 
        
        <div class = "textopolaroid"> 
          <p class= "textopolaroidtitulo"> ${serie.name}</p> 
          <p class = "textopolaroidaño"> ${serie.first_air_date}</p>
        </div>
          
      </a> 
      `

  }
})
containerTv.innerHTML = series
})

.catch(function(error){
  console.log('El error fué: ' + error);
})