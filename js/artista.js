let queryString = new URLSearchParams(location.search);

let codigo = queryString.get('id')
let codigoFoto = queryString.get('id')

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + 'https://api.deezer.com/artist/';

let id = url + codigo

fetch(id)
    .then(function(response){
        return response.json();
    })
    .then(function(resultado){
        let nombre = resultado.data
        let h2 = document.querySelector("h2")
        let h3 = document.querySelector("h3")
        let div = document.querySelector(".foto-artista")

        h2.innerHTML += resultado.name
        h3.innerHTML += resultado.nb_fan + " Seguidores"  
       div.innerHTML = '<img src="' + resultado.picture_big + '">' 
    })
    .catch(function(error){
        console.log(error)
    });