
let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + 'https://api.deezer.com/genre';
            

let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);

let playlistwrapper = document.querySelector('.listadereproduccion')
let body = document.querySelector('.playlist-container')

if(recuperoStorage == null || recuperoStorage == '[]'){

    playlist =[]
    playlistwrapper.innerHTML += '<h1> Actualmente no hay canciones en tu playlist </h1>'
    body.style.height = '600px'
    }
    
    else{
           
    playlist.forEach(function(trackId){
        buscarYMostrar(trackId)
        }) 
    }


    function buscarYMostrar(trackId){

        var proxy = 'https://cors-anywhere.herokuapp.com/'
        var url = proxy + 'https://api.deezer.com/track/' + trackId;
    
        fetch(url)
         .then( function(response){
             return response.json();
        
        })
        .then(function(track){
    
            playlistwrapper.innerHTML += '<div class ="player-playlist"><iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=80%&height=61&color=007FEB&layout=&size=medium&type=tracks&id=' + track.id + '&app_id=1" width="80%" height="61"></iframe></div>'

            console.log(trackId);

           })
           
    
    .catch(function(error){
        console.log(error);
        
    })
    
     }
    
     console.log(localStorage)

     var boton = document.querySelector('.boton')


boton.onclick = function(){

    let confirmar = confirm('¿Estas Seguro? Todas las canciones seran eliminadas de tu playlist')
    if(confirmar == true){
        localStorage.removeItem('playlist')


    }


}


console.log(localStorage);