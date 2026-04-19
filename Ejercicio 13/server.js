/* ⭐Ingresar dos números y al presionar un botón indicar si el primero es múltiplo del segundo.
 */

let verificar = document.querySelector("#btnVerificar")
verificar.addEventListener("click", function () {
    let valor1 = document.querySelector("#numValor1").value
    let valor2 = document.querySelector("#NumValor2").value
    let n1 = Number(valor1)
    let n2 = Number(valor2)
    let respuesta = ""

    if (valor1 = ""|| isNaN(n1) && valor2 === ""|| isNaN(n2)){
        respuesta = "verifique los valores del valor 1 y del valor 2"

    } else if (valor1 === ""|| isNaN(n1) ) {
        respuesta = `el valor 1 = "${valor1}" no es un numero valido`

    }else if (valor2 === ""|| isNaN(n2)){
        respuesta = `el valor 1 = "${valor2}" no es un numero valido`
    } else if ( n1 % n2 === 0){
        respuesta = `${n1} es múltipo de ${n2}`
    } else {
        respuesta = `${n1} no es múltiplo de ${n2}`
    }

    let resultado = document.querySelector("#pResultado")
    resultado.innerHTML = respuesta
    
})



/*  <label>Valor 1</label>
    <input id="numValor1" type="number">
    <label>Valor 2</label>
    <input id="NumValor2" type="number">
    <button id="btnVerificar">Verificar</button>
    <p id="pResultado"></p> */