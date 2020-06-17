let tracks = document.querySelector('.tracks-search-results');
let artist = document.querySelector('.artist-search-results');
let album = document.querySelector('.album-search-results');

var queryString = location.search;
var queryStringObj = new URLSearchParams(queryString);

let busqueda = queryStringObj.get('search');
console.log(busqueda);

let proxy = "https://cors-anywhere.herokuapp.com/";
let urlTrack = proxy + 'https://api.deezer.com/search/track?q=' + busqueda;
let urlArtist = proxy + 'https://api.deezer.com/search/artist?q=' + busqueda;
let urlAlbum = proxy + 'https://api.deezer.com/search/album?q=' + busqueda;

let spinner = document.querySelector('.spinner');
let content = document.querySelector('.search')
let respuesta = document.querySelector('h4')

window.onload = function() {
    spinner.style.display = 'none';
    content.style.display = 'grid'

 }

fetch(urlTrack)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        let resultados = datos.data;
       
        resultados.forEach(function(resultado){
            tracks.innerHTML += '<li class="info">' + '<img src="' + resultado.album.cover +'" class="portadas">' +'<a href="detail.html?id=' +  resultado.id + '">' + resultado.title_short + '</a></li>';
        });
        console.log(resultados)   
        })

    .catch(function(error){
        console.log(error);
    })
    fetch(urlArtist)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        let resultados = datos.data;
       
        resultados.forEach(function(resultado){
            artist.innerHTML +='<li class="info">' + '<img src="' + resultado.picture +'" class="portadas">' +'<a href="detail.html?id=' +  resultado.id + '">' + resultado.name + '</a></li>'; 
        });
        console.log(resultados)   
        })

    .catch(function(error){
        console.log(error);
    })
    fetch(urlAlbum)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        let resultados = datos.data;
       
        resultados.forEach(function(resultado){
            album.innerHTML +='<li class="info">' + '<img src="' + resultado.cover +'" class="portadas">' +'<a href="detail.html?id=' +  resultado.id + '">' + resultado.title + '</a></li>'; 
        });
        console.log(resultados)   
        })

    .catch(function(error){
        console.log(error);
    })
   