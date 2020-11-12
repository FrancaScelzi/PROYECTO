let url = ''

fetch (url)
.then (datos=>datos.json ()
.then (respuesta => {
    console.log (respuesta);
    let movies = ''

    respuesta.results.forEach (pelicula => {
        movies += ''
    })
}))

.catch (error=> console.log (error))