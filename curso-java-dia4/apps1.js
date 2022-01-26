const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const resultado = document.getElementById("resultado");
let errorNombre = document.getElementsByClassName("errorNombre");
let errorAsunto = document.getElementsByClassName("errorAsunto");
let errorMensaje = document.getElementsByClassName("errorMensaje")


formulario.addEventListener("submit", (event) => {
   event.preventDefault();
   console.log("me diste click");
   console.log(!nombre.value.trim());

errorNombre[0].innerHTML = ""
errorAsunto[0].innerHTML = ""
errorMensaje[0].innerHTML = ""

const regExpLetras = /^[a-zA-Z]+$/gi;
const regExpEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


if (!nombre.value.trim()){
   console.log("El nombre es requerido");
   (errorNombre[0].innerHTML = "El nombre es requerido");
   
}
if (!asunto.value.trim()){
    console.log("el nombre es requerido");
   (errorAsunto[0].innerHTML = "El asunto es requerido");
    
}
if (!mensaje.value.trim()){
    console.log("el nombre es requerido");
    return (errorMensaje[0].innerHTML = "El mensaje es requerido");
   }else{
      (resultado[0].innerHTML = "El mensaje fue enviado");
   }
   
    
   });
