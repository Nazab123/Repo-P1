/* ⭐Ingresar un número e informar si es múltiplo de 7 y de 3 simultáneamente.
 */

let verificar = document.querySelector("#btnVerificar")
verificar.addEventListener("click", function(){
    let numeroIngresado = document.querySelector("#numUser").value
    let n = Number(document.querySelector("#numUser").value)
    let respuesta = ""

    if (numeroIngresado === ""|| isNaN(n)){
        respuesta = "inserte un valor válido"

    }else if (n % 7 === 0 && n % 3 === 0){
        respuesta = `${n} es múltiplo de 7 y 3`

    } else{
        respuesta = `${n} NO es múltiplo de 7 y 3`
    }

    let resultado = document.querySelector("#pResultado")
    resultado.innerHTML= respuesta
    
})


    
/*  <label>Verificar si es múltiplo de 7 y de 3 simultáneamente</label>
    <input id="numUser" type="number">
    <button id="btnVerificar">Verificar</button>
    <p id="pResultado"></p>
     */