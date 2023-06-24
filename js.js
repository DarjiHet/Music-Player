console.log("welcome");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songitem'));
document.getElementById('img');
let songs = [
    {songName: "Galliyan Returns", filePath: "songs/1.mp3", coverPath:"covers/1.jpg", songtime:"05:50"},
    {songName: "Mehbooba Main Teri Mehbooba", filePath: "songs/2.mp3", coverPath:"covers/2.jpg", songtime:"03:38"},
    {songName: "Meri Zindagi Hai Tu", filePath: "songs/3.mp3", coverPath:"covers/3.jpg", songtime:"03:39"},
    {songName: "Raatan Lambiyan", filePath: "songs/4.mp3", coverPath:"covers/4.jpg", songtime:"03:50"},
    {songName: "Srivalli", filePath: "songs/5.mp3", coverPath:"covers/5.jpg", songtime:"03:44"},
    {songName: "Haaniya ve", filePath: "songs/6.mp3", coverPath:"covers/6.jpg", songtime:"03:01"},
    {songName: "Manike", filePath: "songs/7.mp3", coverPath:"covers/7.jpg", songtime:"03:00"},
    {songName: "Rasiya", filePath: "songs/8.mp3", coverPath:"covers/8.jpg", songtime:"01:45"},
    {songName: "295", filePath: "songs/9.mp3", coverPath:"covers/9.jpg", songtime:"04:43"},
    {songName: "challa", filePath: "songs/10.mp3", coverPath:"covers/10.jpg", songtime:"05:20"},
]

songItem.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByClassName("songtime")[0].innerText = songs[i].songtime;
})
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');   
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    //console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    //console.log(progress);
    myProgressBar.value = progress;


    let currentMinutes = Math.floor(audioElement.currentTime / 60);
    let currentsecond = Math.floor(audioElement.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(audioElement.duration / 60);
    let durationsecond = Math.floor(audioElement.duration - durationMinutes * 60);

    if(currentsecond < 10){
     currentsecond = "0" + currentsecond;
    }
    if(currentMinutes < 10){ 
     currentMinutes = "0" + currentMinutes;
    }
    if(durationsecond < 10){ 
        durationsecond = "0" + durationsecond;
       }
    if(durationMinutes < 10){ 
     durationMinutes = "0" + durationMinutes;
    }
    currnttime.innerHTML = currentMinutes + ":" + currentsecond;
    totalduretion.innerHTML = durationMinutes + ":" + durationsecond;
});
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})





let currnttime = document.querySelector(".currnttime");
let totalduretion = document.querySelector(".max-duretion");






const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        img.src = songs[songIndex].coverPath;
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    img.src = songs[songIndex].coverPath;
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 9;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    img.src = songs[songIndex].coverPath;
})