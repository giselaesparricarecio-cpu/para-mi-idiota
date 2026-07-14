const boton=document.getElementById("music");
const audio=document.getElementById("song");

boton.onclick=()=>{

if(audio.paused){
audio.play();
boton.innerHTML="🖤 Nuestra canción";
}else{
audio.pause();
boton.innerHTML="▶ Nuestra canción";
}

}
