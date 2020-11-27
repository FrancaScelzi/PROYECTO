// JS Search Results

let queryString = window.location.search;

let queryObject = new URLSearchParams (queryString);
console.log (queryObject);

let search = queryObject.get('searchData');
console.log (search)
let mediaType = queryObject.get('mediaType');

let apiKey = "50a53e8e9d1beeefe2442f1dbc53288d";

let url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`

let containerResults = document.querySelector ('.resultados');
let searchTitle = document.querySelector ('.searchTitle')

window.addEventListener ("load", function(){

let spinner = document.querySelector ('.loader')

  spinner.style.display= "none"
}) 


// Buscador Avanzado

    // Filtro: SOLO PELÍCULAS
      if (mediaType == "movie"){

        fetch (url)
        .then (datos=>datos.json() )
        .then (respuesta => {

        console.log (respuesta);
        let results = ''

      respuesta.results.forEach ((multi, index) => {
        if (multi.media_type == "movie"){

          results +=
          ` <section>
          <a class="apolaroid" href="detailFilms.html?id=${multi.id}"> 
          <article class= "polaroid" > 
          <img class = "imagen" src= "https://image.tmdb.org/t/p/w500/${multi.poster_path}"> 
          <div class = "textopolaroid"> 
          <p class= "textopolaroidtitulo"> ${multi.title}</p> 
          <p class = "textopolaroidaño"> ${multi.release_date} </p>
          </div>
          </article>
          </a>
          </section>` 
          
          containerResults.innerHTML= results
        }
          
      })
            searchTitle.innerHTML = search
      })
      .catch(function(error){
        console.log('El error fué: ' + error);
    })
      }
        
      // Filtro: SOLO SERIES
      else if (mediaType == "tv"){

        fetch (url)
        .then (datos=>datos.json() )
        .then (respuesta => {

        console.log (respuesta);
        let results = ''

      respuesta.results.forEach ((multi, index) => {
        if (multi.media_type == "tv"){

          results +=
          ` <section>
          <a href="detailSeries.html?id=${multi.id}"> 
          <article class= "polaroid" > 
          <img class = "imagen" src= "https://image.tmdb.org/t/p/w500/${multi.poster_path}"> 
          <div class = "textopolaroid"> 
          <p class= "textopolaroidtitulo"> ${multi.name}</p> 
          <p class = "textopolaroidaño"> ${multi.first_air_date} </p>
          </div>
          </article>
          </a>
          </section>` 
          
          containerResults.innerHTML= results
          
        }
      })
            searchTitle.innerHTML = search
      })

      .catch(function(error){
        console.log('El error fué: ' + error);
    })

      }

      // Filtro: SOLO PERSONAS
      if (mediaType == "person") {

        fetch (url)
        .then (datos=>datos.json() )
        .then (respuesta => {

        console.log (respuesta);
        let results = ''

      respuesta.results.forEach ((multi, index) => {
        if (multi.media_type == "person"){

          results +=`<section>
          <a class="apolaroid" href=""> 
          <article class= "polaroid" > 
          <img class = "imagen" src= "https://image.tmdb.org/t/p/w500/${multi.profile_path}"> 
          <div class = "textopolaroid"> 
          <p class= "textopolaroidtitulo"> ${multi.name}</p> 
          <p class = "textopolaroidaño"> ${multi.popularity} </p>
          </div>
          </article>
          </a>
          </section>`
      
          containerResults.innerHTML= results
        }
          
      })
            searchTitle.innerHTML = search
      })
      .catch(function(error){
        console.log('El error fué: ' + error);
    })

      }

      // Filtro: TODOS [MOVIES + SERIES + PERSONAS]
      if (mediaType == "all") {
  fetch (url)
  .then (datos=>datos.json() )
  .then (respuesta => {
  
      console.log (respuesta);
      let results = ''
  
      respuesta.results.forEach ((multi, index) => {
        // Series
        if (multi.media_type == "tv"){
          results += 
          ` <section>
          <a href="detailSeries.html?id=${multi.id}"> 
          <article class= "polaroid" > 
          <img class = "imagen" src= "https://image.tmdb.org/t/p/w500/${multi.poster_path}"> 
          <div class = "textopolaroid"> 
          <p class= "textopolaroidtitulo"> ${multi.name}</p> 
          <p class = "textopolaroidaño"> ${multi.first_air_date} </p>
          </div>
          </article>
          </a>
         </section>` 
         
         containerResults.innerHTML= results
        
        }
  
        // Películas
        else if (multi.media_type == "movie"){
          results +=
          ` <section>
          <a class="apolaroid" href="detailFilms.html?id=${multi.id}"> 
          <article class= "polaroid" > 
          <img class = "imagen" src= "https://image.tmdb.org/t/p/w500/${multi.poster_path}"> 
          <div class = "textopolaroid"> 
                     <p class= "textopolaroidtitulo"> ${multi.title}</p> 
                     <p class = "textopolaroidaño"> ${multi.release_date} </p>
                     </div>
              </article>
              </a>
              </section>` 
  
              containerResults.innerHTML= results
            }
          
          // Personas 
          else if (multi.media_type == "person"){
              
              results += `<section>
          <a class="apolaroid" href=""> 
          <article class= "polaroid" > 
          <img class = "imagen" src= "https://image.tmdb.org/t/p/w500/${multi.profile_path}"> 
          <div class = "textopolaroid"> 
                     <p class= "textopolaroidtitulo"> ${multi.name}</p> 
                     <p class = "textopolaroidaño"> ${multi.popularity} </p>
                     </div>
              </article>
              </a>
              </section>`
              
              containerResults.innerHTML = results
            }
  
            searchTitle.innerHTML = search
          })
        })
         .catch(function(error){
          console.log('El error fué: ' + error);
      })
      }


     

    