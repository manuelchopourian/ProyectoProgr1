let queryString = new URLSearchParams(location.search);
let codigo = queryString.get('id')

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + 'https://api.deezer.com/track/' + codigo;

fetch(url)
    .then(function(response){
        return response.json();
    })
.then(function(datos){
        let foto = document.querySelector(".foto");
        foto.innerHTML = '<img src ="' + datos.album.cover + '">';

        let nombre = document.querySelector(".h1");
        nombre.innerHTML = datos.title;

        let detalleArtist = document.querySelector(".detalle-artist");
        detalleArtist.innerHTML += "Artista:" + '<a class="hipervinculo" href= "artista.html?id=' + datos.artist.id + '">' + datos.artist.name + '</a>';

        let detalleAlbum = document.querySelector('.detalle-album')
        detalleAlbum.innerHTML += "Album:" + '<a class="hipervinculo" href= "album.html?id=' + datos.album.id + '">' + datos.album.title + '</a>'; 

        let duracion = document.querySelector('.duracion')
        duracion.innerHTML += 'Duracion:' + datos.duration
    })
.catch(function(error){
        console.log(error); 
    })