/* ⭐Ingresar un número e indicar si es positivo o negativo.
El número será positivo si es mayor o igual a cero. */

let Verificar = document.querySelector("#BtnVerificar")
Verificar.addEventListener("click", function () {

    let Valor1 = document.querySelector("#NumValor1").value
    let Respuesta = ""
    let NumValor1 = Number(Valor1)

    if (Valor1 =="" || isNaN(Valor1)){
    Respuesta = "Inserte un valor válido"

}else if ( NumValor1 < 0){
Respuesta = "es negativo"
}else{
Respuesta = "es positivo"
}

let Mostrar = document.querySelector("#PNumero")
Mostrar.innerHTML = Respuesta
    
})




/*     <label>Inserte un numero para verificar si es + || - </label>
    <input id="NumValor1" type="number">
    <button id="BtnVerificar">verificar</button>
    <p id="PNumero"></p>
     */