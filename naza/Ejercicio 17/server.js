/* ⭐Escribir una expresión condicional equivalente a la que Se muestra, sin la utilización de condicionales if consecutivos (utilizar un solo if):

if( a < 0 )
  {
        document.querySelector(“#parrafo”).innerHTML = “a está fuera de rango”;
  }
if( a > 10 )
  {
        document.querySelector(“#parrafo”).innerHTML = “a está fuera de rango”;
  }

Crear las variables, asignarles valores y probar la nueva solución. */


let verificar = document.querySelector("#btnVerificar")
verificar.addEventListener("click", function () {
    let a = document.querySelector("#Anum").value
    let aNum = Number(a)
    let respuesta = ""

    if (a ==="" || isNaN(aNum)){
        respuesta = "verifique el valor ingresado"
    } else if ( a < 0 || a > 10){
        respuesta = `${a} esta fuera del rango`
    } else {
        respuesta = `${a} esta dentro del rango`
    }

    let resultado = document.querySelector("#pResultado")
    resultado.innerHTML = respuesta
})



/*  <label> ingrese el numero A</label>
    <input id="Anum" type="number">
    <button id="btnVerificar"> Verificar Rango</button>
    <p id="pResultado"></p> */