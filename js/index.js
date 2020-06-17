let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + 'https://api.deezer.com/chart/0/';

let canciones = url + 'tracks'
let artistas = url + 'artists'
let albumes = url + 'albums'

fetch(canciones)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        let tracks = document.querySelector('.content-tracks');
        let resultados = datos.data;
        console.log(resultados)
        resultados.forEach(function(track){
            tracks.innerHTML += '<li class="info">' + '<img src="' + track.album.cover +'" class="portadas">' +'<a href="detail.html?id=' +  track.id + '">' + track.title + '</a></li>'
        })
    })
    .catch(function(error){
        console.log(error)
    })

    fetch(artistas)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        let artists = document.querySelector('.content-artist');
        let resultados = datos.data;
        console.log(resultados)
        resultados.forEach(function(artist){
            artists.innerHTML += '<li class="info">' + '<img src="' + artist.picture +'" class="portadas">' +'<a href="artista.html?id=' +  artist.id + '">' + artist.name + '</a></li>'
        })
    })
    .catch(function(error){
        console.log(error)
    })

    fetch(albumes)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        let albums = document.querySelector('.content-album');
        let resultados = datos.data;
        console.log(resultados)
        resultados.forEach(function(album){
            albums.innerHTML += '<li class="info">' + '<img src="' + album.cover +'" class="portadas">' +'<a href="album.html?id=' +  album.id + '">' + album.title + '</a></li>'
        })
    })
    .catch(function(error){
        console.log(error)
    })