/* ⭐Escribir una expresión condicional equivalente, sin la utilización de condicionales if anidados (utilizar un solo if):

  if( a > b )
  {
    if( a > c )
    {
        document.querySelector(“#parrafo”).innerHTML = “a es el mayor de los 3”;
    }
  }
Crear las variables, asignarles valores y probar la nueva solución.
 */

let verificar = document.querySelector("#btnVerificar")
verificar.addEventListener("click", function () {
    let a = document.querySelector("#numNumA").value
    let b = document.querySelector("#numNumB").value
    let c =document.querySelector("#numNumC").value
    let aNum = Number(a)
    let bNum = Number(b)
    let cNum = Number(c)
    let respuesta = ""

    if (a === "" || isNaN(aNum)||b === "" || isNaN(bNum)||c === "" || isNaN(cNum)){
        respuesta = " verifique que los valores sean un numero y no esten vacios"
    } else if (aNum > cNum && aNum > bNum){
        respuesta = `${aNum} es el mayor de los 3`
    }else {
        respuesta = `${aNum} no es el mayor de los 3`
    }
    let resultado = document.querySelector("#pResultado")
    resultado.innerHTML = respuesta
})


/*  <label>ingrese un numero a</label>
    <input id="numNumA" type="number">
    <label>ingrese un numero b</label>
    <input id="numNumB" type="number">
    <label>ingrese un numero c</label>
    <input id="numNumC" type="number">
    <button id="btnVerificar">Verificar</button>
    <p id="pResultado"></p> */