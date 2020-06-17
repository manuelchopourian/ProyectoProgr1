let queryString = new URLSearchParams(location.search);
    let codigoArtist = queryString.get('id')

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + 'https://api.deezer.com/artist/';

let artistas = url + codigoArtist

fetch(artistas)
    .then(function(response){
        return response.json();
    })
    .then(function(resultado){
        let nombre = resultado.data
        let h2 = document.querySelector("h2")
        h2.innerText = resultado.name
    })