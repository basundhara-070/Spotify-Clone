// const home=document.getElementById("Home");
// const homep=document.getElementsByTagNameNS
// home.addEventListener("mouseover",()=>{
// })
let fwd=document.getElementById("fwd");
let bwd=document.getElementById("bwd");
let currentSong= document.getElementById("currentsong");
let gif=document.querySelector(".gif");
let songItems= Array.from(document.getElementsByClassName("songitem"));
let progressBar= document.getElementById("progressBar");
let audioElement= new Audio("song1.mp3");
let masterplay= document.getElementById("masterplay");
masterplay.addEventListener("click",()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        gif.style.visibility= "visible";
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        gif.style.visibility= "hidden";
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add("fa-play");
    }
})
audioElement.addEventListener("timeupdate",()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    progressBar.value=progress;
})
progressBar.addEventListener("change",()=>{
    audioElement.currentTime= progressBar.value * audioElement.duration/100;
})

let songs=[
   {songName:"Gorgeous | Taylor Swift" ,filePath:"songs/song1.mp3"},
   {songName:"New Rules | Dua Lipa" ,filePath:"songs/song2.mp3"},
   {songName:"Senorita | Camila Cabello,Shawn Mendes" ,filePath:"songs/song3.mp3"},
   {songName:"Shape of you | Ed Sheeran" ,filePath:"songs/song4.mp3"},
   {songName:"Back to you | Selena Gomez" ,filePath:"songs/song5.mp3"},
   {songName:"Love Yourself | Justin Bieber" ,filePath:"songs/song6.mp3"},
   {songName:"Attention | Charlie Puth" ,filePath:"songs/song7.mp3"},
   {songName:"7 Rings | Ariana Grande" ,filePath:"songs/song8.mp3"},
   {songName:"Driver's License | Olivia Rodrigo" ,filePath:"songs/song9.mp3"},
   {songName:"Speechless | Naomi Scott" ,filePath:"songs/song10.mp3"},
]
let index;
songItems.forEach((element)=>{
        element.addEventListener("click", (e)=>{
        audioElement.currentTime=0;
        index= parseInt(e.target.id);
        audioElement.pause();
        audioElement.src= `song${index}.mp3`;
        audioElement.play();
        gif.style.visibility= "visible";
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
        currentSong.innerHTML=songs[`${index-1}`].songName;  
        handleIndex_fwd(index);
        handleIndex_bwd(index);
    })
}) 
function handleIndex_fwd(index) {
    console.log("the value of index is "+index);
        fwd.addEventListener("click",()=>{
            console.log("Forward is clicked");
            if(index===10)
            {
               
               audioElement.pause();
               audioElement.currentTime=0;
               audioElement.src= `songs/song1.mp3`;
               audioElement.load();
               audioElement.play();
               gif.style.visibility= "visible";
               masterplay.classList.remove("fa-play");
               masterplay.classList.add("fa-pause");
               currentSong.innerHTML=songs[`${index-1}`].songName;  
               index=0;
            }
            else
            {
                
                audioElement.pause();
                audioElement.currentTime=0;
               audioElement.src= `song${index+1}.mp3`;
               audioElement.load();
               audioElement.play();
                gif.style.visibility= "visible";
                masterplay.classList.remove("fa-play");
                masterplay.classList.add("fa-pause");
               currentSong.innerHTML=songs[`${index}`].songName;  
               index=index+1;
            }
           
        })
}
function handleIndex_bwd(index) {
    console.log("the value of index is "+index);
        bwd.addEventListener("click",()=>{
            console.log("Forward is clicked");
            if(index===1)
            {
               
               audioElement.pause();
               audioElement.currentTime=0;
               audioElement.src= `song10.mp3`;
               audioElement.load();
               audioElement.play();
               gif.style.visibility= "visible";
               masterplay.classList.remove("fa-play");
               masterplay.classList.add("fa-pause");
               currentSong.innerHTML=songs[9].songName;  
               index=9;
            }
            else
            {
                
                audioElement.pause();
                audioElement.currentTime=0;
                audioElement.src= `song${index-1}.mp3`;
                audioElement.load();
                audioElement.play();
                gif.style.visibility= "visible";
                masterplay.classList.remove("fa-play");
                masterplay.classList.add("fa-pause");
               currentSong.innerHTML=songs[`${index-2}`].songName;  
               index=index-1;
            }
    
        })
}



