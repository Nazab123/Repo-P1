/* ⭐Ingresar un número y presionar un botón, al presionar el botón, si el número es mayor que 30 mostrar “es mayor que treinta”, sino si es menor que 10 mostrar “menor que 10”, sino mostrar “Entre diez y treinta”. */
let verificar = document.querySelector("#btnVerificar")
verificar.addEventListener("click", function () {
    let numero = document.querySelector("#numIngresado").value
    let n = Number(document.querySelector("#numIngresado").value)
    let respuesta = ""

    if(numero === "" || isNaN(n)){
        respuesta = "inserte un valor valido"

    }else if (n > 30){
        respuesta = "es mayor que treinta"

    }else if(n < 10){
        respuesta = "menor que 10"

    }else{
        respuesta = "Entre diez y treinta"
    }
    let resultado = document.querySelector("#pResultado")
    resultado.innerHTML= respuesta
})

/*  <label>ingresa un valor</label>
    <input id="numIngresado" type="number">
    <button id="btnVerificar">Verificar</button>
    <p id="pResultado"></p>
 */