/* ⭐Ingresar dos números y presionar un botón, al presionar el botón, si el primero es mayor que el segundo restar al primero el segundo, sino restar al segundo el primero y para cualquier caso mostrar el resultado. */


let calcular = document.querySelector("#btnCalcular")
calcular.addEventListener("click", function () {
    let valor1 = document.querySelector("#numValor1").value
    let valor2 = document.querySelector("#numValor2").value
    let n1 = Number(document.querySelector("#numValor1").value)
    let n2 = Number(document.querySelector("#numValor2").value)
    let respuesta =""

    if (valor1 === "" || isNaN(n1) && valor2 === "" || isNaN(n2)){
        respuesta ="inserte un valor valido en valor 1 y en valor 2"
    } else if (valor1 === "" || isNaN(n1)){
        respuesta ="inserte un valor valido en valor 1"
    } else if (valor2 === "" || isNaN(n2)){
        respuesta ="inserte un valor valido en valor 2"
    } else if(n1 > n2){
       respuesta= n1-n2
    }else{
        respuesta= n2-n1
    }
    let resultado = document.querySelector("#pResultado")
    resultado.innerHTML = respuesta
})

/*  <label>valor 1</label>
    <input id="numValor1" type="number">
    <label>valor 2</label>
    <input id="numValor2" type="number">
    <button id="btnCalcular">Calcular</button>
    <p id="pResultado"></p>
 */