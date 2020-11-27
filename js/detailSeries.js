// JS Detail

let queryString = location.search;

let queryObject = new URLSearchParams (queryString);
console.log (queryObject);

let id = queryObject.get('id');
console.log (id)

let storage = localStorage.getItem ('SerieFavs')

console.log (storage)

if (storage == null) {
  localStorage.setItem ('SerieFavs', '[]')
}

let apiKey = "50a53e8e9d1beeefe2442f1dbc53288d";

let url = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`

let containerDeatil = document.querySelector ('main');

fetch (url)
.then (datos=>datos.json() )
.then (respuesta => {

  
    console.log (respuesta);
    let detail = ''
    
        detail += 
        `<div class="contenido">
                <img class="imagen" src="https://image.tmdb.org/t/p/w500/${respuesta.poster_path}" alt="">
                <div>
                    <h3 class="titulo">${respuesta.name}</h3>
                    <p class="trama"> ${respuesta.overview}</p>
                   
                    <button class="button">★</button>   
       
                    <ul class="informacion"> 
      
                        <li><strong>Date</strong>: ${respuesta.last_air_date} </li>
                        <li><strong>Género</strong>: <a href="detailGeneros.html?id=${respuesta.genres[0].id}"> ${respuesta.genres[0].name} </a></li> 
        
                    </ul>
                </div>
        
        </div>`

      containerDeatil.innerHTML= detail

      // Favoritos
        
      let boton = document.querySelector ('.button')

      boton.addEventListener ('click', function () {
        let storage = localStorage.getItem ('SerieFavs')
        let storageJs = JSON.parse (storage)


        if (!storageJs.includes(id)){
          storageJs.push(id)
          boton.innerHTML = "Sacar de favoritos"
        }

        else {
          storageJs = storageJs.filter (function (serie) {
            return serie != id
          })
          boton.innerHTML="Agregar a favoritos"
        }

        localStorage.setItem ('SerieFavs', JSON.stringify(storageJs))
        
      })


    })
    
    .catch(function(error){
      console.log('El error fué: ' + error);
  })

  