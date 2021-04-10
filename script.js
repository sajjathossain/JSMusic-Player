const musicContainer = document.querySelector(".music-container")
const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")
const audio = document.querySelector("#audio")
const audioSource = document.querySelector("audio")
const title = document.querySelector("#title")
const pageTitle = document.querySelector("#pageTitle")

// song list
const songs = ['01. shrek', '02. Short Song', '03. uplifting', '04. aaa2 bgm']

let songIndex = 0
let isPlaying = false

loadSong(songs[songIndex])

function loadSong(song){
  title.innerText = song
  audioSource.src = `./music/${song}.mp3`
  pageTitle.innerHTML = `${songs[songIndex]}`
}

function loadPrevSong(){

  songIndex--
  
  if(songIndex < 0){
    songIndex = songs.length - 1
  }

  loadSong(songs[songIndex])
}

function loadNextSong(){
  
  songIndex++
  
  if(songIndex >= songs.length ){
    songIndex = 0
  }

  loadSong(songs[songIndex])
}

function playAudio(){
  isPlaying = true
  audio.play()
  pageTitle.innerHTML = 'Playing'
}

function pauseAudio(){
  isPlaying = false
  audio.pause()
  pageTitle.innerHTML = 'Paused'
}

function playPauseAudio(e){

  if(e.keyCode === 32 && isPlaying === false){
    isPlaying = true
    audio.play()
    pageTitle.innerHTML = 'Playing'
  }

  if(e.keyCode === 32 && isPlaying === true){
    isPlaying = false
    audio.pause()
    pageTitle.innerHTML = 'Paused'
  }

}

prevBtn.addEventListener("click", loadPrevSong)
nextBtn.addEventListener("click", loadNextSong)
document.addEventListener("keyup", playPauseAudio)
