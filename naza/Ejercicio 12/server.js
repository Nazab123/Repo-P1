/* ⭐Leer un caracter e indicar si es una vocal o no.
 */
let verificar = document.querySelector("#btnVerificar")
verificar.addEventListener("click", function () {
    let cara = document.querySelector("#txtCar").value
    let respuesta = " "

    if (cara.length !== 1){
        respuesta = "ingrese un único caracter"

    } else if (!isNaN(cara)){
        respuesta = "ingrese una letra"

    } else if (cara === "a"||cara === "A"||cara === "e"||cara === "E"||cara === "i"||cara === "I"||cara === "o"||cara === "O"||cara === "u"||cara === "U"){
        respuesta = `${cara} es una vocal`
    } else {
        respuesta = `${cara} no es una vocal`

    }

    let resultado = document.querySelector("#pResultado")
    resultado.innerHTML = respuesta
    
})


/*  <label>ingrese un caracter</label>
    <input id="txtCar" type="text">
    <button id="btnVerificar">Verificar</button>
    <p id="pResultado"></p> */