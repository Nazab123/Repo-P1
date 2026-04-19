/* ⭐Ingresar un número y mostrar si es menor que -20 o mayor que 20, indicando con un aviso "CUMPLE" para cualquiera de los dos casos o "NO CUMPLE" en caso que esté en el rango de menos veinte a veinte. */

let verificar = document.querySelector("#btnVerificar")
verificar.addEventListener("click", function () {
    let numero = document.querySelector("#numIngresado").value
    let n = Number(document.querySelector("#numIngresado").value)
    let respuesta = ""

    if(numero===""|| isNaN(n)){
        respuesta = "inserte un valor valido"

    }else if(n > 20||n < -20){
        respuesta = "CUMPLE"

    }else{
        respuesta = "NO CUMPLE"
    }
    let resultado = document.querySelector("#pResultado")
    resultado.innerHTML= respuesta

})
/* 
    <label>ingrese un numero</label>
    <input id="numIngresado" type="number">
    <button id="btnVerificar">Verificar</button>
    <p id="pResultado"></p>
 */