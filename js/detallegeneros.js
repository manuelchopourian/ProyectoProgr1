let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

console.log(queryString);


let Id = queryStringObj.get('id');

console.log(Id);

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
        lista.innerHTML += '<li class="cada-artista"><a class="decoracion-artista" href="detail.html?id=' + genero[i].id + '&type=' + genero[i].type + '">' + genero[i].name + '</a></li>'
    }
    console.log(genero.id);
    console.log(datos);
    
    
    
            
})
.catch(function(error){

    console.log(error);
    
})



let urlgener = proxy + 'https://api.deezer.com/genre/' + Id ;

fetch(urlgener)
.then( function(respuesta){

    return respuesta.json();
    
    })
.then(function(ladata){

    

    lafoto = ladata.picture_medium
    
    
    eltitulo = ladata.name



    let foto = document.querySelector('.foto-gener')
    let titulo = document.querySelector('.titulo-gener')
    

    foto.innerHTML += '<img  src="'+ lafoto +'" >'

    titulo.innerHTML +=  eltitulo 
   
    

    


       
 } )
            

.catch(function(error){

    console.log(error);
    
})