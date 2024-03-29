// console.log(" Hello "); 
let i=1;
let audioElment = new Audio("songs/" +i + ".mp3");
let masterPlay = document.getElementById('masterPlay');
let forwardPlay = document.getElementById('forwardPlay');
let backwardPlay = document.getElementById('backwardPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif=document.getElementById("gif");

let songs= [
    {songName:"not decided1", filePath:"songs/1.pm3", coverPath:"covers/1.jpg"},
    {songName:"not decided2", filePath:"songs/2.pm3", coverPath:"covers/2.jpg"},
    {songName:"not decided3", filePath:"songs/3.pm3", coverPath:"covers/3.jpg"},
    {songName:"not decided4", filePath:"songs/4.pm3", coverPath:"covers/4.jpg"},
    {songName:"not decided5", filePath:"songs/5.pm3", coverPath:"covers/5.jpg"},
    {songName:"not decided6", filePath:"songs/6.pm3", coverPath:"covers/6.jpg"},
    {songName:"not decided7", filePath:"songs/7.pm3", coverPath:"covers/7.jpg"},
    {songName:"not decided", filePath:"songs/8.pm3", coverPath:"covers/8.jpg"},
]

masterPlay.addEventListener('click',()=>{
    if(audioElment.paused || audioElment.currentTime<=0){
        audioElment.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity=1;
    }
    else{
        audioElment.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
    
});

forwardPlay.addEventListener('click', ()=>{
    audioElment.pause();
    myProgressBar.value = 0;
    i++;
    audioElment = new Audio("songs/" + i + ".mp3");
    audioElment.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity=1; 
});
 
backwardPlay.addEventListener('click', ()=>{
    audioElment.pause();
    // myProgressBar.value=0;
    i--;
    audioElment = new Audio("songs/" + i + ".mp3");
    console.log(i);
    audioElment.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle") ;
    gif.style.opacity=1;
});

audioElment.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress=parseInt((audioElment.currentTime/audioElment.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElment.currentTime=myProgressBar.value * audioElment.duration/100;

});