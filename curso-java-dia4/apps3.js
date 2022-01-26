const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const btnSuma = document.getElementById("btn-sumar");
const btnResta = document.getElementById("btn-restar");
const resultado = document.querySelector(".resultado");

btnSuma.addEventListener("click" , () => {
    let sumar = parseInt(valor1.value) + parseInt(valor2.value);
    resultado.textContent = `${sumar}`
});
btnResta.addEventListener("click" , () => {
    let restar = parseInt(valor1.value) - parseInt(valor2.value);
    if(restar < 0){
        resultado.textContent = "0"
        return
    }
    resultado.textContent = `${restar}`
});