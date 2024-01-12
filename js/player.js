// HELPER FUNCTION TO GET DOM ELEMENTS
const $ = (id) => document.getElementById(id)

class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }

    listAlbums = function() {
        for (let i = 0; i < jbox.albums.length; i++) {    
            console.log(`Album #${i+1}: ${this.albums[i].title} by ${this.albums[i].artist} was played ${this.albums[i].played} times`)
        }
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist}: ${this.title}. The album has been played ${this.played} times.`
    }
}

// Create & populate an array of available Albums (including Artist & Title)
let availableAlbums = [
    { 'artist': 'Billy Joel', 'title': 'Piano Man'},
    { 'artist': 'Beatles', 'title': 'White Album'},
    { 'artist': 'Lynyrd Skynyrd', 'title': 'Pronounced'},
    { 'artist': 'Bad Company', 'title': 'Bad Company'}
]

// Populate the 'selection' drop-down menu options with Album information from the 'availableAlbums' array
document.addEventListener("DOMContentLoaded", function(event) {
    let select = $('selection')

    for(let i = 0; i < availableAlbums.length; i++) {
        let txtStr = `${availableAlbums[i].title} by ${availableAlbums[i].artist}`
        let option = document.createElement("option")
        let txt = document.createTextNode(txtStr)

        option.appendChild(txt)
        option.setAttribute("value",i)
        select.insertBefore(option,select.lastChild);
    }
})

// Play Button's event handler
$('btnPlay').addEventListener('click', (e) => {
    // Used for debugging...
    //alert(`Play button clicked.`)
    //console.log(`Value of the selected album played: ${$('selection').value}`)

    jbox.albums[$('selection').value].play()
})

// Favorite Album Button's event handler
$('btnFavorite').addEventListener('click', (e) => {
    // Used for debugging...
    //alert('Favorite button clicked')
    
    // List each Album in the console, along with its number of Plays (just for additional information)
    jbox.listAlbums()

    $('favoriteAlbum').innerHTML = `Your favorite album is ${jbox.favoriteAlbum()}`
})

// Create a Jukebox Object
const jbox = new Jukebox()

// Programatically add Albums (from the 'availableAlbums' array) to the Jukebox
for (let a in availableAlbums) {
    // Used for debugging...
    //console.log(`addAlbum: ${availableAlbums[a].artist} by ${availableAlbums[a].title}`)

    jbox.addAlbum(new Album(availableAlbums[a].artist, availableAlbums[a].title))
}

