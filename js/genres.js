let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + 'https://api.deezer.com/genre';

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        let generos = document.querySelector('.generos');
        let resultados = datos.data;
        console.log(resultados)
        resultados.forEach(function(genre){
            generos.innerHTML += '<li class="info">' + '<a href="detallegenero.html?id=' +  genre.id + '">' +  '<img src="' + genre.picture_big +'" class="portadas">' + '</a>'  +'<a href="detail.html?id=' +  genre.id + '" class="nombre">' + genre.name + '</a></li>'
        })
    })
    .catch(function(error){
        console.log(error)
    })
