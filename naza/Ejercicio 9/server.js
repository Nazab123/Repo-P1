/* ⭐Se solicita una aplicación que ayude al usuario a la toma de decisiones al momento de salir de su casa.
Los días domingo el usuario no trabaja, el resto de los días sí.
Si la temperatura está por debajo de los 10 grados el usuario debe "abrigarse mucho", si la temperatura está por encima de los 20 grados el usuario deberá "ponerse ropa cómoda" y para casos intermedios usará "abrigo moderado". 
Se ingresa la temperatura y el día de la semana y la aplicación deberá mostrar la salida. A la salida se le incorporará para todos los casos la instrucción de levantarse:

Ejemplos de salida:
Ej. 1:
Levantarse
Ponerse ropa cómoda
Quedarse en casa, hoy no trabaja

Ej. 2:
Levantarse
Abrigarse Mucho
Ir al trabajo

Prestar atención a que las tres acciones no tienen vinculación entre sí. */

let ver = document.querySelector("#btnVer")
ver.addEventListener("click", function () {

let dia = document.querySelector("#selDia").value
let temp = document.querySelector("#numTemp").value
let ntemp = Number(document.querySelector("#numTemp").value)

let acumulado = "Levantarse, "

if (temp === ""|| isNaN(ntemp)){
    acumulado = "inserte una temperatura válida"

} else if (ntemp < 10){
    acumulado = acumulado + "abrigarse mucho"

} else if (ntemp >= 10 && ntemp <= 20){
    acumulado = acumulado + "abrigo moderado"

}else{
    acumulado = acumulado + "ponerse ropa cómoda"

}

if (dia === "1"){
    acumulado = acumulado + ", Quedarse en casa, hoy no trabaja"

}else if (dia === "2"){
    acumulado = acumulado + ", Ir al trabajo"
} else{
    acumulado = "inserte un día válido"
}

let resultado = document.querySelector("#pResultado")
resultado.innerHTML = acumulado

})

/*     <label>un dia</label>
    <select id="selDia">
    <option value="">-- Seleccionar --</option>
    <option value="1">Lunes</option>
    <option value="2">Martes</option>
    <option value="3">Miercoles</option>
    <option value="3">Jueves</option>
    <option value="3">Viernes</option>
    <option value="3">Sabado</option>
    <option value="3">Domingo</option>
</select>

<label> temperatura </label>
<input id="numTemp" type="number">

<button id="btnVer">ver rutina</button>

<p id="pResultado"></p> */