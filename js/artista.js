let queryString = new URLSearchParams(location.search);

let codigoArtist = queryString.get('id')
let codigoFans = queryString.get('id')
let codigoFoto = queryString.get('url')

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + 'https://api.deezer.com/artist/';

let artistas = url + codigoArtist
let fans = url + codigoFans
let foto = url + codigoFoto

fetch(artistas)
    .then(function(response){
        return response.json();
    })
    .then(function(resultado){
        let nombre = resultado.data
        let h2 = document.querySelector("h2")
        h2.innerHTML += resultado.name
    })



    fetch(fans)
    .then(function(response){
        return response.json();
    })
    .then(function(resultado){
        let nombre = resultado.data
        let h3 = document.querySelector("h3")
        h3.innerHTML += resultado.nb_fan + " Seguidores"
    })

    
    fetch(foto)
    .then(function(response){
        return response.json();
    })
    .then(function(resultado){
        let nombre = resultado.data
        let fotoArtista = document.querySelector("fotoArtista")
        fotoArtista.innerHTML += resultado.picture_medium
    })
