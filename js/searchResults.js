// JS Search Results

let queryString = location.search;

let queryObject = new URLSearchParams (queryString);
console.log (queryObject);

let search = queryObject.get('search');
console.log (search)

let apiKey = "50a53e8e9d1beeefe2442f1dbc53288d";

let url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`
let containerResults = document.querySelector ('main');

fetch (url)
.then (datos=>datos.json() )
.then (respuesta => {
    console.log (respuesta);
    let results = ''

     respuesta.results.forEach ((multi, index) => {
       if (multi.media_type == "tv"){
         results += 
         ` <section class="contenido">
         <a href="detailFilms.html?id=${multi.id}"> 
           <article class= "polaroid" > 
               <img class = "imagen" src= "https://image.tmdb.org/t/p/w500/${multi.poster_path}"> 
               <div class = "textopolaroid"> 
                   <p class= "textopolaroidtitulo"> ${multi.name}</p> 
                   <p class = "textopolaroidaño"> ${multi.first_air_date} </p>
            </article>
        </a>
       </section>` }

      else if (multi.media_type == "movie"){
        results +=
        ` <section class="contenido">
         <a href="detailFilms.html?id=${multi.id}"> 
           <article class= "polaroid" > 
               <img class = "imagen" src= "https://image.tmdb.org/t/p/w500/${multi.poster_path}"> 
               <div class = "textopolaroid"> 
                   <p class= "textopolaroidtitulo"> ${multi.title}</p> 
                   <p class = "textopolaroidaño"> ${multi.release_date} </p>
            </article>
        </a>
       </section>` 
      }
      containerResults.innerHTML= results
       })
      })