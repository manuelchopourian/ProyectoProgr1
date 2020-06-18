let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let trackId = queryStringObj.get('id');
let type = queryStringObj.get('search')
console.log(type);
let proxy = 'https://cors-anywhere.herokuapp.com/';
let url =  proxy + "https://api.deezer.com/" + type + "/" + trackId;


fetch(url)
    .then(function(response){
        return response.json();
    })
    
    .then(function(track){

        if(type=='track'){
            let body = document.querySelector('section')
            body.style = 'height: 700px'
            let photo = document.querySelector('.foto');

                photo.innerHTML = track.album.cover;
            
                let title = document.querySelector('.detalle-title');
                title.innerHTML = track.title;

                let artist = document.querySelector('.detalle-artist');
                artist.innerHTML += 'Artist: ' + '<a href="artista.html?id=' + track.artist.id + '&type=' + track.artist.type + '">' + track.artist.name + '</a>';
                artist.href = 'detail.html?id=' + track.artist.id + '&type=' + track.artist.type;

                let album = document.querySelector('.detalle-album');
                album.innerHTML += 'Album: ' + track.album.title;
                album.href = 'detail.html?id=' + track.album.id + '&type=' + track.album.type;
                let player = document.querySelector('iframe');
                player.src = 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=3000&height=350&color=00e8dc&layout=dark&size=medium&type=tracks&id=' + trackId + '&app_id=1'
      }

                 

}) 



