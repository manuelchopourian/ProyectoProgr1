window.addEventListener("load", function(){
    let queryString = new URLSearchParams(location.search)
    let codigoArtist = queryString.get("idArtist");
if(codigoArtist) {


    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + codigoArtist)
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    
    .then(
        function(resultado) {
        console.log(resultado)
        document.querySelector(".spinnertracks").style.display = "none"
           document.querySelector(".portadaartist").src = resultado.picture_xl;
           document.querySelector(".titulando").innerHTML = resultado.name;
           document.querySelector(".seguidores").innerHTML = resultado.nb_fan;
           document.querySelector(".separar").innerHTML = resultado.nb_album;

           let repro = `https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=false&width=600&height=350&color=007FEB&layout=dark&size=medium&type=radio&id=artist-` + codigoArtist +`&app_id=1`

           document.querySelector(".aescuchar").src = repro
           
           fetch("https://cors-anywhere.herokuapp.com/" + resultado.tracklist)
                        .then(
                            function (respuesta) {
                                return respuesta.json();
                            }
                        )
                        .then(
                            function (tracklist) {
                                console.log(tracklist)

                                let listaSongs = tracklist.data
                                for (let index = 0; index < listaSongs.length; index++) {
                                    const cadaSong = tracklist.data[index];

                                    let trackId = cadaSong.id;
                                    let trackNombre = cadaSong.title

                                    console.log(cadaSong);

                                    let otrasSongs = `<li class="cancion"> <a href="tracks.html?idTrack=`+ trackId +`">`  + trackNombre + `</a> </li> `

                                    document.querySelector(".listacanciones").innerHTML += otrasSongs;

        



                                } //cierro for
                            }) //cierro then tracklist
        }) //cierro then artist
} // cierro if
else{
    alert("No se recibió ID de artist")
} //cierro else


  


                    



}) // cierro el onload