// Obtener datos de 1 track
let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idTrack = datos.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + "https://api.deezer.com/track/" + idTrack

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);

        //Resolvemos qué hacemos con los datos
        let titulo = document.querySelector('.titulo');
        titulo.innerHTML += datos.title;
        
        let interprete = document.querySelector('.interprete');
        interprete.innerHTML += datos.artist.name
        
        let album = document.querySelector('.album');
        album.innerHTML += datos.album.title

        //Aquí agregamos el player.
        let player = document.querySelector('iframe');
        player.src = 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=' + idTrack + '&app_id=1'

        
    })
    .catch(function (error) {
        console.log(error);

    })    


//Pasos para agregar temas a una playlist
//Paso 1: recuperar datos del storage

let recuperoStorage = localStorage.getItem('playlist');

//Si todavía no tengo tracks en mi playlist
if(recuperoStorage == null){
    //Creo una lista vacía
    playlist = [];
} else {
    //Recupero el array de localStorage
    playlist = JSON.parse(recuperoStorage);
}

//Me fijo que no esté en la lista y cambio el texto del botón
if(playlist.includes(idTrack)){
    document.querySelector('.agregar').innerHTML = "Quitar de la playlist";
}

//Paso 2: agregar un track a la playlist.
let agregar = document.querySelector('.agregar');

agregar.addEventListener('click', function(e){
    //Detener el comportamiento default de <a></a>
    e.preventDefault();

    if(playlist.includes(idTrack)){
        //Si el track está tenemos que quitarlo.
        let indiceEnElArray = playlist.indexOf(idTrack);
        playlist.splice(indiceEnElArray, 1);
        document.querySelector('.agregar').innerHTML = "Agregar a playlist";
        console.log(playlist);
        
    } else { 
        //Agrego el id del track a la lista
        playlist.push(idTrack);
        document.querySelector('.agregar').innerHTML = "Quitar de la playlist"
    }
    //


    //Paso 3 guardar lista en localStorage
    let playlistParaStorage = JSON.stringify(playlist);
    localStorage.setItem('playlist', playlistParaStorage);
    console.log(localStorage);


})
    
