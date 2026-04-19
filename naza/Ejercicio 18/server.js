/* ⭐⭐Ingresar seis valores y retornar la suma total del valor absoluto de cada uno. Se deberá procurar que la solución utilice un único botón y un único campo de texto para tomar datos. */

let contador = 0
let suma = 0

let calcular = document.querySelector("#btnSumar")
calcular.addEventListener("click", function () {
    let numeros = document.querySelector("#valoresNum").value
    let n = Number(numeros)
    let respuesta = ""

    if (numeros === "" || isNaN(n)){
        respuesta = "verifica los valores"
    } else if(n < 0){
        suma = suma + (n * (-1))
        contador++
    }else {        
        suma = suma + n
        contador++
        }

    if (contador === 6){
        calcular.setAttribute("disabled", "")
        respuesta = `${suma} es la suma de los 6 valores`
    }

    let resultado = document.querySelector("#pResultado")
    resultado.innerHTML = respuesta
})

/*  <label>ingresa 6 valores</label>
    <input id="valoresNum" type=" number">
    <button id="btnSumar"> sumar valor </button>
    <p id="pResultado"></p>
 */