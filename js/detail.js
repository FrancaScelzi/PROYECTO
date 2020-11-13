// JS Detail

let queryString = location.search;

let queryObject = new URLSearchParams (queryString);
console.log (queryObject);

let id = queryObject.get('id');
console.log (id)

let apiKey = "50a53e8e9d1beeefe2442f1dbc53288d";

let url = "https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}"

let containerDeatil = document.querySelector ('main');

fetch ('https://api.themoviedb.org/3/movie/popular?api_key=50a53e8e9d1beeefe2442f1dbc53288d')
.then (datos=>datos.json() )
.then (respuesta => {
    console.log (respuesta);
    let detail = ''

    respuesta.results.forEach ((pelicula, index) => {
    
        detail += 
        `<div class="contenido">
        <img class="imagen" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="">
      <div>
          <h3 class="titulo">${pelicula.title}</h3>
          <p class="trama"> ${pelicula.overview}</p>
          <ul class="informacion"> 
        
        
            <li><strong>Año</strong>: </li>
            <li><strong>Director</strong>:  </li>
            <li><strong>Género</strong>: </li>
            <li><strong>Reparto</strong>:  </li>
          </ul>
        </div>
      
      </div>`

    })

      containerDeatil.innerHTML= detail
        
    })