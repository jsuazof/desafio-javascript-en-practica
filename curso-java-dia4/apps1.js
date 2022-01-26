const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
let resultado = document.getElementsByClassName("resultado");
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

const regExpLetras = /[a-zA-Z]\w+/gi;

if (!nombre.value.trim()){
   console.log("El nombre es requerido");
   errorNombre[0].innerHTML = "El nombre es requerido"
   
}
if (!regExpLetras.test(nombre.value)){
   errorNombre[0].innerHTML = "Solo se permiten letras"
}
if (!asunto.value.trim()){
    errorAsunto[0].innerHTML = "El asunto es requerido"
    
}
if (!mensaje.value.trim()){
    errorMensaje[0].innerHTML = "El mensaje es requerido"
    return;
   }

      resultado[0].innerHTML = "El mensaje fue enviado con exito"
   });
