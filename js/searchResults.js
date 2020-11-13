// JS Search Results

let queryString = location.search;

let queryObject = new URLSearchParams (queryString);
console.log (queryObject);

let id = queryObject.get('id');
console.log (id)

let apiKey = "50a53e8e9d1beeefe2442f1dbc53288d";

let url = "https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}"

let containerResults = document.querySelector ('main');

fetch ('https://api.themoviedb.org/3/movie/popular?api_key=50a53e8e9d1beeefe2442f1dbc53288d')
.then (datos=>datos.json() )
.then (respuesta => {
    console.log (respuesta);
    let results = ''

    respuesta.results.forEach ((pelicula, index) => {
    
        results += 
        ``

    })

      containerResults.innerHTML= results
        
    })