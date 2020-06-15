
let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);

let playlistwrapper = document.querySelector('.lista-de-reproduccion')

if(recuperoStorage == null || recuperoStorage == '[]'){

    playlist =[]
    playlistwrapper.innerHTML += '<h1> Actualmente no hay canciones en tu playlist </h1>'
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
    
            playlistwrapper.innerHTML += '<div class ="player-playlist"><iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=3000&height=350&color=00e8dc&layout=dark&size=medium&type=tracks&id=' + track.id + '&app_id=1" width="600" height="92"></iframe></div>'

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
        localStorage.clear('playlist')


    }


}
