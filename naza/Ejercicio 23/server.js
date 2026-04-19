/* ⭐⭐Se ingresan las notas de examen de un grupo de estudiantes. Luego de cada ingreso actualizar la información mostrando cuántos perdieron (<70), cuántos salvaron, y cuántos sacaron una muy buena nota (>90). A su vez indicar cuál fue el promedio de notas, cuál fue la nota máxima y cuál fue la nota mínima.
 */

    let contadorClick = 0
    let cantidadPerdieron = 0
    let cantidadSalvados = 0
    let cantidadBuena = 0
    let sumaNotas = 0
    let maximo = 0
    let minimo = Number.MAX_SAFE_INTEGER
    let respuesta = ""
let boton = document.querySelector("#buttonNotas")
boton.addEventListener("click", function () {
    let notas = document.querySelector("#numNotas").value
    let n = Number(notas)

    if (notas === "" || isNaN(n)|| n < 0){
        respuesta = "ingrese un valor valido"
    } else { 
        contadorClick++
        sumaNotas += n

        if (n < 70){
        cantidadPerdieron++


        }else if (n > 90){
            cantidadSalvados++
            cantidadBuena++

        } else{
            cantidadSalvados++
        }

    if(minimo > n){
        minimo = n
    }

    if (maximo < n){
        maximo = n
    }

    let promedio = sumaNotas/contadorClick

    respuesta = `perdieron ${cantidadPerdieron}, salvaron ${cantidadSalvados}, buena nota ${cantidadBuena}, promedio ${promedio}, nota maxima ${maximo}, nota minima ${minimo}`
    }

    let resultado = document.querySelector("#pResultado")
    resultado.innerHTML = respuesta    
})

/*  <label>ingrese las notas</label>
    <input id="numNotas" type="number">
    <button id="buttonNotas">ingresar nota</button>
    <p id="pResultado"></p> */