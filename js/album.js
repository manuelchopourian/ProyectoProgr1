window.addEventListener("load", function (){

    let queryString = new URLSearchParams(location.search)
    let codigoAlbum = queryString.get("idAlbums");

    if(codigoAlbum){
        
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + codigoAlbum)
        .then(
            function (respuesta) {
                return respuesta.json();
            }
        )
        .then(
            function(resultado){
            console.log(resultado);
            
            document.querySelector(".nombre").innerHTML = resultado.title;
            document.querySelector(".tini").src = resultado.cover_medium;
            
            let nombreArtista = resultado.artist.name;
            let idArtista = resultado.artist.id;

            let todoArtist = `<h5 class="cantante"><a class="linkeando" href="artists.html?idArtist=`+ idArtista + `">`+ nombreArtista + `</a> </li>`
            
            document.querySelector(".spinnertracks").style.display = "none"
            document.querySelector(".cantante").innerHTML = todoArtist;
            
            
            let escuchar = `https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=album&id=` + codigoAlbum + `&app_id=1`
            

            document.querySelector(".tini").src = escuchar
            


            let tiempo = resultado.duration;
            let lanzamiento = resultado.release_date
            let infoAlbum =  `<article class="txchico"> Duración: </article>
            <article class="txchico">Fecha de estreno: </article>
            <article class="separar">` + tiempo + ` segundos</article>
            <article class="fecha">` + lanzamiento + `</article>`
            


            document.querySelector(".infoalbum").innerHTML = infoAlbum;


            let otrasCanciones = resultado.tracks.data
            console.log(otrasCanciones);
            
            for (let index = 0; index < otrasCanciones.length; index++) {
                const masSongs = otrasCanciones[index];



                console.log(masSongs);

                let nombreCancion = masSongs.title;
                let idCancion = masSongs.id
                let albumCanciones = `<li class="cancion"> <a href="tracks.html?idTrack=` + idCancion + `" class="cancionAlbum">`  + nombreCancion + ` </a> </li>`

                

                document.querySelector(".listacanciones").innerHTML += albumCanciones;



            }

        })
    }
else{
    alert("Este álbum no existe")
}
    })
