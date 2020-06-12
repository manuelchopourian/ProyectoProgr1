let results = document.querySelector('.search-results')

var queryString = location.search;
var queryStringObj = new URLSearchParams(queryString);

let busqueda = queryStringObj.get('search');
console.log(busqueda)

let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + 'https://api.deezer.com/search?q=' + busqueda;

console.log(url)

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        let resultados = datos.data;
       
        resultados.forEach(function(resultado){
            results.innerHTML += '<li class="info">' + '<img src="' + resultado.album.cover +'" class="portadas">' +'<a href="detail.html?id=' +  resultado.album.id + '">' + resultado.album.title + '</a></li>' 
        });
        console.log(resultados)   
        })

    .catch(function(error){
        console.log(error);
    })