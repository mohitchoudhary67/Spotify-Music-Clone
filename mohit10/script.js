console.log("welcome to my world");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("1.mp3.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName:"Chhaap Tilak sbjhi..", filePath:"1.mp3.mp3", coverPath:"cover1.jpg.jpg"},
    {songName:"Mast Nazaro Se Allah B...", filePath:"2.mp3.mp3", coverPath:"cover2.jpg.jpg"},
    {songName:"Meera-Ke-Prabhu-Giridhar-G..", filePath:"3.mp3.mp3", coverPath:"cover3.jpg.jpg"},
    {songName:"Mast Nazaro Se Allah B...", filePath:"4.mp3.mp3", coverPath:"cover4.jpg.jpg"},
    {songName:"Chhaap Tilak sbjhi nirmo.", filePath:"5.mp3.mp3", coverPath:"cover5.jpg.jpg"},
    {songName:"Tera Fitoor Jab Se Chad gya.", filePath:"6.mp3.mp3", coverPath:"cover6.jpg.jpg"},
]

songItems.forEach((element,i) => {
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    masterSongName.innerText = songs[songIndex].songName;
    gif.style.opacity = 1;
}
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    masterSongName.innerText = songs[songIndex].songName;
    gif.style.opacity = 0;
}


})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    // Upadate Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    audioElement.play();
    gif.style.opacity = 1;
  

    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(element)=>{
     console.log(element.target);
     makeAllPlays();
     songIndex = parseInt(element.target.id);
     element.target.classList.remove('fa-circle-play');
     element.target.classList.add('fa-circle-pause');
     audioElement.src = `${songIndex}.mp3.mp3`;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
    })
  
})




document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex = 0;
    }
    else{
        
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;

})

document.getElementById('preiveius').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;

})