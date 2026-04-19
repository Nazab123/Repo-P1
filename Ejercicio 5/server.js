/* ⭐Ingresar un número y mostrar si es mayor que 10 y menor que 20 o no. */

let calcular = document.querySelector("#btnVerificar")
calcular.addEventListener("click", function () {
    let numero = document.querySelector("#numNum").value
    let respuesta = ""
    let n = Number(numero)

    if (numero === "" || isNaN(n)){
        respuesta = "escribi un numero valido"
    } else if (n > 10 && n < 20){
        respuesta = "es mayor a 10 o menor que 20"
    }else {
        respuesta = " es menor o igual a 10 o mayor o igual a 20"
    }
    let resultado = document.querySelector("#pResultado")
    resultado.innerHTML = respuesta
})

/*  <label>número</label>
    <input id="numNum" type="number">
    <button id="btnVerificarr"></button>
    <p id="pResultado"></p>
 */