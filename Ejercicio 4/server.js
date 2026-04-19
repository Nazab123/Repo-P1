/* ⭐Ingresar un número, en caso que sea negativo, convertirlo a positivo, mostrar el número en un párrafo.
Multiplicando el valor negativo por -1 obtendremos el valor absoluto de ese número. */

let calcular = document.querySelector("#btnVerificar")
calcular.addEventListener("click", function () {
    let numero = document.querySelector("#numPos").value
    let n = Number(numero)
    let respuesta = ""
    let positivo = n* -1

    if(numero === "" || isNaN(n)){
        respuesta= "inserte un valor valido"
    }else if (n >= 0 ){ 
        respuesta =`${n} es mayor o igual a 0`
    }else  respuesta =`${n} es negativo, su valor absoluto es ${positivo}`
    
    let resultado = document.querySelector("#pResultado")
    resultado.innerHTML=respuesta
    
})


/*  <label>Numero para ver si es positivo o negativo, si es negativo lo convierto a psoitivo</label>
    <input id="numPos" type="number">
    <button id="btnVerificar">verificar</button>
    <p id="pResultado"></p>
     */