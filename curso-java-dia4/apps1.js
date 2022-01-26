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

const regExpLetras = /^[a-zA-Z\u00f1\u00d1]\w+/;


if (!regExpLetras.test(nombre.value)){
   errorNombre[0].innerHTML = "Solo se permiten letras"
}

if (!regExpLetras.test(asunto.value)){
    errorAsunto[0].innerHTML = "El asunto es requerido"
    
}
if (!regExpLetras.test(mensaje.value)){
    errorMensaje[0].innerHTML = "El mensaje es requerido"
    
   }
if (!regExpLetras.test(nombre.value) || !regExpLetras.test(asunto.value) || !regExpLetras.test(mensaje.value)) return;

      resultado[0].innerHTML = "El mensaje fue enviado con éxito"
   });
