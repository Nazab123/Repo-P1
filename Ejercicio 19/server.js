/* ⭐⭐Ingresar cinco números. Indicar cuántos son múltiplos de 5, cuantos son mayores que 20 y cuantos cumplieron ambas condiciones en simultáneo.
La solución deberá utilizar un único campo de texto y un único botón
 */
let contador = 0
let cMulti = 0
let cMayor = 0
let ambasC = 0
let noCumple = 0


let guardar = document.querySelector("#btnGuardar")

guardar.addEventListener("click", function () {
    let numero = document.querySelector("#valoresNum").value
    let n = Number(numero)
    let respuesta = ""


    if(numero === "" || isNaN(n)){
        respuesta = "ingrese valores validos"
    } else if (n > 20 && n % 5 === 0){
        ambasC++
        contador++
    } else if (n > 20){
        cMayor++
        contador++
    }else if (n % 5 === 0){
        cMulti++
        contador++
    }else{
        noCumple++
        contador++
    }

    if (contador === 5){
        guardar.setAttribute("disabled","")
        respuesta = `${cMulti} multiplos de 5 , ${cMayor} mayor a 20 ,${ambasC} multiplos de 5 y mayor a 20, ${noCumple} no cumple ninguna condicion`
    }


    let resultado = document.querySelector("#pResultado")
    resultado.innerHTML = respuesta
})




/* 
/*     <label>ingrese 5 valores</label>
    <input id="valoresNum" type="number">
    <button id="btnGuardar"> guardar valor</button>
    <p id="pResultado"></p> */