
 

let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

let trackId = queryStringObj.get('id');
let type = queryStringObj.get('type')
console.log(type);
let proxy = 'https://cors-anywhere.herokuapp.com/';
let url =  proxy + "https://api.deezer.com/" + type + "/" + trackId;


fetch(url)
    .then(function(response){
        return response.json();
    })
    
    .then(function(track){

        if(type=='track'){
            let body= document.querySelector('main1')
            body.style= 'height: 700px'
            let photo = document.querySelector('.photo1b');
                photo.src = track.artist.picture_big;
            
                let title = document.querySelector('.detalle-title');
                title.innerHTML += track.title;

                let artist = document.querySelector('.detalle-artist');
                artist.innerHTML += 'Artist: ' + track.artist.name;
                artist.href = 'detalle.html?id=' + track.artist.id + '&type=' + track.artist.type;

                let album = document.querySelector('.detalle-album');
                album.innerHTML += 'Album: ' + track.album.title;
                album.href = 'detalle.html?id=' + track.album.id + '&type=' + track.album.type;
                let player = document.querySelector('iframe');
                player.src = 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=3000&height=350&color=00e8dc&layout=dark&size=medium&type=tracks&id=' + trackId + '&app_id=1'




      }


                  /* Agregar a la playlist */


                  let recuperoStorage = localStorage.getItem('playlist')

                  if (recuperoStorage ==null) {
                  playlist = [];
     
                   }else{
 
                    playlist = JSON.parse(recuperoStorage)
 
                   }
 
                  let agregar = document.querySelector('.boton3')
 
                  if (playlist.includes(trackId)){
                       agregar.innerHTML = 'Quitar de la playlist'
                  }
 
                 agregar.addEventListener('click', function(pre){
 
                 pre.preventDefault();
 
              if(playlist.includes(trackId)){
 
                 let indiceEnELArray = playlist.indexOf(trackId);
 
                  playlist.splice(indiceEnELArray , 1);
 
               let agregar = document.querySelector('.boton3')
 
                  agregar.innerHTML = 'Agregar a playlist'
             }else{
                 let agregar = document.querySelector('.boton3')
     
                  agregar.innerHTML = 'Quitar de playlist'
                  playlist.push(trackId);
                 }
     
              let playlistparastorage = JSON.stringify(playlist)
 
             localStorage.setItem('playlist' , playlistparastorage)
 
             console.log(localStorage);
    
    })


}) 