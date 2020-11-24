// JS Home

// Peliculas populares

let containerPeliculasPopulares = document.querySelector ('.peliculaspopulares');

fetch ('https://api.themoviedb.org/3/movie/popular?api_key=50a53e8e9d1beeefe2442f1dbc53288d')
.then (datos=>datos.json() )
.then (respuesta => {

    console.log (respuesta);
    let movies = ''

    respuesta.results.forEach ((pelicula, index) => {
        if (index < 6){

    
        movies += 
        `<a class="apolaroid" href="detailFilms.html?id=${pelicula.id}"> 
            <article class= "polaroid" > 
                <img class = "imagen" src= "https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"> 
                
                <div class = "textopolaroid"> 
                    <p class= "textopolaroidtitulo"> ${pelicula.title} </p> 
                    <p class = "textopolaroidaño"> ${pelicula.release_date} </p>
             </article>
         </a>`
        }
    });

    containerPeliculasPopulares.innerHTML= movies
})


// Series populares

let containerSeriesPopulares = document.querySelector ('.seriespopulares')

fetch (`https://api.themoviedb.org/3/tv/popular?api_key=50a53e8e9d1beeefe2442f1dbc53288d`)
.then (datos=>datos.json() )
.then (respuesta => {
    console.log (respuesta);
    let movies = ''

    respuesta.results.forEach ((serie, index) => {
        if (index < 6){

    
        movies += 
        `<a class="apolaroid" href="detailSeries.html?id=${serie.id}"> 
            <article class= "polaroid" > 
                 <img class = "imagen" src= "https://image.tmdb.org/t/p/w500/${serie.poster_path}"> 
            
                  <div class = "textopolaroid"> 
                         <p class= "textopolaroidtitulo"> ${serie.name} </p> 
                        <p class = "textopolaroidaño"> ${serie.first_air_date} </p>
            </article>
        </a>`
        }
    });

    containerSeriesPopulares.innerHTML= movies
})

// Top rated

let containerTopRated = document.querySelector ('.toprated');

fetch ('https://api.themoviedb.org/3/movie/top_rated?api_key=50a53e8e9d1beeefe2442f1dbc53288d')
.then (datos=>datos.json() )
.then (respuesta => {
    console.log (respuesta);
    let movies = ''

    respuesta.results.forEach ((pelicula, index) => {
        if (index < 6){

    
        movies += 
        `<a class="apolaroid" href="detailFilms.html?id=${pelicula.id}">
            <article class= "polaroid" > 
                 <img class = "imagen" src= "https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"> 
            
                 <div class = "textopolaroid"> 
                       <p class= "textopolaroidtitulo"> ${pelicula.title} </p> 
                         <p class = "textopolaroidaño"> ${pelicula.release_date} </p>
            </article>
        </a>`
        }
    });

    containerTopRated.innerHTML= movies
})