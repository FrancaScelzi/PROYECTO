let queryString = location.search;

let queryObject = new URLSearchParams (queryString);
console.log (queryObject);

let id = queryObject.get('id');
console.log (id)

let apiKey = "50a53e8e9d1beeefe2442f1dbc53288d"; 

let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`

let containerGenres = document.querySelector ('.container');

fetch (`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
.then (datos=>datos.json() )
.then (respuesta => {
    console.log (respuesta);
    let detail = ''
    
        detail += 
      
      
      

      containerGenres.innerHTML= detail
        
    })