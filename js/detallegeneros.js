let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let Id = queryStringObj.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url =  proxy + 'https://api.deezer.com/genre/' + Id + '/artists'

fetch(url)
.then( function(respuesta){
    return respuesta.json(); 
    })
.then(function(datos){

    let lista = document.querySelector('.lista-gener')
    let genero = datos.data

    for(let i=0; i<10; i++){
        lista.innerHTML += '<li class="cada-artista"><a class="decoracion-artista" href="artista.html?id=' + genero[i].id + '&type=' + genero[i].type + '">' + genero[i].name + '</a></li>'
    }       
})
.catch(function(error){
    console.log(error);   
})

let urlGener = proxy + 'https://api.deezer.com/genre/' + Id ;

fetch(urlGener)
.then( function(respuesta){

    return respuesta.json();
    
    })
.then(function(ladata){
    lafoto = ladata.picture_xl
    eltitulo = ladata.name

    let foto = document.querySelector('.foto-gener')
    let titulo = document.querySelector('.titulo-gener')
    

    foto.innerHTML += '<img  src="'+ lafoto +'" class="portadas">'
    titulo.innerHTML +=  eltitulo       
 } )
            

.catch(function(error){
    console.log(error);
    
})