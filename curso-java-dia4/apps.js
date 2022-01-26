// const boton = document.querySelector('#boton')
// const cambio = document.querySelector("#cambio")


// btnCambiar.addEventListener("click", () => {
//    cambio = "blue";
    
// })

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const resultado = document.getElementsByClassName("resultado");
const errorNombre = document.getElementsByClassName("errorNombre")

formulario.addEvenListener("submit", (event) => {
   event.preventDefault();
   console.log("me diste click");
   console.log(!nombre.value.trim());


if (!nombre.value.trim() ){
   console.log("El nombre es requerido");
   errorNombre[1].innerHTML = "El nombre es requerido";
   return;
}
   const regExpLetras = /^[a-zA-Z]+$/gi;
   const regExpEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

   if (!regExpLetras.text(nombre.vale)){
      return (resultado.innerHTML = "Nombre solo con letras no números");
   }
   if (!regExpEmail.test(email.value)){
      return (resultado.innerHTML = "Ingrese un email válido");
   }
   resultado.innerHTML = `<h3>Nombre: ${nombre.value}</h3>
                          <h3>Email: ${email.value}</h3>`;
   });


