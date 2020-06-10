window.onload= function(){
    // titulo playlist
     let  userTitle = document.querySelector(".playlistTitle")
    let username= localStorage.getItem("username")
    if (username != "" && username !=null) {
        userTitle.innerHTML += username+"'s Playlist"
        userTitle.style.textTransform = 'capitalize'
    } else {
        userTitle.innerHTML += "My Playlist"
    }
