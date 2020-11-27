// JS Detail
let queryString = location.search;

let queryObject = new URLSearchParams(queryString);
console.log(queryObject);

let id = queryObject.get('id');
console.log(id)

let storage = localStorage.getItem ('MovieFavs')

console.log (storage)

if (storage == null) {
  localStorage.setItem ('MovieFavs', '[]')
}

let apiKey = "50a53e8e9d1beeefe2442f1dbc53288d";

let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`

let containerDeatil = document.querySelector('main');

fetch(url)
  .then(datos => datos.json())
  .then(respuesta => {

    console.log(respuesta);
    let detail = ''

    detail +=
      `<div class="contenido">
                <img class="imagen" src="https://image.tmdb.org/t/p/w500/${respuesta.poster_path}" alt="">
            <div>
                <h3 class="titulo">${respuesta.title}</h3>
                <p class="trama"> ${respuesta.overview}</p>
                <button class="button">★</button>
                <ul class="informacion"> 
                    <li><strong>Promedio de votos</strong>: ${respuesta.vote_average} </li>
                    <li><strong>Género</strong>:<a href="detailGeneros.html?id=${respuesta.genres[0]?.id}"> ${respuesta.genres[0]?.name} </a></li>
                    <li class="reviews"><strong>Reviews</strong>: </li>
                 </ul>
            </div> 
        </div>`

    containerDeatil.innerHTML = detail

     //Favoritos
    let boton = document.querySelector ('.button')

    boton.addEventListener ('click', function () {
      let storage = localStorage.getItem('MovieFavs')
      let storageJs = JSON.parse(storage)

       if(!storageJs.includes(id)) {
       storageJs.push(id)
        boton.innerHTML = "Sacar de favoritos"
       }
       
       else{
         storageJs = storageJs.filter(function (movie){
           return movie != id ;
           
          })
         boton.innerHTML="Agregar a favoritos"
       }

       localStorage.setItem ('MovieFavs', JSON.stringify(storageJs))  
    }) 

    
    // Reviews

    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}`)
      .then(datos => datos.json())
      .then(respuesta => {
        console.log(respuesta)


        let containerReviews = document.querySelector ('.reviews')

        
        if (respuesta.results.length > 0){

          let content = respuesta.results[0].content;
          let maxLenght = 384
          
                if (content.length > 384 ) {
                  let reviewPart = content.slice(0,maxLenght);
                  content = reviewPart + '...' 
                  containerReviews.innerHTML += `${content}`
                } else {
                  containerReviews.innerHTML += `${content}`
                }

          } else {
            containerReviews.innerHTML += "La película no tiene reviews"
          }

      

      })

  })

  .catch(function(error){
    console.log('El error fué: ' + error);
})