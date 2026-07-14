const boton=document.getElementById("open");
const carta=document.getElementById("letter");

boton.onclick=()=>{

carta.style.display="block";

boton.style.display="none";

window.scrollTo({
top:document.body.scrollHeight,
behavior:"smooth"
});

}
